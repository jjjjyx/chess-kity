/*-----------------------------------------------------
 * livereload Default Setting
 *-----------------------------------------------------*/
'use strict';
var path = require('path');
var os = require('os');

/*-----------------------------------------------------
 * Module Setting
 *-----------------------------------------------------*/
module.exports = function(grunt) {

    // These plugins provide necessary tasks.
    /* [Build plugin & task ] ------------------------------------*/
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-autoprefixer');

    var banner = '/*!\n' +
        ' * ====================================================\n' +
        ' * <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
        ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%=pkg.licenses %>\n' +
        ' * ====================================================\n' +
        ' */\n\n';

    var packs = ['chess','login'];
    var sources = require('./import.js');
    var srcPath = 'src/';
    var distPath = os.hostname().indexOf('ubuntu')>=0?'../../www/chess/':'dist/';

    var distPages = ['index','login'].map(function(name) {
        return distPath + name + '.html';
    });

    var concatConfigs = {};

    packs.forEach(function(pack) {
        concatConfigs[pack] = {
            options: {
                banner: banner + '(function(window) {\n\n',
                footer: '\n\n})(window)',
                sourceMap: false,
                sourceMapStyle: 'link'
            },
            src: sources.filter(function(source) {
                return source.pack == '*' || source.pack.split('|').indexOf(pack) !== -1;
            }).map(function(source) {
                return source.path;
            }),
            dest: distPath + 'chess.' + pack + '.js'
        };
    });

    // Project configuration.
    grunt.initConfig({

        // Metadata.
        pkg: grunt.file.readJSON('package.json'),

        clean: ['dist'],//'php/mindmap'  'native-support/upload/', 'native-support/src/tmp/'

        concat: concatConfigs,

        uglify: {
            minimize: {
                options: {
                    banner: banner,
                    sourceMap: false
                },
                files: (function() {
                    var files = {};
                    packs.forEach(function(pack) {
                        files[distPath + 'chess.' + pack + '.min.js'] = distPath + 'chess.' + pack + '.js';
                    });
                    return files;
                })()
            }
        },

        copy: {
            dir: {
                files: [{
                    src: [
                        'ui/theme/**/css/*.css',
                        'ui/theme/**/image/*',
                        'ui/theme/**/img/*',
                        'lang/**/*',
                        'static/**/*',
                        'index.html',
                        'login.html',
                    ],
                    dest: distPath
                }]
            },
            chess_config: {
                expand: true,
                src: 'config/chess.config.js',
                dest: distPath
            },
            mise: {
                files: [{
                    src: ['LICENSE','favicon.png'],
                    dest: distPath
                }]
            }
        },

        replace: {
            online: {
                src: distPages,
                overwrite: true,
                replacements: [{
                    from: /import\.js\?pack=([\w-]+)\"/,
                    to: 'chess.$1.min.js"'
                }]
            },

            pageNoCache: {
                src: distPages,
                overwrite: true,
                replacements: [{
                    from: /(src|href)=\"(.+?)\.(js|css)\"/ig,
                    to: '$1="$2.$3?_=' + (+new Date()) + '"'
                }]
            },

            imageNoCache: {
                src: 'dist/ui/theme/default/css/default.all.css',
                overwrite: true,
                replacements: [{
                    from: /\.png/ig,
                    to: '.png?_=' + (+new Date())
                }]
            }
        },
        watch: {
            less: {
                files: ['ui/theme/**/*.less'],
                tasks: ['less:compile']// 'autoprefixer'
            }
        },

        less: {
            compile: {
                files: {
                    'ui/theme/default/css/default.all.css': [
                        'ui/theme/default/css/import.less'
                    ]
                }
            }
        }

    });
    

    // Build task(s).
    grunt.registerTask('default', ['clean', 'concat', 'uglify', 'less', 'copy', 'replace']);
    //grunt.registerTask('dev', ['less']);

};
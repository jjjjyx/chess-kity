

/**
 * 开发版本的文件导入
 */
(function() {
    /* 可能的文件路径，已按照依赖关系排序 */
    var pathInfo = [

        /* 依赖库 */
        { path: 'lib/jquery/dist/jquery.min.js',              pack: '*' },
        { path: 'lib/objectId.js',                      pack: 'chess' },
        { path: 'lib/sweetalert.min.js',                pack: 'chess' },
        { path: 'lib/promise-1.0.0.js',                 pack: '*' },
        { path: 'lib/bootstrap.min.js',                 pack: '*' },
        { path: 'lib/jquery.cookie/jquery.cookie.js',   pack: 'chess' },
        { path: 'lib/jquery.transit.min.js',            pack: 'chess' },
        { path: 'lib/jquery.blob.js',                   pack: 'chess' },
        { path: 'lib/socket.io-client/socket.io.js',    pack: 'chess' },
        
        /* Kity 依赖库 */
        { path: 'lib/kity.js',                          pack: 'chess' },
        
        /* 核心代码 */
        { path: 'src/code/kchess.js',                   pack: 'chess' },
        { path: 'src/code/chess.js',                    pack: 'chess' },
        { path: 'src/code/command.js',                  pack: 'chess' },
        { path: 'src/code/utils.js',                    pack: 'chess' },//工具
        { path: 'src/code/key.js',                      pack: 'chess' },//棋子枚举
        { path: 'src/code/piece.js',                    pack: 'chess' },//棋子类
        { path: 'src/code/bylaw.js',                    pack: 'chess' },//着子算法
        { path: 'src/code/option.js',                   pack: 'chess' },//选项
        { path: 'src/code/event.js',                    pack: 'chess' },//事件
        { path: 'src/code/status.js',                   pack: 'chess' },//
        { path: 'src/code/paper.js',                    pack: 'chess' },//初始化svg 初始化棋盘
        { path: 'src/code/select.js',                   pack: 'chess' },//选择
        { path: 'src/code/socket.js',                   pack: 'chess' },//连接
        

        { path: 'src/code/module.js',                   pack: 'chess' },
        
        // { path: 'src/core/readonly.js',                 pack: 'chess' },
        { path: 'src/code/layout.js',                   pack: 'chess' },
        { path: 'src/code/theme.js',                    pack: 'chess' },
        { path: 'src/code/render.js',                   pack: 'chess' },

        { path: 'src/module/pieceText.js',              pack: 'chess' },
        { path: 'src/module/Dot.js',                    pack: 'chess' },
        { path: 'src/module/online.js',                    pack: 'chess' },
        { path: 'src/module/select.js',                 pack: 'chess' },
        { path: 'src/theme/stype1.js',                  pack: 'chess' },
        /* UI 基础 */
        { path: 'ui/ui.js',                             pack: 'chess' },
        { path: 'ui/eve.js',                            pack: 'chess' },
        // { path: 'ui/memory.js',                         pack: 'chess' },//状态记忆
        { path: 'ui/modal.js',                          pack: 'chess' },//状态记忆
        // { path: 'ui/axss.js',                           pack: 'chess' },


        { path: 'ui/main/main.js',                           pack: 'chess' },
        { path: 'ui/main/start.js',                           pack: 'chess' },
        { path: 'ui/main/online.js',                           pack: 'chess' },
        { path: 'ui/main/time.js',                           pack: 'chess' }
    ];
    if (typeof(module) === 'object' && module.exports) {
        module.exports = pathInfo;
    }else 
    if (document) {

        // currentScript polyfill
        if("undefined" === typeof document.currentScript){
            (function(){
                /***************************************************************************/
                /* document.currentScript polyfill + improvements */
                /***************************************************************************/
                var scripts = document.getElementsByTagName('script');
                document._currentScript = document.currentScript;

                // return script object based off of src
                var getScriptFromURL = function(url) {
                    for (var i = 0; i < scripts.length; i++)
                        if (scripts[i].src === url)
                            return scripts[i];

                    return undefined;
                };

                var actualScript = document.actualScript = function() {
                    if (document._currentScript)
                        return document._currentScript;

                    var stack;
                    try {
                        window.omgwtf();
                    } catch(e) {
                        stack = e.stack;
                    }

                    if (!stack)
                        return undefined;

                    var e = stack.indexOf(' at ') !== -1 ? ' at ' : '@';
                    while (stack.indexOf(e) !== -1)
                        stack = stack.substring(stack.indexOf(e) + e.length);

                    stack = stack.substring(stack.indexOf('http'), stack.indexOf(':', stack.indexOf(':')+1));

                    return getScriptFromURL(stack);
                };
                if (document.__defineGetter__)
                    document.__defineGetter__('currentScript', actualScript);

            })();


        }
        /* jshint browser:true */
        var script = document.currentScript || document.actualScript();
        var src = script.src;
        var pack = /pack=([\w-]+)(?:&|$)/.exec(src);
        if (!pack) return;
        pack = pack[1];
        while (pathInfo.length) {
            var info = pathInfo.shift();
            if (info.pack == '*' || info.pack.split('|').indexOf(pack) != -1) {
                window.document.write('<script type="text/javascript" src="' + info.path + '"></script>');
            }
        }
    }
})();

var cssLikeValueMatcher = {
    left: function(value) {
        return 3 in value && value[3] ||
            1 in value && value[1] ||
            value[0];
    },
    right: function(value) {
        return 1 in value && value[1] || value[0];
    },
    top: function(value) {
        return value[0];
    },
    bottom: function(value) {
        return 2 in value && value[2] || value[0];
    }
};

Utils.extend(CHESS, {
    _themes: {},

    /**
     * 注册一个主题
     *
     * @param  {String} name  主题的名称
     * @param  {Plain} theme 主题的样式描述
     *
     * @example
     *     CHESS.registerTheme('default', {
     *         'root-color': 'red',
     *         'root-stroke': 'none',
     *         'root-padding': [10, 20]
     *     });
     */
    registerTheme: function(name, theme) {
        CHESS._themes[name] = theme;
    },

    getThemeList: function() {
        return CHESS._themes;
    }
});

kity.extendClass(Chess, {

    /**
     * 切换主题
     * @param  {String} name 要使用的主题的名称
     */
    useTheme: function(name) {

        this.setTheme(name);
        // this.refresh(800);

        return true;
    },

    setTheme: function(name) {
        this._theme = name || null;
        // this.getRenderTarget().style.background = ;
        this.fire('themechange', {
            theme: name
        });
    },

    /**
     * 获取当前主题
     * @return {[type]} [description]
     */
    getTheme: function(node) {
        return this._theme || this.getOptions('defaultTheme');
    },

    getThemeItems: function(node) {
        var theme = this.getTheme(node);
        return CHESS._themes[this.getTheme(node)];
    },

    /**
     * 获得的样式
     * @param  {String} item 样式名称
     */
    getStyle: function(item) {
        return this.getThemeItems()[item];
    },
});

// kity.extendClass(MinderNode, {
//     getStyle: function(name) {
//         return this.getMinder().getNodeStyle(this, name);
//     }
// });

// CHESS.registerModule('Theme', {
//     defaultOptions: {
//         defaultTheme: 'default'
//     },
//     commands: {
//         'theme': kity.createClass('ThemeCommand', {
//             base: Command,

//             execute: function(km, name) {
//                 return km.useTheme(name);
//             },

//             queryValue: function(km) {
//                 return km.getTheme() || 'default';
//             }
//         })
//     }
// });

Chess.registerInit(function() {
    this.setTheme('stype1');
});
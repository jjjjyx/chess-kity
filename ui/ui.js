/**
 *
 * UI 注册及加载机制
 *
 * @author: jjjjyx
 * @copyright: jjjjyx 2016
 */

(function() {
    var uiQueue = [];

    /* 注册一个新的 UI 交互 */
    CHESS.registerUI = function(id, deps, ui) {
        if (typeof(deps) == 'function') {
            ui = deps;
            deps = null;
        }
        uiQueue.push({
            id: id,
            ui: ui,
            deps: deps
        });
    };

    kity.extendClass(Chess, {
        /* 为实例注册 UI 交互 */
        initUI: function() {
            var ui = this._ui = {};
            var chess = this;

            uiQueue.forEach(function(uiDeal) {
                var deps = uiDeal.deps;
                if (deps) deps = deps.map(function(dep) {
                    return chess.getUI(dep);
                });
                ui[uiDeal.id] = uiDeal.ui.apply(null, [chess].concat(deps || []));
            });

            // 阻止非象棋事件冒泡
            $('#content-wrapper').delegate('#panel, #tab-container, .fui-dialog, #main-menu, .sweet-alert', 'keydown keyup', function(e) {
                e.stopPropagation();
            });

            // 阻止非象棋事件冒泡
            $('#content-wrapper').delegate('input', 'mousedown mousemove mouseup contextmenu', function(e) {
                e.stopPropagation();
            });

            chess.getPaper().addClass('loading-target');

            this.fire('interactchange');
            this.fire('uiready');
        },

        /* 获得实例的 UI 实例 */
        getUI: function(id) {
            return this._ui[id];
        }
    });

    $.ajaxSetup({ cache: false });
    $.extend($, {
        pajax: function() {
            var jqXHR = $.ajax.apply($, arguments);
            return new Promise(function(resolve, reject) {
                jqXHR.done(resolve);
                jqXHR.fail(function(jqXHR, textStatus, errorThrown) {
                    var e = new Error(textStatus);
                    e.getDetail = function() {
                        try {
                            return 'jQuery XHR Error: \n' + JSON.stringify(errorThrown);
                        } catch (e) {
                            return errorThrown;
                        }
                    };
                    reject(e);
                });
            });
        }
    });

    // preload css images
    $(function() {
        var list = ['b_box.png','b_p.png','bg.jpg','r_box.png','r_p.png','b_c.png','b_s.png','bg.png','r_c.png','r_s.png','b_j.png','b_x.png','dot.png','r_j.png','r_x.png','b_m.png','b_z.png','r_m.png','r_z.png'];
        list.forEach(function(item) {
            (new Image()).src = 'ui/theme/default/img/' + item;
        });
        list = ['3.jpg','fail.png','login_bg_0.jpg','undo.png','draw.png','login_bg.png','start.png'];
        list.forEach(function(item) {
            (new Image()).src = 'ui/theme/default/image/' + item;
        });
    });

})();
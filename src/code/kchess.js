var CHESS = window.CHESS = function() {
    var instanceMap = {},
        instanceId = 0,
        uuidMap = {};
    return {
        version: '1.0.0',
        uuid: function(name) {
            name = name || 'unknown';
            uuidMap[name] = uuidMap[name] || 0;
            ++uuidMap[name];
            return name + '_' + uuidMap[name];
        },
        createChess: function(renderTarget, options) {
            options = options || {};
            options.renderTo = Utils.isString(renderTarget) ? document.getElementById(renderTarget) : renderTarget;
            var chess = new Chess(options);
            this.addChess(options.renderTo, chess);
            return chess;
        },
        addChess: function(target, chess) {
            var id;
            if (typeof(target) === 'string') {
                id = target;
            } else {
                id = target.id || ("CHESS_" + instanceId++);
            }
            instanceMap[id] = chess;
        },
        getChess: function(target, options) {
            var id;
            if (typeof(target) === 'string') {
                id = target;
            } else {
                id = target.id || ("CHESS_INSTANCE_" + instanceId++);
            }
            return instanceMap[id] || this.createChess(target, options);
        },
        //挂接多语言
        LANG: {},
        //棋子
        PIECE:{},
        //棋子价值
        PIECEVALUE:{}
    };
}();

var Chess = kity.createClass('Chess', {
    constructor: function(options) {
        this._options = Utils.extend(window.CHESS_CONFIG || {}, options);

        var initQueue = Chess._initFnQueue.slice();

        // @see option.js
        // @see event.js
        // @see status.js
        // @see paper.js
        // @see key.js
        // @see contextmenu.js
        // @see module.js
        // @see data.js         
        // @see readonly.js
        // @see layout.js
        // @see theme.js
        
        while (initQueue.length) initQueue.shift().call(this, options);
        this.fire('ready');

    }
});
Chess._initFnQueue = [];
Chess.registerInit = function(fn) {
    //console.log(fn);
    Chess._initFnQueue.push(fn);
};
/**
 * @fileOverview
 *
 * 初始化渲染容器
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
Chess.registerInit(function() {
    this._initPaper();
    // this._initPieceFrame();
});
kity.extendClass(Chess, {
    
    _initPaper: function() {

        this._paper = new kity.Paper();
        this._paper.getNode().setAttribute('contenteditable', true);
        this._paper.getNode().ondragstart = function(e) {
            e.preventDefault();
        };
        this._paper.shapeNode.setAttribute('transform', 'translate(0.5, 0.5)');

        this._addRenderContainer();
        var defaultmap = this._defaultmap = [
                ['C0','M0','X0','S0','J0','S1','X1','M1','C1'],
                [    ,    ,    ,    ,    ,    ,    ,    ,    ,],
                [    ,'P0',    ,    ,    ,    ,    ,'P1',    ,],
                ['Z0',    ,'Z1',    ,'Z2',    ,'Z3',    ,'Z4'],
                [    ,    ,    ,    ,    ,    ,    ,    ,    ,],
                [    ,    ,    ,    ,    ,    ,    ,    ,    ,],
                ['z0',    ,'z1',    ,'z2',    ,'z3',    ,'z4'],
                [    ,'p0',    ,    ,    ,    ,    ,'p1',    ,],
                [    ,    ,    ,    ,    ,    ,    ,    ,    ,],
                ['c0','m0','x0','s0','j0','s1','x1','m1','c1']
            ];
        this._initChess(utils.arr2Clone(defaultmap));

        if (this._options.renderTo) {
            this.renderTo(this._options.renderTo);
        }
    },
    _initChess:function(map){
        //初始化时 先删除原有的东西
        this._map = map;
        for (var i = 0; i < 10; i++) {
            for (var n = 0; n < 9; n++) {
                var key = map[i][n];
                if (key) {
                    this._mans[key] = new Chesspiece(utils.extend({}, {
                        x: n,
                        y: i,
                        key: key,
                        defaultx:n,
                        defaulty:i,
                        isShow: false,
                        alpha: 1,
                        pater: key.slice(0, 1),
                        imageSize: {
                            width: 60,
                            height: 60
                        }
                    }, CHESS.PIECE[key.slice(0, 1)]));

                    this._rc.addShape(this._mans[key].getRenderContainer());

                }
                var ddd =  new ChessDot({
                    x: n,
                    y: i,
                    isShow: false,
                    imageSize: {
                        width: 30,
                        height: 30
                    }
                });
                this._chess_dots[n + "_" + i]  = ddd;
                this._dotG.addShape(ddd.getRenderContainer());
            }
        }
    },
    refDots:function(){
        for(var aa in this._chess_dots)
            if(this._chess_dots[aa] instanceof ChessBass)
                this._chess_dots[aa].setData('isShow',false);
    },
    refChess:function(ref){
        this._map =utils.arr2Clone(this._defaultmap);
        for(var piece in this._mans){
            if(this._mans[piece] instanceof Chesspiece){
                this._mans[piece].ref(ref);
            }
        }
    },
    getMans: function() {
        return this._mans;
    },
    _addRenderContainer: function() {
        this._rc = new kity.Group().setId('chess');
        this._dotG = new kity.Group().setId('dot');
        this._pframe = new kity.Group().setId('pframe');
        
        this._paper.addShape(this._pframe);
        this._paper.addShape(this._rc);
        this._paper.addShape(this._dotG);
        
    },

    renderTo: function(target) {
        this._paper.renderTo(this._renderTarget = target);
        this._bindEvents();
    },

    getRenderContainer: function() {
        return this._rc;
    },

    getPaper: function() {
        return this._paper;
    },

    getRenderTarget: function() {
        return this._renderTarget;
    },
});
Chess.registerInit(function() {
    this._initSelection();
});

// 选区管理
kity.extendClass(Chess, {
    _initSelection: function() {
        this._selectedPiece = null;
        this._lastPiect = null;
    },
    renderChangedSelection: function() {
        this._selectedPiece.setData('alpha', 0.6);
        // current.setData('ps',this.getPieceBylaw())
        this._selectedPiece.setTmpData('selected', true);

        this._lastPiect && this._lastPiect.setTmpData('selected', false);
        this._lastPiect && this._lastPiect.setData('alpha', 1);
        // console.log(this._map);this.getThisCamp()=='J0'?utils.arr2Clone(this._map).reverse():
        this._ps = this._bylaw[this._selectedPiece.getData('bl')](this._selectedPiece.getData('x'), this._selectedPiece.getData('y'), this._map
            , this._selectedPiece.getData('my'));
        this._interactChange();
        this.fire('selectionchange');

    },
    getSelectedPiece: function() {
        return this._selectedPiece || null;
    },
    // removeAllSelectedNodes: function() {
    //     var me = this;
    //     var last = this._selectedNodes.splice(0);
    //     this._selectedNodes = [];
    //     last&&this.renderChangedSelection(last);
    //     return this.fire('selectionclear');
    // },
    removeSelectedPiece: function() {
        this._lastPiect = this._selectedPiece
        this._selectedPiece.setTmpData('selected', false);
        this._selectedPiece.setData('alpha', 1);
        this._selectedPiece = null;
    },
    select: function(piece) {
        this._lastPiect = this._selectedPiece;
        this._selectedPiece = piece;
        this.renderChangedSelection();

        return this;
    },
    movePiece: function(dot, eat) {
        var piece = this.getSelectedPiece();
        var self = this;

        // this._map
        if (piece) {
            //记录步数
            var pace = piece.getData('x') + "" + piece.getData('y');
            var move = {
                x:piece.getData('x'),
                y:piece.getData('y'),
                newx:dot.getData('x'),
                newy:dot.getData('y')
            };
            var thelaw = this.createMove(move.x,move.y,move.newx,move.newy);
            //删除子
            delete this._map[piece.getData('y')][piece.getData('x')];
            var key = this._map[dot.getData('y')][dot.getData('x')];
            //移动子
            this._map[dot.getData('y')][dot.getData('x')] = piece.getData('key');
             
            
            //显示移动外框
            this.renderPieceFrame(move,this.getThisCamp());
            piece.setData('x', dot.getData('x'));
            piece.setData('y', dot.getData('y'));

            //取消选择
            this.removeSelectedPiece();
            //恢复可着点
            this.refDots();
            this._pace.push(pace + dot.getData('x') + dot.getData('y'))

            
            //吃掉棋子
            var eatpiece = eat || (key && this._mans[key]);
            var eat_key = key
            if (eatpiece) {
                eatpiece.setData('isShow', false);
                this.fire('movepiece', {
                    pace: pace + dot.getData('x') + dot.getData('y'),
                    thelaw :thelaw,
                    move:move,
                    eat_key:key
                });
            }else{
                this.fire('movepiece', {
                    pace: pace + dot.getData('x') + dot.getData('y'),
                    thelaw :thelaw,
                    move:move,
                });
            }
            
        }
    },
    clickThisPiece: function() {
        return this._selectedPiece.getData('key') != this._lastPiect.getData('key');
    },
    pieceIndexOfChessDots: function(piece) {
        var d = this._chess_dots[piece.getData('x') + '_' + piece.getData('y')]
        return d && d.isShow();
    }

});

kity.extendClass(Chesspiece, {
    isSelected: function() {
        return this.getTmpData('selected');
    },
    clearSelectedFlag: function() {
        this.setTmpData('selected');
    },
    setSelectedFlag: function() {
        this.setTmpData('selected', true);
    }
});
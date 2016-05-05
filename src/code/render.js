var Renderer = CHESS.Renderer = kity.createClass('Renderer', {
    constructor: function(node) {
        this.node = node;
    },

    create: function(node) {
        throw new Error('Not implement: Renderer.create()');
    },

    shouldRender: function(node) {
        return node.isShow();
    },

    watchChange: function(data) {
        var changed;

        if (this.watchingData === undefined) {
            changed = true;
        } else if (this.watchingData != data) {
            changed = true;
        } else {
            changed = false;
        }

        this.watchingData = data;
    },

    shouldDraw: function(node) {
        return true;
    },

    update: function(shape, node, box) {
        if (this.shouldDraw()) this.draw(shape, node);
        return this.place(shape, node, box);
    },

    draw: function(shape, node) {
        throw new Error('Not implement: Renderer.draw()');
    },

    place: function(shape, node, box) {
        throw new Error('Not implement: Renderer.place()');
    },

    getRenderShape: function() {
        return this._renderShape || null;
    },

    setRenderShape: function(shape) {
        this._renderShape = shape;
    }
});
Chess.registerInit(function() {
    this.renderList();
});
kity.extendClass(Chess, function() {
    var chess = this;

    function createRendererForPiece(piece, registered) {
        var renderers = [];
        var o_name = piece.__KityClassName;
        ['Piece', 'Dot'].forEach(function(section) {
            if (o_name ==='Chess'+section) {
                renderers = renderers.concat(registered[section]);
            }
        });
        piece._renderers = renderers.map(function(Renderer) {
            return new Renderer(piece);
        });
    }

    return {
        render: function(piece) {
            var rendererClasses = this._rendererClasses;
            var i, latestBox, renderer;
            if (!piece._renderers) {
                createRendererForPiece(piece, rendererClasses);
            }
            piece._contentBox = new kity.Box();
            
            piece._renderers.forEach(function(renderer) {

                if (renderer.shouldRender(piece)) {
                    // 应该渲染，但是渲染图形没创建过，需要创建
                    if (!renderer.getRenderShape()) {
                        renderer.setRenderShape(renderer.create(piece));
                        if (renderer.bringToBack) {
                            piece.getRenderContainer().prependShape(renderer.getRenderShape());
                        } else {
                            piece.getRenderContainer().appendShape(renderer.getRenderShape());
                        }
                    }
                    // 强制让渲染图形显示
                    renderer.getRenderShape().setVisible(true);
                    // 更新渲染图形
                    latestBox = renderer.update(renderer.getRenderShape(), piece, piece._contentBox);
                    if (typeof(latestBox) == 'function') latestBox = latestBox();

                    // 合并渲染区域
                    if (latestBox) {
                        piece._contentBox = piece._contentBox.merge(latestBox);
                        renderer.contentBox = latestBox;
                    }


                } else if (renderer.getRenderShape()) {
                    renderer.getRenderShape().setVisible(false);
                }
            });
            this.fire('piecerender', {
                piece: piece
            });
        },
        renderList: function() {
            var self = this;
            var name ;
            for(var name in this._mans){
                if((this._mans[name] instanceof ChessBass)){
                    self.render(this._mans[name]);
                }
            }
            for(var name in this._chess_dots){
                if((this._chess_dots[name] instanceof ChessBass)){
                    self.render(this._chess_dots[name]);
                }
            }
        },
        hidePieceFrame:function(){
            var f = this._getPieceFrame(this.getThisCamp());
            f.oldf.setVisible(false);
            f.newf.setVisible(false);
        },
        renderPieceFrame: function(obj,my) {
            var img = my =='j0' ? "r":"b";
            var f = this._getPieceFrame(my),
            //chess.getStyle('spaceX')*node.getData('x')+chess.getStyle('pointStartX');
                x1 = this.getStyle('spaceX') * obj.x + this.getStyle('pointStartX') ,
                y1 = this.getStyle('spaceY') *  obj.y + this.getStyle('pointStartY'),
                x2 = this.getStyle('spaceX') * obj.newx + this.getStyle('pointStartX'),
                y2 = this.getStyle('spaceY') * obj.newy + this.getStyle('pointStartY'),
                size ={width:60,height:60};
            f.oldf
                .setUrl('ui/theme/default/img/'+img+'_box.png')
                .setX(x1||0)
                .setY(y1||0)
                .setWidth(size.width | 0)
                .setHeight(size.height | 0)
                .setVisible(true);
            f.newf
                .setUrl('ui/theme/default/img/'+img+'_box.png')
                .setX(x2||0)
                .setY(y2||0)
                .setWidth(size.width | 0)
                .setHeight(size.height | 0)
                .setVisible(true);

        },
        _getPieceFrame:function(my){
            var img = my =='j0' ? "r":"b";
            var self = this;
            function newImg(){
                var obj = new kity.Image('ui/theme/default/img/'+img+'_box.png').setId('oldf');
                self._pframe.addShape(obj)
                return obj;
            }
            return {
                oldf : this._pframe.getShape(0)||newImg(),
                newf : this._pframe.getShape(1)||newImg()
            }
            
        }
    }
}());



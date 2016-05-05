CHESS.registerModule('peiceText', function() {
	var chess = this;
	var PeiceRenderer = kity.createClass('PeiceRenderer', {
		base: CHESS.Renderer,
		create: function(node) {
            return new kity.Image("ui/theme/default/img/"+node.getData('img')+".png");
        },

        update: function(image, node, box) {
            var url = "ui/theme/default/img/"+node.getData('img')+".png";
            var title = node.getData('text');
            var size = node.getData('imageSize');
            if (!size) return;

            if (title) {
                image.node.setAttributeNS('http://www.w3.org/1999/xlink', 'title', title);
            }

            var x = chess.getStyle('spaceX')*node.getData('x')+chess.getStyle('pointStartX');
            var y = chess.getStyle('spaceY')*node.getData('y')+chess.getStyle('pointStartY');
            var opacity= node.getData('alpha');
            image
                .setUrl(url)
                .setX(x||0)
                .setY(y||0)
                .setWidth(size.width | 0)
                .setHeight(size.height | 0)
                .setAttr('opacity',opacity);


            return new kity.Box(x | 0, y | 0, size.width | 0, size.height | 0);
        }
	});
	return {
		renderers:{'Piece':PeiceRenderer}
	}
});
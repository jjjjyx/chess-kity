/**
 * 棋子着点
 */
 CHESS.registerModule('Dot', function() {
	var chess = this;
    var DotRenderer = kity.createClass('DotRenderer', {
                base: CHESS.Renderer,
                create: function() {
                    return new kity.Image("ui/theme/default/img/dot.png");
                },

                update: function(image, node) {
                    var url = "ui/theme/default/img/dot.png";
                    var size = node.getData('imageSize');
                    //             spaceX: 65, //着点X跨度
                    //             spaceY: 67, //着点Y跨度
                    //             pointStartX: 33, //第一个着点X坐标;
                    //             pointStartY: 51, //第一个着点Y坐标;
                    var x = 65 * node.getData('x') + 26;
                    var y = 67 * node.getData('y') + 43;
                    image
                        .setUrl(url)
                        .setX(x || 0)
                        .setY(y || 0)
                        .setWidth(size.width)
                        .setHeight(size.height);


                    return new kity.Box(30, 30, 60, 60);
                }
            });
	
	return {
		renderers:{'Dot':DotRenderer}
	}
});
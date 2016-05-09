/**
 * 联机对战
 */

CHESS.registerUI('online', function(chess) {
	var main = chess.getUI('main');
	var $onlineBtn = $('<button>').addClass('main-online main').appendTo(main.$satrtBtnPanel);
	$onlineBtn.on('click',function(e){
		chess.execCommand('online');
	});

})
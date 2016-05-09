/**
 *	面板
 */

CHESS.registerUI('main', function(chess) {
	var ret = chess.getUI('eve').setup({});
	var $satrtBtnPanel =ret.$satrtBtnPanel = $("<div>").attr('id','main-panel').appendTo($('#chess'));//content-wrapper
	
	
	
	chess.on('uiready',function(){
		
	})
	return ret;


})
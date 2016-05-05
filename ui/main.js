/**
 *	开始 
 */

CHESS.registerUI('main', function(chess) {
	var ret = chess.getUI('eve').setup({});
	var $satrtBtnPanel = $("<div>").attr('id','main-panel').appendTo($('#chess'));//content-wrapper
	var $satrtBtn = $('<button>').addClass('main-start').appendTo($satrtBtnPanel);
	var $optionsBtnPanel = $("<div>").attr('id','options-panel').appendTo($('#chess'));
	var $undoBtn = $('<button>').addClass('undo').appendTo($optionsBtnPanel).hide();
	var $drawBtn = $('<button>').addClass('draw').appendTo($optionsBtnPanel).hide();
	var $failBtn = $('<button>').addClass('fail').appendTo($optionsBtnPanel).hide();
	$satrtBtn.on('click',function(){
		$(this).slideUp();
    	chess.startGame()//.renderList();
    	$undoBtn.show();
	});
	$undoBtn.on('click',function(){
		chess.regret();
	})
	chess.on('gameOver',function(e){
		swal({
			text:'游戏结束',
			title:(e.key=='j0'?'黑':'红')+'方胜',
			showCancelButton: true,   
            closeOnConfirm: true,
            imageUrl: "static/img/thumbs-up.jpg",
            confirmButtonText:'重新开始',
            cancelButtonText:'查看棋谱'
		},function(v){
			if(v){
				$satrtBtn.trigger('click');
			}else{

			}

		});

	})

	


})
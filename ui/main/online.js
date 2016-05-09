/**
 * 联机对战
 */

CHESS.registerUI('online', function(chess) {
	var main = chess.getUI('main');
	// var $onlineBtn = $('<button>').addClass('main-online main').appendTo(main.$satrtBtnPanel);


	var $createBtn = $('<button>').addClass('main-create main').appendTo(main.$satrtBtnPanel);
	var $joinBtn   = $('<button>').addClass('main-join main').appendTo(main.$satrtBtnPanel);

	$createBtn.on('click',function(e){
		 swal({
                title:'创建房间',
                type: "input",
                allowEscapeKey:true,
                // showConfirmButton:'true',
                confirmButtonText:'确认',
                text:'输入房间名称',
                showCancelButton: true,   
                closeOnConfirm: false,   
                animation: "slide-from-top",
                inputPlaceholder: "房间名称"
            },function(inputValue){
            	if (inputValue === false) return false;
            	if (inputValue === "") {     
            		swal.showInputError("房间名不可为空");     
            		return false   
            	}else
            		chess.execCommand('createroom',inputValue);
            });
	})
	$joinBtn.on('click',function(e){
		chess.sendmsg(['getAllroom']);
	});
	chess.on('outRoom',function(){
		this._area = null;
		this._isOnline = false;
		main.$satrtBtnPanel.show();
	})
	// $onlineBtn.on('click',function(e){
	// 	chess.execCommand('online');
	// });
})
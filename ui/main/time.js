/**
 *	时间
 */

CHESS.registerUI('time', function(chess) {
	var ret = chess.getUI('eve').setup({});
	var $timePanel =$timePanel = $("<div>").attr('id','time-panel').appendTo($('#chess'));//content-wrapper
	

	
	chess.on('timerinit',function(e){
		$timePanel.empty();
		var thiscamp = chess.getThisCamp();
		var j0_c = ['j0-time'];
		var J0_c = ['J0-time'];
		if(thiscamp=='j0'){
			j0_c.push('right-bottom');
			J0_c.push('left-top');
		}else{
			j0_c.push('left-top');
			J0_c.push('right-bottom');
		}
		var $j0=$('<div>').addClass(j0_c.join(' ')).appendTo($timePanel).attr('id','j0'),
			$J0=$('<div>').addClass(J0_c.join(' ')).appendTo($timePanel).attr('id','J0'),
	
			time_left = $('<p>').addClass('time-left').text("剩余时间："+changeTimeToString(20*60));
			bout_time = $('<p>').addClass('bout-time').text("本轮用时："+changeTimeToString(0));
			time_left.clone().appendTo($j0);
			time_left.clone().appendTo($J0);

			bout_time.clone().appendTo($j0);
			bout_time.clone().appendTo($J0);
		this.gameTimer = null;
		this.usedTime = 0;

	});

	var changeTimeToString = function(time) {
		var res = '';
		var h = Math.floor(time / 3600);
		if (h < 10) {
			h = '0' + h;
		}
		var m = time % 3600;
		m = Math.floor(m / 60);
		if (m < 10) {
			m = '0' + m;
		}
		var s = time % 60;
		if (s < 10) {
			s = '0' + s;
		}
		res = h + ':' + m + ':' + s;
		return res;
	}
	
	chess.on('startTimer',function(e){
		if(this.gameTimer){
			clearInterval(this.gameTimer);
		}
		var $thiscamp_div = $("#"+e.camp);
		$thiscamp_div.addClass('active');
		$("#"+chess.getToggleCamp(e.camp)).removeClass('active');
		var lavetime = e['laveTime'];
		this.usedTime = 0;
		var self = this;
		var showTime =function(){
			self.usedTime++;
			$thiscamp_div.find('p.time-left').text("剩余时间："+changeTimeToString(lavetime--));
			$thiscamp_div.find('p.bout-time').text("本轮用时："+changeTimeToString(self.usedTime));
			if(lavetime<=0){
				self.fire('online_gameOver',{
					lose:e.camp
				});
			}
		}
		this.gameTimer = setInterval(showTime,1000);
	});
	chess.on('roundend',function(){
		clearInterval(this.gameTimer);
	})
	// ret.getRoundTook = function(){
	// 	return chess.usedTime;
	// }
	ret.$panel = $timePanel
	return ret;

})


CHESS.registerModule('Select', function() {
	var chess = this;

	return {
		'init': function() {
            // window.addEventListener('mouseup', function() {
            //     marqueeActivator.selectEnd();
            // });
        },
		events:{
			//只能点点击 自己的棋子
			'normal.click':function(e){
				var clickNode =  e.getTargetNode();
				//点了自己的棋子并且该棋子没有被渲染
				if(clickNode && clickNode.getData('my') ==this.getThisCamp()&&!clickNode.isSelected()){
					this.select(clickNode, true);
					//将状态设置为 选择着点
					this.setStatus('selectdot');
				}
			},
			'normal.click selectpiece.click':function(e){
				// //this.setStatus('selectpiece');
				// var clickNode =  e.getTargetNode();
				// var clickDot = e.getTargetDot();
				// console.log(clickDot)
				// //点击了棋子
				// if (clickNode&&!clickNode.isSelected()){
					
				// }else 
				// //点击了着点
				// if(clickDot){
				// 	//console.log(clickDot)
				// }
				
			},
			'selectdot.click':function(e){
				var clickNode =  e.getTargetNode();
				var clickDot = e.getTargetDot();
				if(clickDot){
					//将棋子移动
					this.movePiece(clickDot);
				}else 
				//点了自己的棋子并且该棋子没有被渲染
				if(clickNode){
					if(clickNode.getData('my') ==this.getThisCamp()&&!clickNode.isSelected())
						this.select(clickNode, true);
 					else
 					//吃子 //点中自己
 					if (clickNode.getData('my') != this.getThisCamp()&&this.pieceIndexOfChessDots(clickNode)) {
 						this.movePiece(clickNode,clickNode);
 					}
				}
			},
			'movepiece':function(e){
				console.log(this._pace);
				//console.log(this.createMove(e.move.x,e.move.y,e.move.newx,e.move.newy));
				console.log(e.move);
				this.renderList();
				this.toggleCamp();
				this.setStatus('normal');
			},
			'selectionchange':function(){
				this.refDots();
				for(var j =0,c =this._ps.length;j<c ;j++ ){
					var arr = this._ps[j];
					var  obj = this._chess_dots[arr[0]+"_"+arr[1]]
					if(obj instanceof ChessBass)
						obj.setData('isShow',true)
				}
				this.renderList()
			},
			'eatpiece':function(e){
				if(e.key =='j0'||e.key=='J0'){
					this.setStatus('readonly');
					this.fire('gameOver',{
						lose:e.key
					});
				}
			}
		}
	}
});
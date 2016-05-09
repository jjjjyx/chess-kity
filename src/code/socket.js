Chess.registerInit(function() {
   var chess = this;
   $.cookie.json = true;
   function connection(){
        var conn = io.connect('http://127.0.0.1:7101/');
        if(!$.cookie('cnid')||!utils.isObject($.cookie('cnid'))){
			$.cookie('cnid',{id:objectId(),name:""});
		}
		var thisobj = $.cookie('cnid');
        conn.emit('login',$.cookie('cnid'));
        conn.on('online_success',function(data){
        	console.log(data);
        	if(data&&data.j0id&&data.J0id){
        		swal.close();
        		if(data['j0id']==thisobj.id){
        		 	chess._camp = 'j0';
        		 	
        		 }else if(data['J0id']==thisobj.id){
        		 	chess._camp = 'J0';
        		 	chess.setStatus('readonly');
        		 }else
        		 	return ;
        		 console.log("找到对手");
        		 
        		 //开始游戏
        		 chess.startGame(true);
        		 chess.fire('gamesatus');
        		 // chess._isOnline = true;
        		 chess.areaid = data['id'];
        	}
        })
        return conn;
    }
    
    chess.on('roundend',function(data){
    	console.log(data.move);
    	this.__c.emit('roundend',{areaid:this.areaid,pace:data.pace,map:this._map,move:data.move});
    });
    
    
    chess.__c = connection();
    chess.__c.on('cameChange',function(data){
    	console.log(data);
    	var thisobj = $.cookie('cnid');
    	if(data&&data.j0id&&data.J0id){
    		if((data['j0id']==thisobj.id||data['J0id']==thisobj.id)&&data['startcame']==chess.getThisCamp()){
    			//更新棋盘
    			chess._pace = data['chess_manual'];
    			chess.refChess(true,data['map']);
    			chess.setStatus('normal',true);

    			chess.renderList();
    			this.renderPieceFrame(data['move'],chess.getToggleCamp());
    		}else if((data['j0id']==thisobj.id||data['J0id']==thisobj.id)&&data['startcame']!=chess.getThisCamp()){
    			chess.setStatus('readonly');
    		}
    	}
    });
});

kity.extendClass(Chess, {
        // getUser: function() {
        //    return this._user;
        // },
        // sendmsg:function(msg){
        //     if(utils.isArray(msg))
        //         this.conn.send(JSON.stringify(msg));
        // }
        isOnline:function(){
        	return this._isOnline;
        }
});
Chess.registerInit(function() {
   var chess = this;
   $.cookie.json = true;
   function connection(){
        var conn = io.connect('http://192.168.2.104:7101/');
        if(!$.cookie('cnid')||!utils.isObject($.cookie('cnid'))){
			$.cookie('cnid',{id:objectId(),name:""});
		}
		var thisobj = $.cookie('cnid');
        conn.on('connect',function(ee){
            // conn.send(['login',thisobj]);
            conn.emit('login',$.cookie('cnid'));
        })
        conn.on('message',function(e){
            if(utils.isArray(e)){
                console.log(e);
                chess.execCommand(e[0],e[1]);
            }

        })
        
        conn.on('online_success',function(data){
        	console.log(data);
        	if(data&&data.j0id&&data.J0id){
        		swal.close();
                var status = 'normal';
        		if(data['j0id']==thisobj.id){
        		 	chess._camp = 'j0';
        		 	
        		 }else if(data['J0id']==thisobj.id){
        		 	chess._camp = 'J0';
        		 	//chess.setStatus('readonly');
                    status = 'readonly';
                    //console.log(chess.getStatus());
        		 }else
        		 	return ;
        		 console.log("找到对手");
        		 
        		 //开始游戏
        		 chess.startGame(true,status);
        		 chess.fire('gamesatus');
        		 // chess._isOnline = true;
        		 chess.areaid = data['id'];
        	}
        })
        return conn;
    }
    
    chess.on('roundend',function(data){
    	this.__c.emit('roundend',{areaid:this.areaid,pace:data.pace,map:this._map,move:data.move});
    });
    
    chess.__c = connection();
    chess.__c.on('cameChange',function(data){
    	// console.log(data);
    	var thisobj = $.cookie('cnid');
    	if(data&&data.j0id&&data.J0id){
    		if((data['j0id']==thisobj.id||data['J0id']==thisobj.id)&&data['startcame']==chess.getThisCamp()){
    			//更新棋盘
    			chess._pace = data['chess_manual'];
    			chess.refChess(true,data['map']);
    			chess.setStatus('normal',true);

    			chess.renderList();
    			chess.renderPieceFrame(data['move'],chess.getToggleCamp());
    		}else if((data['j0id']==thisobj.id||data['J0id']==thisobj.id)&&data['startcame']!=chess.getThisCamp()){
    			chess.setStatus('readonly');
    		}
    	}
    });
    chess.__c.on('gameOver',function(e){
        if(chess.areaid==e.areaid){
            swal({
                text:'游戏结束',
                title:(e.lose=='j0'?'黑':'红')+'方胜',
                showCancelButton: true,   
                closeOnConfirm: true,
                imageUrl: "static/img/thumbs-up.jpg",
                confirmButtonText:'重新开始',
                cancelButtonText:'查看棋谱'
            },function(v){
                if(v){
                    chess.execCommand('online');
                }
            });
        }
    });
    chess.on('online_gameOver',function(e){
        this.__c.emit('online_gameOver',{areaid:this.areaid,lose:e.lose});
    })
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
        },
        sendmsg:function(msg){
            if(utils.isArray(msg))
                this.__c.send(msg)
        }
});
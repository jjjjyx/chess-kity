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
                chess.execCommand(e[0],e[1]);
            }

        })
        conn.on('gameSatrt',function(area){
            if(area.hasOwnProperty(thisobj.id)){
                var status = 'normal';
                chess._camp = area[thisobj.id]
                if(chess._camp=='J0')
                     status = 'readonly';
                else{
                    swal.close();
                    swal({
                        title:'提示',
                        text:'开始对战'
                    });
                 }
                chess._area = area;

                chess.startGame(true,status);
                chess.fire('gamesatus');
            }
        })
        return conn;
    }
    
    chess.on('roundend',function(data){
    	// this.__c.emit('roundend',{areaid:this.areaid,pace:data.pace,map:this._map,move:data.move});
        chess.sendmsg(['movepiece',this._area.id,data.pace,this._map,data.move,data.eat_key])
    });
    
    chess.__c = connection();
    chess.__c.on('cameChange',function(data){
        if(chess._area&&data.id==chess._area.id){
            //更新
            if(chess.getThisCamp() == data['startcame']){
                if(data.ect_key)
                    chess._mans[data.ect_key].setData('isShow', false);
                chess._pace = data['chess_manual'];
                chess.refChess(true,data['map']);
                chess.setStatus('normal',true);
                chess.renderList();
                chess.renderPieceFrame(data['move'],chess.getToggleCamp());
            }else{
                chess.setStatus('readonly');
            }

        }

    });
    chess.__c.on('gameOver',function(data){
        if(chess._area&&data.id==chess._area.id){
            swal({
                text:'游戏结束',
                title:(data.lose=='j0'?'黑':'红')+'方胜',
                showCancelButton: true,
                closeOnConfirm: true,
                imageUrl: "static/img/thumbs-up.jpg",
                confirmButtonText:'重新开始',
                cancelButtonText:'查看棋谱'
            },function(v){
                if(v){
                    swal({
                        title:'提示',
                        text:'等待对方回应'
                    });
                    chess.sendmsg(['gameIsStart',chess._area.id,data.lose])
                }
            });
        }
    });
    chess.__c.on('gameIsStart',function(data){
        if(chess._area&&data.id==chess._area.id){
            swal({
                text:'对方请求重新开始',
                title:'提示',
                showCancelButton: true,
                closeOnConfirm: true,
                confirmButtonText:'确定',
                cancelButtonText:'取消'
            },function(v){
                if(v){
                    chess.sendmsg(['gameAgainStart',this._area.id]);
                }else{
                    chess.sendmsg(['outRoom',this._area.id]);
                    chess.fire('outRoom');
                }
            });
        }
    })
    chess.on('online_gameOver',function(e){
        // this.__c.emit('online_gameOver',{areaid:this.areaid,lose:e.lose});
        chess.sendmsg(['gameOver',this._area.id,e.lose])
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
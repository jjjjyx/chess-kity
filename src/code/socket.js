Chess.registerInit(function() {
   var chess = this;
   $.cookie.json = true;
   function connection(){
        var conn = io.connect('http://www.mbdoge.cn:7101/');
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
            var thisobj = $.cookie('cnid');
            if(area.hasOwnProperty(thisobj.id)){
                

                var status = 'normal';
                chess._camp = area[thisobj.id];
                chess.fire('timerinit');//渲染双方时间
                swal.close();
                if(chess._camp=='J0')
                     status = 'readonly';
                else{
                    swal({
                        title:'提示',
                        text:'开始对战'
                    });
                    
                }
                //要计时
                chess.fire('startTimer',{laveTime:area[area.startcame]['laveTime'],camp:area.startcame});
                chess._area = area;
                chess.startGame(true,status);
                chess.fire('gamesatus');
            }
        })
        return conn;
    }
    
    chess.on('roundend',function(data){
    	// this.__c.emit('roundend',{areaid:this.areaid,pace:data.pace,map:this._map,move:data.move});
        // var time = this.getUI('time')
        // console.log(time.getRoundTook());
        chess.sendmsg(['movepiece',this._area.id,data.pace,this._map,data.move,data.eat_key,this.getRoundTook()])
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
            //双方都要渲染
            chess.fire('startTimer',{laveTime:data[data.startcame]['laveTime'],camp:data.startcame});
            chess._area = data;
        }

    });
    chess.__c.on('gameOver',function(data){
        console.log(data);
        if(chess._area&&data.id==chess._area.id){
            swal({
                text:'游戏结束',
                title:(data.lose=='j0'?'黑':'红')+'方胜',
                showCancelButton: true,
                closeOnConfirm: true,
                imageUrl: "static/img/thumbs-up.jpg",
                confirmButtonText:'重新开始',
                cancelButtonText:'退出房间'
            },function(v){
                if(v){
                    swal({
                        title:'提示',
                        text:'等待对方回应'
                    });
                    chess.sendmsg(['gameIsStart',chess._area.id,data.lose])
                }else{
                    chess.sendmsg(['outRoom',chess._area.id]);
                    chess.fire('outRoom');
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
                    chess.sendmsg(['gameAgainStart',chess._area.id]);
                }else{
                    chess.sendmsg(['outRoom',chess._area.id]);
                    chess.fire('outRoom');
                }
            });
        }
    })
    chess.__c.on('outRoom',function(data){
        if(chess._area&&data.id==chess._area.id){
            swal({
                text:'<div class="spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>',
                html:true,
                title:'对方退出游戏,等待新玩家加入',
                allowEscapeKey:false,
                showConfirmButton:'true',
                confirmButtonText:'取消',
            },function(v){
                if(v){
                    chess.sendmsg(['cancelroom',chess._area.id]);
                }
            });
        }
    });
    chess.on('online_gameOver',function(e){
        // this.__c.emit('online_gameOver',{areaid:this.areaid,lose:e.lose});
        // console.log(e)
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
        },
        getRoundTook:function(){
            return this.usedTime||0;
        }
});
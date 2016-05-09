/**
 * 联机对战
 * 关键步骤
    与服务器建立连接，
    页面进入等待状态  -> 等待状态可以关闭
    当有另外一台机器连接进来时 提示

 */

 CHESS.registerModule('online', function() {
    var chess =this;
    var connect_ret =kity.createClass('connect_retCommand', {
        base: Command,
        execute:function(chess,arge){
           
        },
        isContentChanged: function () {
          return false;
        }
    });
     var online =kity.createClass('onlineCommand', {
        base: Command,
        execute:function(chess,arge){
            swal({
                title:'寻找联机中..',
                allowEscapeKey:false,
                showConfirmButton:'true',
                confirmButtonText:'取消',
                text:'<div class="spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>',
                html:true
            });
            //连接服务器
            chess.__c.emit('online',$.cookie('cnid'));
        }
    });

    var createroom =kity.createClass('createroomCommand', {
        base: Command,
        execute:function(chess,arge){
           chess.sendmsg(['createroom',arge])
        }
    });
    var createroom_ret =kity.createClass('createroom_retCommand', {
        base: Command,
        execute:function(chess,arge){
           //chess.sendmsg(['create',arge])
           if(arge['code']=='0'){
                // swal.close();
                swal({
                    title:'等待玩家加入..',
                    allowEscapeKey:false,
                    showConfirmButton:'true',
                    confirmButtonText:'取消',
                    text:'<div class="spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>',
                    html:true
                },function(v){
                    if(v){
                        chess.sendmsg(['cancelroom',chess._area.id]);
                    }
                });
                chess._area = arge['room'];
           }
        }
    });

    var getAllroom_ret =kity.createClass('getAllroom_retCommand', {
        base: Command,
        execute:function(chess,arge){
            console.log(arge);
            var modal = chess.getUI('modal');
            modal.setModalTitle('加入房间');
            modal.setModalContext('');
            var contenxt = '<table class="table table-hover">'+
                '<thead><tr>'+
                '<th>房间号</th>'+
                '<th>当前人数</th>'+
                '<th>房间状态</th>'+
                '<th>创建时间</th>'+
                '<th>操作</th>'+
                '</tr></thead><tbody>'

            for(var name in arge){
                var obj = arge[name]
                contenxt+='<tr>';
                contenxt+='<td>'+obj.id+'</td>';
                contenxt+='<td>'+obj.personNum+'</td>';
                contenxt+='<td>'+obj.status+'</td>';
                contenxt+='<td>'+new Date(obj.createDate).format('hh:mm:dd')+'</td>';
                contenxt+='<td><button data-roomid="'+obj.id+'">加入房间</button></td>';
                contenxt+='</tr>';
            }

            contenxt+='</tbody></table>';
            modal.setModalContext(contenxt);
            modal.delegateOnContext('button','click',function(e){
                chess.sendmsg(['joinroom',$(this).data('roomid')]);
                modal.$el.modal('hide');
            });
            modal.bindSavetbtnOnClick(function(e){
                modal.$el.modal('hide');
            });
            modal.setModalSize('lg');
            modal.$el.modal('show');
        }
    });
    var joinroom_ret =kity.createClass('joinroom_retCommand', {
        base: Command,
        execute:function(chess,arge){
            if(arge['code']!=0){
                swal({
                    title:'错误',
                    type:'error',
                    text:arge.msg
                });
            }else{
                swal({
                    title:'提示',
                    text:'开始对战'
                });
                // chess._area = arge['room'];
            }
            
        }
    });
    var movepiece_ret =kity.createClass('movepiece_retCommand', {
        base: Command,
        execute:function(chess,arge){
            if(arge['code']==0){
                
            }
            
        }
    });
    return {
        commands:{
            'connect_ret':connect_ret,
            'online':online,
            'createroom':createroom,
            'createroom_ret':createroom_ret,
            'joinroom_ret':joinroom_ret,
            'getAllroom_ret':getAllroom_ret,
            'movepiece_ret':movepiece_ret
            //'cancelroom':
        }
    }
});
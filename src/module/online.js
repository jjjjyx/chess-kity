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
           console.log(arge)
        }
    });
    return {
        commands:{
            'connect_ret':connect_ret,
            'online':online,
            'createroom':createroom,
            'createroom_ret':createroom_ret
        }
    }
});
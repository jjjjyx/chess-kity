/**
 * 联机对战
 * 关键步骤
    与服务器建立连接，
    页面进入等待状态  -> 等待状态可以关闭
    当有另外一台机器连接进来时 提示

 */

 CHESS.registerModule('online', function() {
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
    return {
        commands:{'online':online}
    }
});
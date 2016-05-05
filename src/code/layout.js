/**
 *
 * 初始化布局
 *
 * @author: jjjjyx
 * @copyright: jjjjyx, 2014
 */

Chess.registerInit(function(options) {
    this.layout();
});

kity.extendClass(Chess,{
    layout:function(){
        //this.layout(duration).fire('contentchange')._interactChange();
        return this;
    }
});
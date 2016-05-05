/**
 *
 * 提供选项支持
 *
 * @author: jjjjyx
 * @copyright: jjjjyx, 2014
 */
kity.extendClass(Chess, {

    getOptions: function(key) {
        var val;
        if (key) {
            val = this.getPreferences(key);
            return val && val[key] || this._options[key];
        } else {
            val = this.getPreferences();
            return utils.extend(val, this._options, true);
        }
    },

    setDefaultOptions: function(key, val, cover) {
        var obj = {};
        if (Utils.isString(key)) {
            obj[key] = val;
        } else {
            obj = key;
        }
        utils.extend(this._options, obj, !cover);
    },

    setOptions: function(key, val) {
        this.setPreferences(key, val);
    }

});

Chess.registerInit(function(option) {
    // this.setDefaultOptions({
    //     width           :   stype.width,        //画布宽度
    //     height          :   stype.height,       //画布高度
    //     spaceX          :   stype.spaceX,       //着点X跨度
    //     spaceY          :   stype.spaceY,       //着点Y跨度
    //     pointStartX     :   stype.pointStartX,  //第一个着点X坐标;
    //     pointStartY     :   stype.pointStartY,  //第一个着点Y坐标;
    //     page            :   stype.page         //图片目录
    // });
});
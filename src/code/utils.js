Array.prototype.remove=function(dx){
    if(isNaN(dx)||dx>this.length){return false;} 
    for(var i=0,n=0;i<this.length;i++){ 
        if(this[i]!=this[dx]){ 
            this[n++]=this[i] 
        } 
    } 
    this.length-=1;
    return this;
}
/**
 * 时间格式化
 * @param format
 * @returns
 */
Date.prototype.format = function(format){
    var o = {
            "M+" : this.getMonth()+1, //month
            "d+" : this.getDate(), //day
            "h+" : this.getHours(), //hour
            "m+" : this.getMinutes(), //minute
            "s+" : this.getSeconds(), //second
            "q+" : Math.floor((this.getMonth()+3)/3), //quarter
            "S" : this.getMilliseconds() //millisecond
        }
        if(/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
        }
        for(var k in o) {
            if(new RegExp("("+ k +")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
        }
    }
    return format;
}
/**
* each是一个集合迭代函数，它接受一个函数作为参数和一组可选的参数
* @param {Function} fn 进行迭代判定的函数
* @param more ... 零个或多个可选的用户自定义参数
* @returns {Array} 结果集，如果没有结果，返回空集
*/

Array.prototype.each = function(fn){
    fn = fn || Function.K;
     var a = [];
     var args = Array.prototype.slice.call(arguments, 1);
     for(var i = 0; i < this.length; i++){
         var res = fn.apply(this,[this[i],i].concat(args));
         if(res != null) a.push(res);
     }
     return a;
};

/**
* 得到一个数组不重复的元素集合<br/>
* 唯一化一个数组
* @returns {Array} 由不重复元素构成的数组
*/
Array.prototype.uniquelize = function(){
     var ra = new Array();
     for(var i = 0; i < this.length; i ++){
         if(ra.indexOf(this[i])<0){
            ra.push(this[i]);
         }
     }
     return ra;
};

/**
* 求两个集合的补集
* @param {Array} a 全集S
* @param {Array} b 集合B
* @returns {Array} 两个集合的补集
*/
Array.complement = function(S, b){
     return Array.minus(S,Array.intersect(S, b));
};

/**
* 求两个集合的交集

     var a = [1,2,3,4];
     var b = [3,4,5,6];
     console.log(Array.intersect(a,b));
%}
* @param {Array} a 集合A
* @param {Array} b 集合B
* @returns {Array} 两个集合的交集
*/
Array.intersect = function(a, b){
     return a.uniquelize().each(function(o){return b.indexOf(o)>=0 ? o : null});
};
/** 
* 求两个集合的差集 
* @param {Array} a 集合A 
* @param {Array} b 集合B 
* @returns {Array} 两个集合的差集 
*/ 
Array.minus = function(a, b){
     return a.uniquelize().each(function(o){return b.indexOf(o)>=0 ? null : o});
};

/** 
* 求两个集合的并集 

* @param {Array} a 集合A 
* @param {Array} b 集合B 
* @returns {Array} 两个集合的并集 
*/
Array.union = function(a, b){
     return a.concat(b).uniquelize();
};
var utils = Utils = CHESS.Utils = {
    extend: kity.Utils.extend.bind(kity.Utils),

    listen: function(element, type, handler) {
        var types = utils.isArray(type) ? type : utils.trim(type).split(/\s+/),
            k = types.length;
        if (k)
            while (k--) {
                type = types[k];
                if (element.addEventListener) {
                    element.addEventListener(type, handler, false);
                } else {
                    if (!handler._d) {
                        handler._d = {
                            els: []
                        };
                    }
                    var key = type + handler.toString(),
                        index = utils.indexOf(handler._d.els, element);
                    if (!handler._d[key] || index == -1) {
                        if (index == -1) {
                            handler._d.els.push(element);
                        }
                        if (!handler._d[key]) {
                            handler._d[key] = function(evt) {
                                return handler.call(evt.srcElement, evt || window.event);
                            };
                        }
                        element.attachEvent('on' + type, handler._d[key]);
                    }
                }
            }
        element = null;
    },
    trim: function(str) {
        return str.replace(/(^[ \t\n\r]+)|([ \t\n\r]+$)/g, '');
    },
    each: function(obj, iterator, context) {
        if (obj == null) return;
        if (obj.length === +obj.length) {
            for (var i = 0, l = obj.length; i < l; i++) {
                if (iterator.call(context, i, obj[i], obj) === false)
                    return false;
            }
        } else {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (iterator.call(context, key, obj[key], obj) === false)
                        return false;
                }
            }
        }
    },
    addCssRule: function(key, style, doc) {
        var head, node;
        if (style === undefined || style && style.nodeType && style.nodeType == 9) {
            //获取样式
            doc = style && style.nodeType && style.nodeType == 9 ? style : (doc || document);
            node = doc.getElementById(key);
            return node ? node.innerHTML : undefined;
        }
        doc = doc || document;
        node = doc.getElementById(key);

        //清除样式
        if (style === '') {
            if (node) {
                node.parentNode.removeChild(node);
                return true
            }
            return false;
        }

        //添加样式
        if (node) {
            node.innerHTML = style;
        } else {
            node = doc.createElement('style');
            node.id = key;
            node.innerHTML = style;
            doc.getElementsByTagName('head')[0].appendChild(node);
        }
    },
    keys: function(plain) {
        var keys = [];
        for (var key in plain) {
            if (plain.hasOwnProperty(key)) {
                keys.push(key);
            }
        }
        return keys;
    },
    proxy: function(fn, context) {
        return function() {
            return fn.apply(context, arguments);
        };
    },
    indexOf: function(array, item, start) {
        var index = -1;
        start = this.isNumber(start) ? start : 0;
        this.each(array, function(v, i) {
            if (i >= start && v === item) {
                index = i;
                return false;
            }
        });
        return index;
    },
    argsToArray: function(args, index) {
        return Array.prototype.slice.call(args, index || 0);
    },
    clonePlainObject: function(source, target) {
        var tmp;
        target = target || {};
        for (var i in source) {
            if (source.hasOwnProperty(i)) {
                tmp = source[i];
                if (utils.isObject(tmp) || utils.isArray(tmp)) {
                    target[i] = utils.isArray(tmp) ? [] : {};
                    utils.clonePlainObject(source[i], target[i])
                } else {
                    target[i] = tmp;
                }
            }
        }
        return target;
    },
    compareObject: function(source, target) {
        var tmp;
        if (this.isEmptyObject(source) !== this.isEmptyObject(target)) {
            return false
        }
        if (this.getObjectLength(source) != this.getObjectLength(target)) {
            return false;
        }
        for (var p in source) {
            if (source.hasOwnProperty(p)) {
                tmp = source[p];
                if (target[p] === undefined) {
                    return false;
                }
                if (this.isObject(tmp) || this.isArray(tmp)) {
                    if (this.isObject(target[p]) !== this.isObject(tmp)) {
                        return false;
                    }
                    if (this.isArray(tmp) !== this.isArray(target[p])) {
                        return false;
                    }
                    if (this.compareObject(tmp, target[p]) === false) {
                        return false
                    }
                } else {
                    if (tmp != target[p]) {
                        return false
                    }
                }
            }
        }
        return true;
    },
    getObjectLength: function(obj) {
        if (this.isArray(obj) || this.isString(obj)) return obj.length;
        var count = 0;
        for (var key in obj)
            if (obj.hasOwnProperty(key)) count++;
        return count;
    },
    isEmptyObject: function(obj) {
        if (obj == null) return true;
        if (this.isArray(obj) || this.isString(obj)) return obj.length === 0;
        for (var key in obj)
            if (obj.hasOwnProperty(key)) return false;
        return true;
    },
    loadFile: function() {
        var tmpList = [];

        function getItem(doc, obj) {
            try {
                for (var i = 0, ci; ci = tmpList[i++];) {
                    if (ci.doc === doc && ci.url == (obj.src || obj.href)) {
                        return ci;
                    }
                }
            } catch (e) {
                return null;
            }

        }

        return function(doc, obj, fn) {
            var item = getItem(doc, obj);
            if (item) {
                if (item.ready) {
                    fn && fn();
                } else {
                    item.funs.push(fn)
                }
                return;
            }
            tmpList.push({
                doc: doc,
                url: obj.src || obj.href,
                funs: [fn]
            });
            if (!doc.body) {
                var html = [];
                for (var p in obj) {
                    if (p == 'tag') continue;
                    html.push(p + '="' + obj[p] + '"')
                }
                doc.write('<' + obj.tag + ' ' + html.join(' ') + ' ></' + obj.tag + '>');
                return;
            }
            if (obj.id && doc.getElementById(obj.id)) {
                return;
            }
            var element = doc.createElement(obj.tag);
            delete obj.tag;
            for (var p in obj) {
                element.setAttribute(p, obj[p]);
            }
            element.onload = element.onreadystatechange = function() {
                if (!this.readyState || /loaded|complete/.test(this.readyState)) {
                    item = getItem(doc, obj);
                    if (item.funs.length > 0) {
                        item.ready = 1;
                        for (var fi; fi = item.funs.pop();) {
                            fi();
                        }
                    }
                    element.onload = element.onreadystatechange = null;
                }
            };
            //            element.onerror = function () {
            //                throw Error('The load ' + (obj.href || obj.src) + ' fails,check the url settings of file ')
            //            };
            doc.getElementsByTagName("head")[0].appendChild(element);
        }
    }(),
    clone: function(source, target) {
        var tmp;
        target = target || {};
        for (var i in source) {
            if (source.hasOwnProperty(i)) {
                tmp = source[i];
                if (typeof tmp == 'object') {
                    target[i] = utils.isArray(tmp) ? [] : {};
                    utils.clone(source[i], target[i])
                } else {
                    target[i] = tmp;
                }
            }
        }
        return target;
    },
    unhtml: function(str, reg) {
        return str ? str.replace(reg || /[&<">'](?:(amp|lt|quot|gt|#39|nbsp);)?/g, function(a, b) {
            if (b) {
                return a;
            } else {
                return {
                    '<': '&lt;',
                    '&': '&amp;',
                    '"': '&quot;',
                    '>': '&gt;',
                    "'": '&#39;'
                }[a]
            }
        }) : '';
    },
    cloneArr:function(arr){
        return [].concat(arr);
    },
    clearWhitespace:function(str){
        return str.replace(/[\u200b\t\r\n]/g, '');
    },
    getValueByIndex:function(data,index){

        var initIndex = 0,result = 0;

        utils.each(data,function(i,arr){
            if(initIndex + arr.length >= index){

                if(index - initIndex == arr.length){
                    if(arr.length == 1 && arr[0].width === 0){
                        initIndex++;
                        return;
                    }
                    result = {
                        x: arr[arr.length - 1].x + arr[arr.length - 1].width,
                        y: arr[arr.length - 1].y
                    };
                }else{
                    result = arr[index - initIndex];
                }

                return false;
            }else{
                initIndex += arr.length + (arr.length == 1 && arr[0].width === 0 ? 0 : 1);
            }
        });
        return result;
    },
    getNodeIndex:function (node, ignoreTextNode) {
        var preNode = node,
            i = 0;
        while (preNode = preNode.previousSibling) {
            if (ignoreTextNode && preNode.nodeType == 3) {
                if(preNode.nodeType != preNode.nextSibling.nodeType ){
                    i++;
                }
                continue;
            }
            i++;
        }
        return i;
    },
    //二维数组克隆
    arr2Clone :function (arr){
        var newArr=[];
        for (var i=0; i<arr.length ; i++){  
            newArr[i] = arr[i].slice();
        }
        return newArr;
    }


};

Utils.each(['String', 'Function', 'Array', 'Number', 'RegExp', 'Object'], function(i, v) {
    CHESS.Utils['is' + v] = function(obj) {
        return Object.prototype.toString.apply(obj) == '[object ' + v + ']';
    }
});
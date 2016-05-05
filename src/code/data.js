// Utils.extend(CHESS, {
//     _protocols: {},
//     registerProtocol: function(name, protocolDeal) {
//         KityMinder._protocols[name] = protocolDeal;
//     }
// });

// var DEFAULT_TEXT = {
//     'root': 'maintopic',
//     'main': 'topic',
//     'sub': 'topic'
// };

Minder.registerInit(function() {
    // this._initProtocols();
});

// 导入
kity.extendClass(Minder, {

    //导出棋谱
    exportPace: function() {
        // /* 导出 node 上整棵树的数据为 JSON */
        // function exportNode(node) {
        //     var exported = {};
        //     exported.data = node.getData();
        //     var childNodes = node.getChildren();
        //     if (childNodes.length) {
        //         exported.children = [];
        //         for (var i = 0; i < childNodes.length; i++) {
        //             exported.children.push(exportNode(childNodes[i]));
        //         }
        //     }
        //     return exported;
        // }

        // var json = exportNode(this.getRoot());

        // json.template = this.getTemplate();
        // json.theme = this.getTheme();
        // json.version = KityMinder.version;
        // //此处导出
        // return json;
    },
    //导入棋谱
    importMans: function(json, params) {


        // if (!json) return;
        
        // this._fire(new MinderEvent('preimport', params, false));

        // // 删除当前所有节点
        // while (this..getChildren().length) {
        //     this.removeNode(this._root.getChildren()[0]);
        // }
        // json = KityMinder.compatibility(json);
        // importNode(this._root, json, this);
        // this.setTemplate(json.template || 'default');
        // this.setTheme(json.theme || null);
        // this.refresh();

        // this.fire('import', params);

        // this._firePharse({
        //     type: 'contentchange'
        // });
        // this._interactChange();
    },

});
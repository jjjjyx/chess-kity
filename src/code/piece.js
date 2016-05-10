// var _Piece = CHESS._Piece = kity.createClass('Piece',{
// 	isShow:function(){

// 	}
// });
var ChessBass = CHESS.ChessBass = kity.createClass('ChessBass', {
	constructor: function(option, name) {
		this.data = {};
		this.tmpData = {};
		this.setData(option);
		this.initContainers();

	},
	initContainers: function() {
		throw new Error('Not implement: ChessBass.initContainers()');
	},
	isShow: function() {
		return this.getData('isShow');
	},
	getData: function(name) {
		if (name === undefined) {
			return this.data;
		}
		return this.data[name];
	},
	setData: function(name, value) {
		if (name === undefined) {
			this.data = {};

		} else if (utils.isObject(name)) {
			utils.extend(this.data, name);
		} else {
			if (value === undefined) {
				this.data[name] = null;
				delete this.data[name];
			} else {
				this.data[name] = value;
			}
		}
		return this;
	},
	getRenderContainer: function() {
		return this.rc;
	},
	setTmpData: function(a, v) {
		var me = this;
		if (utils.isObject(a)) {
			utils.each(a, function(key, val) {
				me.setTmpData(key, val);
			});
		}
		if (v === undefined || v === null || v === '') {
			delete this.tmpData[a];
		} else {
			this.tmpData[a] = v;
		}
	},

	getTmpData: function(a) {
		if (a === undefined) {
			return this.tmpData;
		}
		return this.tmpData[a];
	}

})

/**
 * Chesspiece 棋子类
 */
var Chesspiece = CHESS.Chesspiece = kity.createClass('ChessPiece', {
	base: ChessBass,
	initContainers: function() {
		this.rc = new kity.Group().setId(CHESS.uuid('chess_piece'));
		this.rc.chessPiece = this;
	},
	getImg: function() {
		return this.getData('img');
	},
	/**
	 * 获取文本数据
	 * @return {String}
	 */
	getText: function(str2arr) {
		var text = this.getData('text') || '';

		if (str2arr) {
			text = text.split('\n');
		}

		return text;
	},
	ref: function(isShow) {
		this.data.x = this.data.defaultx
		this.data.y = this.data.defaulty
		this.data.isShow = !!isShow;
	}
});


//Dot 着点类
var ChessDot = CHESS.ChessDot = kity.createClass('ChessDot', {
	base: ChessBass,
	initContainers: function() {
		this.rc = new kity.Group().setId(CHESS.uuid('chess_Dot'));
		this.rc.chessDot = this;
	}
});

/**
 *
 * 初始化
 *
 * @author: jjjjyx
 * @copyright: jjjjyx, 2014
 */
kity.extendClass(Chess, {
	_mans: {}, //棋子集合
	_chess_dots: {}, //着点集合
	_pace: [], //棋谱
	startGame: function(isOnline,status,my) {
		this.refDots(); //重置可着点
		this.refChess(true); //重置棋子
		this.renderList();
		this._isOnline = !!isOnline;
		this._camp = my||this._camp;
		this.setStatus(status||'normal', true);
		this.hidePieceFrame();
		return this;
	},
	//悔棋
	regret: function() {
		this.refChess(true);

		var __camp = {
			'1': 'j0',
			'-1': 'J0'
		};
		// __camp[this.getThisCamp()]
		var camp = 1;
		var pace = this._pace;
		pace.pop();
		if(this.getThisCamp() !='j0')
			pace.pop();

		for (var i = 0; i < pace.length; i++) {
			if(!/^\d+$/.test(pace[i])) continue;
			var p = pace[i].split("")
			var x = parseInt(p[0], 10);
			var y = parseInt(p[1], 10);
			var newX = parseInt(p[2], 10);
			var newY = parseInt(p[3], 10);
			var key = this._map[y][x];
			//try{

			var cMan = this._map[newY][newX];
			if (cMan)
				this._mans[this._map[newY][newX]].setData('isShow', false);
			this._mans[key].setData('x', newX);
			this._mans[key].setData('y', newY);
			this._map[newY][newX] = key;
			delete this._map[y][x];
			if (i == pace.length - 1) {
				this.renderPieceFrame({
					x: x,
					y: y,
					newx: newX,
					newy: newY
				}, __camp[camp+""]);
			}
			//} catch (e){
			//	com.show()
			//	z([key,p,pace,map])

			//	}
			camp = -camp;
		}
		this._camp = __camp[camp];
		this.renderList();
	},
	getThisCamp: function() {
		return this._camp;
	},
	getToggleCamp:function(c){
		return (c||this._camp) === 'j0'?'J0':'j0';
	},
	toggleCamp: function() {
		if (this._camp === 'j0') {
			this._camp = 'J0';
		} else {
			this._camp = 'j0';
		}
	},
	//把坐标生成着法
	createMove : function (x,y,newX,newY){
		var h="";
		var man = this._mans[this._map[y][x]];
		h+= man.getText();
		if (man.getData('my')==='j0'){
			var mumTo=["一","二","三","四","五","六","七","八","九","十"];	
			newX=8-newX;
			h+= mumTo[8-x];
			if (newY > y) {
				h+= "退";
				if (man.getData('pater') == "m" || man.getData('pater') == "s" || man.getData('pater') == "x"){
					h+= mumTo[newX];
				}else {
					h+= mumTo[newY - y -1];
				}
			}else if (newY < y) {
				h+= "进";
				if (man.getData('pater') == "m" || man.getData('pater') == "s" || man.getData('pater') == "x"){
					h+= mumTo[newX];
				}else {
					h+= mumTo[y - newY -1];
				}
			}else {
				h+= "平";
				h+= mumTo[newX];
			}
		}else{
			var mumTo=["１","２","３","４","５","６","７","８","９","10"];
			h+= mumTo[x];
			if (newY > y) {
				h+= "进";
				if (man.getData('pater') == "M" || man.getData('pater') == "S" || man.getData('pater') == "X"){
					h+= mumTo[newX];
				}else {
					h+= mumTo[newY - y-1];
				}
			}else if (newY < y) {
				h+= "退";
				if (man.getData('pater') == "M" || man.getData('pater') == "S" || man.getData('pater') == "X"){
					h+= mumTo[newX];
				}else {
					h+= mumTo[y - newY-1];
				}
			}else {
				h+= "平";
				h+= mumTo[newX];
			}
		}
	return h;
}
});
//


// Chess.registerInit(function() {
// 	var initMap = ;
//    this._initChess(initMap);
// });
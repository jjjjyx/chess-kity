var express = require('./config/express');

var app = express();
var http = require('http').Server(app);

var objId = require('./lib/objectId');
var io = require('socket.io')(http);

/* GET home page. */
app.get('/', function(req, res, next) {
  // res.render('login', { title: 'Express' });
  res.sendfile('/login.html');
});


//在线用户
var onlineUsers = {};
//当前在线人数
var onlineCount = 0;
//表示一个房间


var Room = function(id){
	//房间名称
	this.id = id;
	//房间状态
	this.status = '等待';
	this.personNum = 1;
	this.createDate = new Date();
	this.chess_manual = [];
	this.startcame = 'j0'
	this.history=[]
}
Room.prototype.setMove= function(obj){
	var o ={
		x:obj.x,
		y:9-obj.y,
		newx:obj.newx,
		newy:9-obj.newy,
	}
	this.move= o;
	if(this.startcame=='j0'){
		this.chess_manual.push(obj.x+""+obj.y+obj.newx+obj.newy);
	}else{
		this.chess_manual.push(o.x+""+o.y+o.newx+o.newy);
	}
}
Room.prototype.toggleCamp=function(){
	if (this.startcame === 'j0') {
		this.startcame = 'J0';
	} else {
		this.startcame = 'j0';
	}
}
var area = {};
var waitqueue = [];
io.use(function(socket, next){
  if (socket.request.headers.cookie) return next();
  next(new Error('Authentication error'));
});
var fn ={
	createroom:function(){
		
		var a = arguments[1];
		if(!area[a]){
			area[a] = new Room(a);
			area[a][this.name]= 'j0';
			area[a].j0= {
				laveTime:20*60
			};
			this.areaId = a;

			return {code:'0',msg:'success',room:area[a]};
		}else{
			return {code:'-1',msg:'房间名称已经存在'};
		}
	},
	cancelroom:function(){
		
		delete area[arguments[1]];
		return {code:'0',msg:'取消等待'};
	},
	getAllroom:function(){
		return area;
	},
	getRoom:function(){
		return area[arguments[1]];
	},
	joinroom:function(){
		var a = arguments[1];
		if(!area[a]){
			return {code:'-2',msg:"加入房间失败"}
		}if(area[a].personNum>=2){
			return {code:'-1',msg:"房间人数已满"}
		}else{
			var camp = area[a]['j0'] ?'J0':'j0';
			console.log("加入方:"+camp);
			area[a][this.name]= camp;
			area[a][camp] = {
				laveTime:20*60
			};
			this.areaId = a;
			area[a].personNum+=1;
			area[a].status = '对弈中';
			//发出通知
			io.emit('gameSatrt',area[a]);
			return {code:'0',msg:"success"}
		}
	},
	movepiece:function(){
		// console.log(arguments);
		var r = area[arguments[1]]
		r['map'] = arguments[3].reverse();
		r.setMove(arguments[4]);
		if(arguments[5])
			r.ect_key =arguments[5]
		else{
			delete r.ect_key;
		}

		r[r.startcame].laveTime -= arguments[6];
		if(r[r.startcame].laveTime<=0){
			r.lose=r.startcame;
			io.emit('gameOver',r);
			return ;
		}
		r.toggleCamp();
		io.emit('cameChange',r);
		return {code:'0',room:r};
	},
	gameOver:function(){
		var r = area[arguments[1]];
		r.status='胜负已分';
		r.chess_manual = [];
		r.lose=arguments[2];
		io.emit('gameOver',r);
	},
	gameIsStart:function(){
		
		var r = area[arguments[1]];
		r.history.push(arguments[2]);
		io.emit('gameIsStart',r);
		
	},
	outRoom:function(){
		var r = area[arguments[1]];
		delete r[r[this.name]]
		delete r[this.name];
		r.personNum -=1;
		r.status = '等待';
		r.chess_manual = [];
		r.move=null
		r.startcame = 'j0';
		if(r.personNum<1){
			delete area[arguments[1]];
		}else
			io.emit('outRoom',r);
		return {code:'0',msg:'success'};
	},
	//双方点击重新开始
	gameAgainStart:function(){
		var r = area[arguments[1]];
		r.j0 = {
			laveTime:20*60
		};
		r.J0 = {
			laveTime:20*60
		};
		r.chess_manual = [];
		r.move=null;
		r.status ='对弈中';
		r.startcame = 'j0';
		r.lose = null;
		io.emit('gameSatrt',r);
	}
}

io.on('connection', function(socket){
	//监听新用户加入
	socket.on('login', function(obj){
		//将新加入用户的唯一标识当作socket的名称，后面退出的时候会用到
		socket.name = obj.id;
		//检查在线列表，如果不在里面就加入
		if(!onlineUsers.hasOwnProperty(obj.id)) {
			onlineUsers[obj.id] = obj.id;
			//在线人数+1
			onlineCount++;
		}
		//向所有客户端广播用户加入
		// io.emit('login', {onlineUsers:onlineUsers, onlineCount:onlineCount, user:obj});
		console.log(obj.id+'加入');
	});
  	socket.on('message',function(a){
  		// console.log(arguments)
  		var result = [a[0]+'_ret'];
  		if(fn[a[0]]){
  			var rr = fn[a[0]].apply(socket,arguments[0]);
  			if(rr)
  				result.push(rr);
  		}
  		socket.send(result);
  	})
  //监听用户退出
	socket.on('disconnect', function(){
		//将退出的用户从在线列表中删除
		if(onlineUsers.hasOwnProperty(socket.name)) {
			//退出用户的信息
			var obj = {id:socket.name, name:onlineUsers[socket.name]};
			
			//删除
			delete onlineUsers[socket.name];
			//在线人数-1
			onlineCount--;
			
			//向所有客户端广播用户退出
			io.emit('logout', {onlineUsers:onlineUsers, onlineCount:onlineCount, user:obj});
			console.log(obj.id+'退出了');
		}
		if(socket.areaId){
			fn['outRoom'].apply(socket,['outRoom',socket.areaId]);
		}
	});
	// socket.send({aaa:123,data:{}});
});

module.exports = http;
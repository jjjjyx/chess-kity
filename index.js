var express = require('./config/express');

var app = express();
var http = require('http').Server(app);
var cookie = require('./node_modules/cookie/index');
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
var room = function(id,j0id,J0id,pace){
	this.id = id
	this.j0id = j0id;
	this.J0id = J0id;
	this.startcame = 'j0'
	this.chess_manual = [];
	this.status = 'move'

}
room.prototype.toggleCamp=function(){
	if (this.startcame === 'j0') {
		this.startcame = 'J0';
	} else {
		this.startcame = 'j0';
	}
	return this;
}
room.prototype.paly=function(pace){
	this.chess_manual.push(pace);
	return this;
}
room.prototype.setMove= function(obj){
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

var Room = function(id){
	this.id = id;
}
var area = {};
var waitqueue = [];
io.use(function(socket, next){
  if (socket.request.headers.cookie) return next();
  next(new Error('Authentication error'));
});
var fn ={
	createroom:function(){
		console.log(arguments);
		var a = arguments[1]
		if(!area[a]){
			area[a] = new Room(a);
			area[a].j0= this.name
			return {code:'1',msg:'success'};
		}else{
			return {code:'-1',msg:'房间名称已经存在'};
		}
	}
}

io.on('connection', function(socket){
	// console.log('a user connected');
	// console.log(socket.request.headers.cookie);

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

	
	socket.on('online', function(obj){
		// waitqueue.push(obj)
		// if(waitqueue.length==2){
		// 	obj.camp = 'J0';
		// 	console.log("["+obj.id+"]与["+waitqueue[0].id+"]匹配成功");
		// 	var id = objId();
		// 	area[id] = new room(id,waitqueue[0].id,waitqueue[1].id);
		// 	io.emit('online_success',area[id]);
		// 	waitqueue = [];
		// }else{
		// 	obj.camp = 'j0';
		// 	console.log(obj.id+"正在等待");
		// }
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
	socket.on('roundend', function(obj){
		console.log(obj);
		var z = area[obj.areaid];
		// z.paly(obj.pace);
		z['map'] = obj.map.reverse()
		z.setMove(obj.move);
		z.toggleCamp();
		io.emit('cameChange',z);
	});
	socket.on('online_gameOver',function(obj){
		var z = area[obj.areaid];
		z.status = 'end';
		io.emit('gameOver',{areaid:obj.areaid,lose:obj.lose});
	});
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
	});
	// socket.send({aaa:123,data:{}});
});
module.exports = http;
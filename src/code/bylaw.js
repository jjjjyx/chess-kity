
Chess.registerInit(function() {
    this._initbylaw();
});

// 可走路径
kity.extendClass(Chess, {
	_initbylaw:function(){
		this._bylaw = {};
		var self = this;
		//车
		this._bylaw.c = function (x,y,map,my){
			var d=[];
			//左侧检索
			for (var i=x-1; i>= 0; i--){
				if (map[y][i]) {
					console.log(self._mans[map[y][i]].getData('my')!=my);
					console.log(self._mans[map[y][i]]);
					if (self._mans[map[y][i]].getData('my')!=my) d.push([i,y]);
					break
				}else{
					d.push([i,y])	
				}
			}
			//右侧检索
			for (var i=x+1; i <= 8; i++){
				if (map[y][i]) {
					if (self._mans[map[y][i]].getData('my')!=my) d.push([i,y]);
					break
				}else{
					d.push([i,y])	
				}
			}
			//上检索
			for (var i = y-1 ; i >= 0; i--){
				if (map[i][x]) {
					if (self._mans[map[i][x]].getData('my')!=my) d.push([x,i]);
					break
				}else{
					d.push([x,i])	
				}
			}
			//下检索
			for (var i = y+1 ; i<= 9; i++){
				if (map[i][x]) {
					if (self._mans[map[i][x]].getData('my')!=my) d.push([x,i]);
					break
				}else{
					d.push([x,i])	
				}
			}
			return d;
		}

		//马
		this._bylaw.m = function (x,y,map,my){
			var d=[];
				//1点
				if ( y-2>= 0 && x+1<= 8 && !self._map[y-1][x] &&(!self._mans[map[y-2][x+1]] || self._mans[map[y-2][x+1]].getData('my')!=my)) d.push([x+1,y-2]);
				//2点
				if ( y-1>= 0 && x+2<= 8 && !self._map[y][x+1] &&(!self._mans[map[y-1][x+2]] || self._mans[map[y-1][x+2]].getData('my')!=my)) d.push([x+2,y-1]);
				//4点
				if ( y+1<= 9 && x+2<= 8 && !self._map[y][x+1] &&(!self._mans[map[y+1][x+2]] || self._mans[map[y+1][x+2]].getData('my')!=my)) d.push([x+2,y+1]);
				//5点
				if ( y+2<= 9 && x+1<= 8 && !self._map[y+1][x] &&(!self._mans[map[y+2][x+1]] || self._mans[map[y+2][x+1]].getData('my')!=my)) d.push([x+1,y+2]);
				//7点
				if ( y+2<= 9 && x-1>= 0 && !self._map[y+1][x] &&(!self._mans[map[y+2][x-1]] || self._mans[map[y+2][x-1]].getData('my')!=my)) d.push([x-1,y+2]);
				//8点
				if ( y+1<= 9 && x-2>= 0 && !self._map[y][x-1] &&(!self._mans[map[y+1][x-2]] || self._mans[map[y+1][x-2]].getData('my')!=my)) d.push([x-2,y+1]);
				//10点
				if ( y-1>= 0 && x-2>= 0 && !self._map[y][x-1] &&(!self._mans[map[y-1][x-2]] || self._mans[map[y-1][x-2]].getData('my')!=my)) d.push([x-2,y-1]);
				//11点
				if ( y-2>= 0 && x-1>= 0 && !self._map[y-1][x] &&(!self._mans[map[y-2][x-1]] || self._mans[map[y-2][x-1]].getData('my')!=my)) d.push([x-1,y-2]);

			return d;
		}

		//相
		this._bylaw.x = function (x,y,map,my){
			var d=[];
			if (my==='j0'){ //红方
				//4点半
				if ( y+2<= 9 && x+2<= 8 && !self._map[y+1][x+1] && (!self._mans[map[y+2][x+2]] || self._mans[map[y+2][x+2]].getData('my')!=my)) d.push([x+2,y+2]);
				//7点半
				if ( y+2<= 9 && x-2>= 0 && !self._map[y+1][x-1] && (!self._mans[map[y+2][x-2]] || self._mans[map[y+2][x-2]].getData('my')!=my)) d.push([x-2,y+2]);
				//1点半
				if ( y-2>= 5 && x+2<= 8 && !self._map[y-1][x+1] && (!self._mans[map[y-2][x+2]] || self._mans[map[y-2][x+2]].getData('my')!=my)) d.push([x+2,y-2]);
				//10点半
				if ( y-2>= 5 && x-2>= 0 && !self._map[y-1][x-1] && (!self._mans[map[y-2][x-2]] || self._mans[map[y-2][x-2]].getData('my')!=my)) d.push([x-2,y-2]);
			}else{
				//4点半
				if ( y+2<= 4 && x+2<= 8 && !self._map[y+1][x+1] && (!self._mans[map[y+2][x+2]] || self._mans[map[y+2][x+2]].getData('my')!=my)) d.push([x+2,y+2]);
				//7点半
				if ( y+2<= 4 && x-2>= 0 && !self._map[y+1][x-1] && (!self._mans[map[y+2][x-2]] || self._mans[map[y+2][x-2]].getData('my')!=my)) d.push([x-2,y+2]);
				//1点半
				if ( y-2>= 0 && x+2<= 8 && !self._map[y-1][x+1] && (!self._mans[map[y-2][x+2]] || self._mans[map[y-2][x+2]].getData('my')!=my)) d.push([x+2,y-2]);
				//10点半
				if ( y-2>= 0 && x-2>= 0 && !self._map[y-1][x-1] && (!self._mans[map[y-2][x-2]] || self._mans[map[y-2][x-2]].getData('my')!=my)) d.push([x-2,y-2]);
			}
			return d;
		}

		//士
		this._bylaw.s = function (x,y,map,my){
			var d=[];
			if (my==='j0'){ //红方
				//4点半
				if ( y+1<= 9 && x+1<= 5 && (!self._mans[map[y+1][x+1]] || self._mans[map[y+1][x+1]].getData('my')!=my)) d.push([x+1,y+1]);
				//7点半
				if ( y+1<= 9 && x-1>= 3 && (!self._mans[map[y+1][x-1]] || self._mans[map[y+1][x-1]].getData('my')!=my)) d.push([x-1,y+1]);
				//1点半
				if ( y-1>= 7 && x+1<= 5 && (!self._mans[map[y-1][x+1]] || self._mans[map[y-1][x+1]].getData('my')!=my)) d.push([x+1,y-1]);
				//10点半
				if ( y-1>= 7 && x-1>= 3 && (!self._mans[map[y-1][x-1]] || self._mans[map[y-1][x-1]].getData('my')!=my)) d.push([x-1,y-1]);
			}else{
				//4点半
				if ( y+1<= 2 && x+1<= 5 && (!self._mans[map[y+1][x+1]] || self._mans[map[y+1][x+1]].getData('my')!=my)) d.push([x+1,y+1]);
				//7点半
				if ( y+1<= 2 && x-1>= 3 && (!self._mans[map[y+1][x-1]] || self._mans[map[y+1][x-1]].getData('my')!=my)) d.push([x-1,y+1]);
				//1点半
				if ( y-1>= 0 && x+1<= 5 && (!self._mans[map[y-1][x+1]] || self._mans[map[y-1][x+1]].getData('my')!=my)) d.push([x+1,y-1]);
				//10点半
				if ( y-1>= 0 && x-1>= 3 && (!self._mans[map[y-1][x-1]] || self._mans[map[y-1][x-1]].getData('my')!=my)) d.push([x-1,y-1]);
			}
			return d;
				
		}

		//将
		this._bylaw.j = function (x,y,map,my){
			var d=[];
			var isNull=(function (y1,y2){
				var y1=self._mans["j0"].getData('y');
				var x1=self._mans["J0"].getData('x');
				var y2=self._mans["J0"].getData('y');
				for (var i=y1-1; i>y2; i--){
					if (map[i][x1]) return false;
				}
				return true;
			})();
			
			if (my==='j0'){ //红方
				//下
				if ( y+1<= 9  && (!self._mans[map[y+1][x]] || self._mans[map[y+1][x]].getData('my')!=my)) d.push([x,y+1]);
				//上
				if ( y-1>= 7 && (!self._mans[map[y-1][x]] || self._mans[map[y-1][x]].getData('my')!=my)) d.push([x,y-1]);
				//老将对老将的情况
				if ( self._mans["j0"].getData('x') == self._mans["J0"].getData('x') &&isNull) d.push([self._mans["J0"].getData('x'),self._mans["J0"].getData('y')]);
			}else{
				//下
				if ( y+1<= 2  && (!self._mans[map[y+1][x]] || self._mans[map[y+1][x]].getData('my')!=my)) d.push([x,y+1]);
				//上
				if ( y-1>= 0 && (!self._mans[map[y-1][x]] || self._mans[map[y-1][x]].getData('my')!=my)) d.push([x,y-1]);
				//老将对老将的情况
				if ( self._mans["j0"].getData('x') == self._mans["J0"].getData('x') &&isNull) d.push([self._mans["j0"].getData('x'),self._mans["j0"].getData('y')]);
			}
			//右
			if ( x+1<= 5  && (!self._mans[map[y][x+1]] || self._mans[map[y][x+1]].getData('my')!=my)) d.push([x+1,y]);
			//左
			if ( x-1>= 3 && (!self._mans[map[y][x-1]] || self._mans[map[y][x-1]].getData('my')!=my))d.push([x-1,y]);
			return d;
		}

		//炮
		this._bylaw.p = function (x,y,map,my){
			var d=[];
			//左侧检索
			var n=0;
			for (var i=x-1; i>= 0; i--){
				if (map[y][i]) {
					if (n==0){
						n++;
						continue;
					}else{
						if (self._mans[map[y][i]].getData('my')!=my) d.push([i,y]);
						break	
					}
				}else{
					if(n==0) d.push([i,y])	
				}
			}
			//右侧检索
			var n=0;
			for (var i=x+1; i <= 8; i++){
				if (map[y][i]) {
					if (n==0){
						n++;
						continue;
					}else{
						if (self._mans[map[y][i]].getData('my')!=my) d.push([i,y]);
						break	
					}
				}else{
					if(n==0) d.push([i,y])	
				}
			}
			//上检索
			var n=0;
			for (var i = y-1 ; i >= 0; i--){
				if (map[i][x]) {
					if (n==0){
						n++;
						continue;
					}else{
						if (self._mans[map[i][x]].getData('my')!=my) d.push([x,i]);
						break	
					}
				}else{
					if(n==0) d.push([x,i])	
				}
			}
			//下检索
			var n=0;
			for (var i = y+1 ; i<= 9; i++){
				if (map[i][x]) {
					if (n==0){
						n++;
						continue;
					}else{
						if (self._mans[map[i][x]].getData('my')!=my) d.push([x,i]);
						break	
					}
				}else{
					if(n==0) d.push([x,i])	
				}
			}
			return d;
		}

		//卒
		this._bylaw.z = function (x,y,map,my){

			var d=[];
			if (my==='j0'){ //红方
				//上
				if ( y-1>= 0 && (!self._mans[map[y-1][x]] || self._mans[map[y-1][x]].getData('my')!=my)) d.push([x,y-1]);
				//右
				if ( x+1<= 8 && y<=4  && (!self._mans[map[y][x+1]] || self._mans[map[y][x+1]].getData('my')!=my)) d.push([x+1,y]);
				//左
				if ( x-1>= 0 && y<=4 && (!self._mans[map[y][x-1]] || self._mans[map[y][x-1]].getData('my')!=my))d.push([x-1,y]);
			}else{
				//翻转 黑方在下面
				//上
				if ( y-1>= 0  && (!self._mans[map[y-1][x]] || self._mans[map[y-1][x]].getData('my')!=my)) d.push([x,y-1]);
				//右
				if ( x+1<= 8 && y<=4  && (!self._mans[map[y][x+1]] || self._mans[map[y][x+1]].getData('my')!=my)) d.push([x+1,y]);
				//左
				if ( x-1>= 0 && y<=4 && (!self._mans[map[y][x-1]] || self._mans[map[y][x-1]].getData('my')!=my))d.push([x-1,y]);
			}
			
			return d;
		}
	},

});


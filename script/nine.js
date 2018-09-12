
    var aLi = document.querySelectorAll("li");
	var aWrap = document.querySelector(".wrap");
	var flicker = aWrap.querySelectorAll("div");
	var start = document.querySelector(".start")
	var finish = document.querySelector(".finish")
	var myStart;
	//获得0-8的三个随机数，
	function randomMath(){
		var nums = [];		
		while(nums.length<3){		
			var num = Math.round(Math.random()*8);

			//判断数字是否重复			
			if(nums.indexOf(num) === -1){
				nums.push(num);
			}
			randomArr = nums;					
		}
		return randomArr;
	}

	//获得随机颜色
	function randomColor(){
		var color = Math.round(Math.random()*16777216).toString(16);

		//小于6位数在前面加0
		while(color.length<6){
			color = "0" + color;			
		}
		color = "#" + color;
		return color;
	}

	    //点击执行函数
	start.onclick = function(){

		//让所有方格颜色初始化
		for(var i = 0; i<flicker.length; i++){
			flicker[i].style.background = "#f90";
		}

		//点击后直接执行一次
		randomMath();
		randomColor();
		for(var i in randomArr){				
			flicker[randomArr[i]].style.background = randomColor();
		}

		clearInterval(myStart);
		myStart = setInterval(function(){
			randomMath();
			randomColor();

			//让所有方格颜色初始化
			for(var i = 0; i<flicker.length; i++){
				flicker[i].style.background = "#f90";
			}

			//让方格颜色变化						
			for(var i in randomArr){				
				flicker[randomArr[i]].style.background = randomColor();
			}

		},1000)
	}

	    //点击停止函数
	    finish.onclick = function(){
	     clearInterval(myStart);
	     for(var i = 0; i<flicker.length; i++){
			flicker[i].style.background = "#f90";
		}
	}

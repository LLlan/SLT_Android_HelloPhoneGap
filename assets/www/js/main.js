// 设置国家数组
var country = new Array();
//本地存储
var storage = window.localStorage;

function init(){
	//默认汇率
	//美元兑换人民币
	country[0] = 630.01;
	//日元兑换人民币
	country[1] = 8.09;
	//里尔兑换人民币
	country[2] = 311.59;
	//新加坡元兑换人民币
	country[3] = 510.59;
	//欧元兑换人民币
	country[4] = 800.01;
	//克朗兑换人民币
	country[5] = 91.59;
	//英镑兑换人民币
	country[6] = 1009.59;
	//返回按钮时间
	$("#backBtn").bind("click",function(){changeRate();});
	//给设置汇率页面的input框设置值
	for(var i=0; i<country.length; i++){
		//步骤：
		//1-线判断本地存储中是否有对应的国家的汇率
		//2-如果有，则将汇率直接赋值给country数组（汇率表）
		//3-如果没有，则将默认汇率写入到本地存储中
		//4-直接读取country给所有的input赋值
		var r = i+2;
		if(storage.getItem("r"+r) ==  null){//本地存储没有数据
			storage.setItem("r"+r,country[i]);
		}else{
			country[i] = storage.getItem("r"+r);
		}
	}
	//将汇率写入到input
	showER();

	// 为首页input添加事件
	for (var i = 0; i < country.length; i++) {
		var c = i+1;
		$("#c"+c).bind("keyup change",function(){exchangeRates(this);});/*根据当前对象的值，改变汇率*/
	};

}

	// 兑换汇率
	function exchangeRates(obj){
		moneyID = obj.id;
		moneyNum = obj.value;
		var moneyCNid = moneyID;//
		var moneyCNNum = "";
		var temp = 0;

		$(".exchangeRates").find("input").each((function(init.element){
			if (this.id != moneyID) {
				//改变汇率
				if (this.id == "c1") {
					if (this.id != "c1") {};

				}
			}else{
				// 当前就是正在被改变的币种
			};
			
		})();)
	}



//设置汇率（将input中的值循环放入本地存储）
function changeRate(){
	for(var i=0; i<country.length; i++){
		var r = i+2;
		storage.setItem("r"+r,$("#r"+r).val());//将设置好的汇率写入本地存储
		country[i] = $("#r"+r).val();//设置好的汇率写入数组
	}
}

//将汇率写入到input
function showER(){
	for(var i=0; i<country.length; i++){
		var r = i+2;
		$("#r"+r).val(country[i]);//写入值
	}
}
//1.创建对象
var xhr=new XMLHttpRequest();
//4.获取响应
xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200)
		{
			var r=xhr.responseText;
			if(!r.length)
			{
			    d1.innerHTML="没有找到一个商品";	
			}
			else
			{
			    var arr=JSON.parse(r);
			    var hs=`<div class="sp_list">
			    	`;
			    for(var i=0;i<arr.length/2;i++)
			    		{   
						hs+=`<div class="plist">
			    			    <div><a href="http://127.0.0.1:8686/sp.html?${arr[i].lid}"><img src="${arr[i].md}" alt="${arr[i].title}"></a></div>
			    			    <div class="nm"><a href="http://127.0.0.1:8686/sp.html?${arr[i].lid}">${arr[i].title}</a></div>
			    			    <div class="price">￥${arr[i].price}<span class="mk">￥${Math.floor(arr[i].price*1.3)}</span></div>
							 </div>`;
			    		}
			    hs+=`<div id="sty"></div></div>`;
			    d1.innerHTML=hs+hs;
				var hs1=`<div class="sp_list">
					`;
				for(var i=arr.length/2;i<arr.length;i++)
						{   
						hs1+=`<div class="plist">
							    <div><a href="http://127.0.0.1:8686/sp.html?${arr[i].lid}"><img src="${arr[i].md}" alt="${arr[i].title}"></a></div>
							    <div class="nm"><a href="http://127.0.0.1:8686/sp.html?${arr[i].lid}">${arr[i].title}</a></div>
							    <div class="price">￥${arr[i].price}<span class="mk">￥${Math.floor(arr[i].price*1.3)}</span></div>
							</div>
							`;
						}
				hs1+=`<div id="sty"></div></div>`;
				d2.innerHTML=hs1+hs1;
			}
		}
	}
//2.创建请求，查找全部的商品
xhr.open("get",`/product/v1/product_list`,true);
//3.发送请求
//3.1
xhr.send();
//轮播图播放
nmb=1;
function zdbf(){
	if(nmb==1){
	   qblbt.style='transform:translate(-3804px);';
	   dyd1.style="background: url(bottomNavOFF.png) no-repeat;";
	   ded1.style="background: url(bottomNavON.png) no-repeat;";
	   dsd1.style="background: url(bottomNavOFF.png) no-repeat;";
	   nmb++;
	   return;
	}
	if(nmb==2){
	   qblbt.style='transform:translate(-5706px);';
	   dyd1.style="background: url(bottomNavOFF.png) no-repeat;";
	   ded1.style="background: url(bottomNavOFF.png) no-repeat;";
	   dsd1.style="background: url(bottomNavON.png) no-repeat;";
	   nmb++;
	   return;
	}
	if(nmb==3){
	   qblbt.style='transform:translate(-7608px);';
	   dyd1.style="background: url(bottomNavON.png) no-repeat;";
	   ded1.style="background: url(bottomNavOFF.png) no-repeat;";
	   dsd1.style="background: url(bottomNavOFF.png) no-repeat;";
	   nmb=1;
	   setTimeout(()=>{
	   qblbt.style='transform:translate(-1902px);transition: 0s;';
	   },500);
	   return;
	}
	if(nmb==0){
	   qblbt.style='transform:translate(0);';
	   dyd1.style="background: url(bottomNavOFF.png) no-repeat;";
	   ded1.style="background: url(bottomNavOFF.png) no-repeat;";
	   dsd1.style="background: url(bottomNavON.png) no-repeat;";
	   nmb=3;
	   setTimeout(()=>{
	   qblbt.style='transform:translate(-5706px);transition: 0s;';
	   },500);
	   return;
	}
} 
lbt=setInterval(zdbf,5000);
function xyy(){
	zdbf();
	clearInterval(lbt);
	lbt=setInterval(zdbf,5000);
}
function syy(){
	 if(nmb==1){
	 	nmb=0;
		zdbf();
		clearInterval(lbt);
		lbt=setInterval(zdbf,5000);
		return;
	 }
	if(nmb==2){
		qblbt.style='transform:translate(-1902px);';
		dyd1.style="background: url(bottomNavON.png) no-repeat;";
		ded1.style="background: url(bottomNavOFF.png) no-repeat;";
		dsd1.style="background: url(bottomNavOFF.png) no-repeat;";
		nmb=1;
		clearInterval(lbt);
		lbt=setInterval(zdbf,5000);
		return;
	}
	if(nmb==3){
		nmb=1;
		zdbf();
		clearInterval(lbt);
		lbt=setInterval(zdbf,5000);
		return;
	}
}
function dyd(){
		qblbt.style='transform:translate(-1902px);';
		dyd1.style="background: url(bottomNavON.png) no-repeat;";
		ded1.style="background: url(bottomNavOFF.png) no-repeat;";
		dsd1.style="background: url(bottomNavOFF.png) no-repeat;";
		nmb=1;
		clearInterval(lbt);lbt=setInterval(zdbf,5000);
		return;
}
function ded(){
		qblbt.style='transform:translate(-3804px);';
		nmb=2;
		dyd1.style="background: url(bottomNavOFF.png) no-repeat;";
		ded1.style="background: url(bottomNavON.png) no-repeat;";
		dsd1.style="background: url(bottomNavOFF.png) no-repeat;";
		clearInterval(lbt);
		lbt=setInterval(zdbf,5000);
		return;
}
function dsd(){
		qblbt.style='transform:translate(-5706px);';
		dyd1.style="background: url(bottomNavOFF.png) no-repeat;";
		ded1.style="background: url(bottomNavOFF.png) no-repeat;";
		dsd1.style="background: url(bottomNavON.png) no-repeat;";
		nmb=3;
		clearInterval(lbt);
		lbt=setInterval(zdbf,5000);
		return;
}
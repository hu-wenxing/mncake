// var n1=location.href.length;
// var n2=location.href.indexOf('l');
// var txt=decodeURI(location.href.substr(n2+2,n1-n2));
// var txt=decodeURI(location.search.substr(1));
// if(txt.length)
// tt.innerHTML=txt;
var storage=window.sessionStorage;
var uid=storage.getItem("uid");
var phone1=storage.getItem("phone");
var uname=storage.getItem("uname");
if(uname&&uname!='null')
{
ttt.innerHTML=`你好！${uname} <button onclick="fff()">退出</button>`;
// var count=cart_sum.innerHTML;
// //1.创建对象
// var xhr=new XMLHttpRequest();
// //4.获取响应
// xhr.onreadystatechange=function(){
// 		if(xhr.readyState==4&&xhr.status==200)
// 		{
// 			var r=xhr.responseText;
// 			var arr=JSON.parse(r);
// 			cart_sum.innerHTML=arr[0].sum;
// 		}
// 	}
// //2.创建请求，查找全部的商品
// xhr.open("get",`/cart/v1/cid_count/${uid}`,true);
// //3.发送请求
// //3.1
// xhr.send();
}
else if(phone1)
{
ttt.innerHTML=`你好！${phone1} <button onclick="fff()">退出</button>`;
// var count=cart_sum.innerHTML;
// //1.创建对象
// var xhr=new XMLHttpRequest();
// //4.获取响应
// xhr.onreadystatechange=function(){
// 		if(xhr.readyState==4&&xhr.status==200)
// 		{
// 			var r=xhr.responseText;
// 			var arr=JSON.parse(r);
// 			cart_sum.innerHTML=arr[0].sum;
// 		}
// 	}
// //2.创建请求，查找全部的商品
// xhr.open("get",`/cart/v1/cid_count/${uid}`,true);
// //3.发送请求
// //3.1
// xhr.send();
}
//固定导航栏位置
window.onload=function(){
    var oDiv=document.getElementById("fixed"),
    H=0,
    Y=oDiv;
    while (Y) {H+=Y.offsetTop; Y=Y.offsetParent}
    window.onscroll = function()
    {
        var s=document.body.scrollTop || document.documentElement.scrollTop
        if(s>H) {
            oDiv.style="position:fixed;top:0px;width:100%;z-index:999;background-color: #fff;"
        } else {
            oDiv.style = "";
        }
    }
}
//退出按钮，清除缓存
function fff()
{
	sessionStorage.clear();
	location.href="http://127.0.0.1:8686/index.html";
}
//判断搜索框是否输入内容
function show(){
    if(!nrr.value.length)
	{
	   alert('请输入要查找的内容');
	}
	else
	{
	   location.href=`search.html?${nrr.value}`;
	}
}

//导航栏点击时的样式
function dj0(){
	for(i=0;i<8;i++)
	 {
		if(i==0){
		   eval(`djsj${i}.className="xianshi";`);
		}
		else{
		   eval(`djsj${i}.className="";`); 
		}
	 }
}
//导航栏点击时的样式
function dj1(){
	for(i=0;i<8;i++)
	 {
		if(i==1){
		   eval(`djsj${i}.className="xianshi";`);
		}
		else{
		   eval(`djsj${i}.className="";`); 
		}
	 }
}
//导航栏点击时的样式
function dj2(){
	for(i=0;i<8;i++)
	 {
		if(i==2){
		   eval(`djsj${i}.className="xianshi";`);
		}
		else{
		   eval(`djsj${i}.className="";`); 
		}
	 }	
}
//导航栏点击时的样式
function dj3(){
	for(i=0;i<8;i++)
	 {
		if(i==3){
		   eval(`djsj${i}.className="xianshi";`);
		}
		else{
		   eval(`djsj${i}.className="";`); 
		}
	 }
}
//导航栏点击时的样式
function dj4(){
	for(i=0;i<8;i++)
	 {
		if(i==4){
		   eval(`djsj${i}.className="xianshi";`);
		}
		else{
		   eval(`djsj${i}.className="";`); 
		}
	 }
}
//导航栏点击时的样式
function dj5(){
	for(i=0;i<8;i++)
	 {
		if(i==5){
		   eval(`djsj${i}.className="xianshi";`);
		}
		else{
		   eval(`djsj${i}.className="";`); 
		}
	 }
}
//导航栏点击时的样式
function dj6(){
	for(i=0;i<8;i++)
	 {
		if(i==6){
		   eval(`djsj${i}.className="xianshi";`);
		}
		else{
		   eval(`djsj${i}.className="";`); 
		}
	 }
}
//导航栏点击时的样式
function dj7(){
	for(i=0;i<8;i++)
	 {
		if(i==7){
		   eval(`djsj${i}.className="xianshi";`);
		}
		else{
		   eval(`djsj${i}.className="";`); 
		}
	 }
}


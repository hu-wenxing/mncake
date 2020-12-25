var storage=window.sessionStorage;
var uid=storage.getItem("uid");
//数量加一
function add(j)
{   
    var kk=document.getElementById(`kk${j}`);
    var k=kk.value/1+1;
    kk.value=k;
}
//数量减一
function jj(j)
{   
	var kk=document.getElementById(`kk${j}`);
	var k=kk.value/1-1;
	kk.value=k;
}
//输入的数量
// function bb(j)
// {  
//    var kk=document.getElementById(`kk${j}`);
//    var k=kk.value;
// }
function aaa()
{
   if(!uid)
   {
        alert('您尚未登陆');
   	 location.href='http://127.0.0.1:8686/login.html'; 	
   }
   else
   {
       //0.获取数据
       //1.创建对象
       var xhr=new XMLHttpRequest();
       //4.获取响应
       xhr.onreadystatechange=function(){
       	if(xhr.readyState==4&&xhr.status==200)
       	{
       		var r=xhr.responseText;
       		if(r==0)
       		tt.innerHTML="您的订单是空的，请到购物车<a href='http://127.0.0.1:8686/gwc.html'>添加</a>订单！";
       		else
       		{
       		    var arr=JSON.parse(r);
       		    var hs=`<table cellspacing="0" width="800px" height="300px" border="1" bordercolor="purple" bgcolor="pink" align="center">
				    <tr>
				        <th colspan="4" align="left"> <a href='#'>选择收货地址</a></th>
					</tr>
       		        <tr>
       		            <th>商品优惠价格</th>
       		            <th>商品标题</th>
       		            <th>商品价格</th>
   						<th>商品数量</th>
       		        </tr>
       		        `;
       		    for(i=0,sum=0;i<arr.length;i++)
       		     	{   j=arr[i].lid;
       				    hs+=`<tr>
       				    	<td>${arr[i].scprice}</td>
       				    	<td>${arr[i].title}</td>
       				    	<td>${arr[i].price}</td>
       				        <td><button onclick="add(${j})">+</button> <input type="text" size="1" id="kk${j}" value="${arr[i].count}"> <button onclick="jj(${j})">-</button></td>
       				    	</tr>`;
   						sum+=arr[i].price*arr[i].count;
       			    }
   				hs+=`<tr>
   				    <th colspan="4" align="right">总价:￥${sum}</th>
   				    </tr>
					<tr>
					    <th colspan="4" align="right">
					    <a href='http://127.0.0.1:8686/gwc.html'>返回购物车</a>
						</th>
					</tr>
					<tr>
					    <th colspan="4" align="right">
					    <a href='#'>确定并付款</a>
						</th>
					</tr>
   					</table>`;
       		    tt.innerHTML=hs;
       	    }
       	}
       }
       //2.创建请求
       xhr.open("get",`/order/v1/order/${uid}`,true);
       //3.发送请求
       //3.1
       xhr.send();		
   }
}
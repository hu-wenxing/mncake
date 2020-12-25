var storage=window.sessionStorage;
var uid=storage.getItem("uid");
//全选按钮判断
function gouxuan()
{   
	for(i=0,a=0;i<arr.length;i++)
	{
	   let kk=document.getElementById(`jj${arr[i].cid}`);
		if(kk.checked==true)
		a++;
		if(kk.checked==false)
		{
			mm.checked=1;
			for(k=0;k<arr.length;k++)
			{
			   let kk=document.getElementById(`jj${arr[k].cid}`);
			   kk.checked=1;
			}
		}
		if(a==arr.length)
		{   mm.checked=0;
		    for(j=0;j<arr.length;j++)
		    {
		       let kk=document.getElementById(`jj${arr[j].cid}`);
		       kk.checked=0;
		    }	
		}
	}
}
//判断是否全部勾选
function gxuan()
{
    for(i=0,a=0;i<arr.length;i++)
    {
       let kk=document.getElementById(`jj${arr[i].cid}`);
    	if(kk.checked==true)
    	a++;
    	if(kk.checked==false)
    	{
    		mm.checked=0;
    	}
    	if(a==arr.length)
    	{   
    		mm.checked=1;
    	}
    }
}
//跳转到结算页面
function qjs()
{
	location.href=`http://127.0.0.1:8686/order_detail.html`;
}
//输入的数量
function bb(j)
{  
   var kk=document.getElementById(`kk${j}`);
   var k=kk.value;
   //1.创建对象
   var xhr=new XMLHttpRequest();
   //4.获取响应
   xhr.onreadystatechange=function(){
   		if(xhr.readyState==4&&xhr.status==200)
   		{
   			var r=xhr.responseText;
   	        if(r==0)
   	        {
   	           alert("购物车输入数量失败");
   	        }
   	        else
   	        {
   	           aaa();
   	        }
   		}
   	}
   //2.创建请求
   xhr.open("put",`/cart/v1/cart_jj`,true);
   //3.发送请求
   var formdata=`cid=${j}&count=${k}`;
   xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
   xhr.send(formdata);
}
//数量加一
function add(j)
{   
    var kk=document.getElementById(`kk${j}`);
	var k=kk.value;
	//0.获取数据
	//1.创建对象
	var xhr=new XMLHttpRequest();
	//4.获取响应
	xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200)
			{
			   var r=xhr.responseText;
			   if(r==0)
			    {
			   	 alert("购物车增加数量失败");
			   	}
			   else
			    {
			     aaa();
			    }
			}
		}
	//2.创建请求
	xhr.open("put",`/cart/v1/cart_add`,true);
	//3.发送请求
	var formdata=`cid=${j}&count=${k}`;
	xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
	xhr.send(formdata);
}
//数量减一
function jj(j)
{   
	//0.获取数据
	var kk=document.getElementById(`kk${j}`);
	var k=kk.value/1-1;
	//1.创建对象
	var xhr=new XMLHttpRequest();
	//4.获取响应
	xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200)
			{
				var r=xhr.responseText;
		        if(r==0)
		        {
		           alert("购物车减少数量失败");
		        }
		        else
		        {
		           aaa();
		        }
			}
		}
	//2.创建请求
	xhr.open("put",`/cart/v1/cart_jj`,true);
	//3.发送请求
	var formdata=`cid=${j}&count=${k}`;
	xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
	xhr.send(formdata);
}
//删除某一个商品
function del(j)
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
		        {
		           alert("购物车删除商品失败");
		        }
		        else
		        {
		           aaa();
		        }
			}
		}
	//2.创建请求
	xhr.open("delete",`/cart/v1/del_one/${j}`,true);
	//3.发送请求
	xhr.send();
}
//删除全部商品
function del_all()
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
		        {
		           alert("购物车删除全部商品失败");
		        }
		        else
		        {
		           aaa();
		        }
			}
		}
	//2.创建请求
	xhr.open("delete",`/cart/v1/del_all/${uid}`,true);
	//3.发送请求
	xhr.send();
}
//查找商品信息
function aaa()
{
   if(!uid)
   {
        alert('您尚未登陆');
   	    location.href='http://127.0.0.1:8686/login.html'; 	
   }
   else{
       //0.获取数据
       //1.创建对象
       var xhr=new XMLHttpRequest();
       //4.获取响应
       xhr.onreadystatechange=function(){
       	if(xhr.readyState==4&&xhr.status==200)
       	{
       		var r=xhr.responseText;
       		if(r==0)
       		tt.innerHTML="您的购物车是空的，请<a href='http://127.0.0.1:8686/index.html'>添加</a>商品！";
       		else
       		{
       		    arr=JSON.parse(r);
       		    var hs=`<table cellspacing="0" width="800px" height="300px" border="1" bordercolor="purple" bgcolor="pink" align="center">
				    <tr>
				        <th colspan="6" align="left"><button onclick="del_all()">全部删除</button></th>
					</tr>
       		        <tr>
					    <th><input type="checkbox" id="mm" onclick="gouxuan()">全选</th>
       		            <th>商品优惠价格</th>
       		            <th>商品标题</th>
       		            <th>商品价格</th>
   						<th>商品数量</th>
						<th>操作</th>
       		        </tr>
       		        `;
       		    for(i=0,sum=0;i<arr.length;i++)
       		     	{   j=arr[i].cid;
       				    hs+=`<tr>
						    <td><input type="checkbox" id="jj${j}" onclick="gxuan()"></td>
       				    	<td>${arr[i].scprice}</td>
       				    	<td>${arr[i].title}</td>
       				    	<td>${arr[i].price}</td>
       				        <td><button onclick="add(${j})">+</button> <input type="text" size="1" id="kk${j}" onblur="bb(${j})" value="${arr[i].count}"> <button onclick="jj(${j})">-</button></td>
							<td><button onclick="del(${j})">删除</button></td>
       				    	</tr>`;
   						sum+=arr[i].price*arr[i].count;
       			    }
   				hs+=`<tr>
   				    <th colspan="6" align="right">总价:￥${sum}</th>
   				    </tr>
					<tr>
					    <th colspan="6" align="right">
					    <a href='http://127.0.0.1:8686/index.html'>继续添加商品</a>
						</th>
					</tr>
					<tr>
					    <th colspan="6" align="right">
					    <button onclick="qjs()">去结算</button>
						</th>
					</tr>
   					</table>`;
       		    tt.innerHTML=hs;
       	    }
       	}
       }
       //2.创建请求
       xhr.open("get",`/cart/v1/cart_list/${uid}`,true);
       //3.发送请求
       //3.1
       xhr.send();
   }
}

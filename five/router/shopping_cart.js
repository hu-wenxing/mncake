//引入express
const express=require('express');
//引入连接池模块pool.js
const pool=require('../pool.js');
//创建路由器对象
const r=express.Router();
//检测用户购物车中商品种类路由
r.get("/v1/cid_count/:uid",(req,res)=>{
	pool.query("select count(cid) sum from mncake_shopping_cart where user_id=?",[req.params.uid],(err,result)=>{
		if(err) throw err;
		if(result.length)
		res.send(result);
		else
		res.send("0");
	});
});
//购物车展示路由
r.get("/v1/cart_list/:user_id",(req,res)=>{
	var sql=`select mncake_shopping_cart.cid,mncake_shopping_cart.count,mncake_laptop.title,mncake_laptop.price,mncake_laptop.scprice,mncake_laptop.lid from mncake_laptop inner join mncake_shopping_cart on mncake_shopping_cart.laptop_id=mncake_laptop.lid where mncake_shopping_cart.user_id=? order by mncake_shopping_cart.cid`;
   pool.query(sql,[req.params.user_id],(err,result)=>{
   if(err) throw err;
   if(result.length)
   res.send(result);
   else
   res.send("0");
	 });
 });
//购物车数量增加路由
r.put("/v1/cart_add",(req,res)=>{
	pool.query("update mncake_shopping_cart set count=? where cid=?",[req.body.count/1+1,req.body.cid],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows)
		res.send("1");
		else
		res.send("0");
	});
});
//购物车数量减少路由
r.put("/v1/cart_jj",(req,res)=>{
	var a=req.body.count;
	if(a>0)
	{
	    pool.query("update mncake_shopping_cart set count=? where cid=?",[a,req.body.cid],(err,result)=>{
	    	if(err) throw err;
	    	if(result.affectedRows)
	    	res.send("1");
	    	else
	    	res.send("0");
	    });
	}
	else
	{
	    pool.query("delete from mncake_shopping_cart where cid=?",[req.body.cid],(err,result)=>{
	    	if(err) throw err;
	    	if(result.affectedRows)
	    	res.send("1");
	    	else
	    	res.send("0");
	    });
	}
});
//购物车删除单个商品路由
r.delete("/v1/del_one/:cid",(req,res)=>{
	    pool.query("delete from mncake_shopping_cart where cid=?",[req.params.cid],(err,result)=>{
	    	if(err) throw err;
	    	if(result.affectedRows)
	    	res.send("1");
	    	else
	    	res.send("0");
	    });
});
//购物车删除全部商品路由
r.delete("/v1/del_all/:user_id",(req,res)=>{
	    pool.query("delete from mncake_shopping_cart where user_id=?",[req.params.user_id],(err,result)=>{
	    	if(err) throw err;
	    	if(result.affectedRows)
	    	res.send("1");
	    	else
	    	res.send("0");
	    });
});
//购物车商品是否全选路由
// r.put("/v1/all_checked",(req,res)=>{
// 	pool.query("update mncake_shopping_cart set is_checked=? where user_id=?",[req.body.is_checked/1,req.body.user_id],(err,result)=>{
// 		if(err) throw err;
// 		if(result.affectedRows)
// 		res.send("1");
// 		else
// 		res.send("0");
// 	});
// });
// 导出路由器对象
module.exports=r;
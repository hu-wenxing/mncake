//引入express
const express=require('express');
//引入连接池模块pool.js
const pool=require('../pool.js');
//创建路由器对象
const r=express.Router();
//订单生成路由
r.get("/v1/order/:user_id",(req,res)=>{
	var sql=`select cid,count,title,price,scprice,lid from mncake_laptop inner join mncake_shopping_cart on laptop_id=lid where user_id=? order by cid`;
   pool.query(sql,[req.params.user_id],(err,result)=>{
   if(err) throw err;
   if(result.length)
   res.send(result);
   else
   res.send("0");
	 });
 });
// 导出路由器对象
module.exports=r;
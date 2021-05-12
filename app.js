const express=require('express');
const app=express();
app.listen(6663);
app.use('/get',(req,res)=>{
	
	let ram=Math.random()*100;
	if(ram>=0 && ram<=1){//0-45
		let num=360*5+Math.random()*45;
		res.send({code:1,msg:'恭喜中了一等奖',num:num})
	}else if(ram>1 && ram<=3){ //45-90
		let num=360*5+Math.random()*45+315;
		res.send({code:1,msg:'恭喜中了二等奖',num:num})
	}else if(ram>4 && ram<=7){
		let num=360*5+Math.random()*45+270;
		res.send({code:1,msg:'恭喜中了三等奖',num:num})
	}else if(ram>7 && ram<=11){
		let num=360*5+Math.random()*45+225;
		res.send({code:1,msg:'恭喜中了四等奖',num:num})
	}else if(ram>11 && ram<=16){
		let num=360*5+Math.random()*45+180;
		res.send({code:1,msg:'恭喜中了五等奖',num:num})
	}else if(ram>16 && ram<=22){
		let num=360*5+Math.random()*45+135;
		res.send({code:1,msg:'恭喜中了六等奖',num:num})
	}else if(ram>22 && ram<=29){
		let num=360*5+Math.random()*45+90;
		res.send({code:1,msg:'恭喜中了七等奖',num:num})
	}else{
		let num=360*5+Math.random()*45+45;
		res.send({code:0,msg:'再接再厉',num:num})
	}
})
app.use(express.static('./'));

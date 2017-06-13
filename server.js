const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('wwwroot'));

app.use(bodyParser.json());

//读取文件内容
app.get('/api/card/:id',(req,res)=>{
	//指定文件名
	// ``属于ES6模版字符串语法,其中${}表示一个变量
	var filename= `${req.params.id}.txt`;
	fs.readFile(filename,(err,data)=>{
		if(err){
			
		}else{
			res.json({code: 'success',msg:"读取数据成功",data:JSON.parse(data)})
		}
	})
})
 
app.post('/api/card/:id',(req,res)=>{
	//根据id生成文件名
	console.log(req.body)
	fs.writeFile(`${req.params.id}.txt`,JSON.stringify(req.body),(err)=>{
		if(err){
			res.json({code:'error',msg:'失败'})
		}else{
			res.json({code:'success',msg: '保存文件成功'})
		}
	})
})

app.listen(3000,()=>{
	console.log('服务器启动在端口号3000')
})


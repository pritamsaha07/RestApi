const express=require('express');
const bodyParser=require('body-parser');
const usersRoutes=require('./users');
const app=express();
const port=3000;

app.use(bodyParser.json());
app.use('/users', usersRoutes);
app.get('/', (req,res)=>{
    console.log('TEST'); 

    res.send('Hello');
})
app.listen(port,()=> console.log(`Server Running on port :${port}`));

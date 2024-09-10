require('dotenv').config();

const express=require('express');
const {sequelize}=require('./src/models/index');
const useroutes=require('./src/routes/useroutes');

const app=express();
app.use(express.json());
app.use('/routes',useroutes)

sequelize.sync().then(()=>{
    const port=3000||process.env.PORT;
    app.listen(port,()=>{
        console.log(`server is running with ${port}`)
    })
}).catch(error=>{
    console.error('unable to connect db ',error);
})

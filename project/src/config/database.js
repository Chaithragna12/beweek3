require('dotenv').config(); //load .env variables

const {Sequelize}=require('sequelize');

//intialize sequelize with postgresql connect using environment variables

const sequelize=new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_NAME,
    process.env.DATABASE_PASSWORD,
    {
        host: process.env.DATABASE_HOST,
        dialect:process.env.DATABASE_DIALECT,
        logging:false, //diable logging or set it to custom function if needed
    }
    
)
//test the db connection
sequelize.authenticate()
    .then(()=>{
        console.log('Database connection is successfull');
    })
    .catch(err=>{
        console.error('unable to connect database',err);
    })

module.exports=sequelize;



const express = require('express');
const bodyParser= require('body-parser');
const morgan= require('morgan');
const app = express();
const mongoose=require('mongoose');
const userRoutes = require('./api/routes/user');

//Connection to DB
mongoose.connect("mongodb://ransinha:ROCKNrolla1989@cluster0-shard-00-00-yurlj.mongodb.net:27017,cluster0-shard-00-01-yurlj.mongodb.net:27017,cluster0-shard-00-02-yurlj.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true",{ useNewUrlParser: true });
 

//mongodb+srv://ransinha:<ROCKNrolla1989@cs1-mw7hm.mongodb.net/test?retryWrites=true
//CORS ERROR HANDLING- to handle security measures taken by the browsers
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
  });
  mongoose.Promise = global.Promise;


//morgan- middleware used to see the requests in the console
//body-parser- to read the json body of the incoming request 
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//Routes to handle requests
app.use("/user", userRoutes);

app.use((req,res,next)=>{
const error=new Error('Not Found');
error.status=404;
next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        message: error.message
    })
});


module.exports = app;

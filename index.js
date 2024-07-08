const express = require('express');
const app = express();

app.use(express.json());

const database = require('./config/database.js');
database();

const routes = require('./route/routes.js');
app.use('/',routes);


app.listen(4000,()=>{
    console.log('server running');
});

//var a = "anjali";
//var b = a.toUpperCase;
// var mname = "anjaali singh";
/*var uppercase = mname.toUpperCase;

 var fname = mname.search("");

 if(fname == -1){
    console.log(fname);
}*/


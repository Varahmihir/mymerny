import Express  from "express";
// this is new es6+ script earlier const ecpress = requie'express'; by adding "type":"module" in jason
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from './routes/post.js';
//call in express() function put new express application inside app variable(something like creating app object of class express)
const app = Express();
//use /post for every post routes

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());


app.use('/post',postRoutes);
// https://www.mongodb.com/cloud/atlas

const CONNECTION_URL ='mongodb+srv://ayushkumarrv10:singhisking12@cluster0.yoxtsxk.mongodb.net/?retryWrites=true&w=majority';
const PORT= process.env.PORT || 5000;

//then either fullfill or rejection of the promise ,cath only when rejexction of the promise
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
   .then(()=> app.listen(PORT,() => console.log(`server running on port: ${PORT} HURRAY`)))
   .catch((error)=>console.log(error.message));

   

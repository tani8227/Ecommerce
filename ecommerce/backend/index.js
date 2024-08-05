import express from "express";
import path from 'path';
import cors from "cors"
const port =8000;
const app= express();

app.use(cors(
    {
        origin: ' http://localhost:3000', 
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    }));

import db from './config/mongoose.js';
import routes from "./routes/index.js";
import bodyParser from "body-parser";
import passport from "passport";
import JWTStrategy from './config/passport-jwt-strategy.js'



app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())








app.use(passport.initialize());

app.use('/', routes);
app.listen(port , (err)=>
    {
        if(err)
            {
                console.log("error in running the server");
            }
        console.log("server is running on port :", port);
    })

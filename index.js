import express from 'express';
import router from './router/crud.js';
import path from 'path';
import mongoose from 'mongoose';
import { requestTime, looger } from './middleware.js';

const PORT = process.env.PORT ?? 3000;
const app = express();

//ejs
app.set('view engine','ejs')
app.set('views',path.resolve("ejs"))

//Middleware
app.use(express.json());
app.use(express.static(path.resolve('static')));
app.use(router);

app.use(requestTime);
app.use(looger);

function start ()
{
    try{
        mongoose.connect('mongodb+srv://Gor:root@cluster0.wzraz.mongodb.net/express_Vue?retryWrites=true&w=majority',{
            useNewUrlParser:true,
            useFindAndModify:false,
            useUnifiedTopology: true
        })
        app.listen(PORT,() => console.log(`Server has been started on port ${PORT}...`));
    } catch (e) {
        console.log(e);
    }
}

start();
import express from 'express';
import envConfig from './configs/envConfig.js';
import db from './configs/database.js'
db();
import cookieParser from 'cookie-parser';
import bookRouter from './router/book.route.js';
import userRouter from './router/user.route.js';

const port = envConfig.PORT || 8081;
const app = express();

app.use(cookieParser());
app.use(express.urlencoded());
app.use(express.json());
app.use('/api/user',userRouter);
app.use('/api/book',bookRouter);

app.listen(port, (err) => {
    if (!err) {
        console.log('server start');
        console.log('http://localhost:'+port);
    } 
})
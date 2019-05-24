import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import logger from 'morgan';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors());
app.use(logger('dev'));
// For React Stuff if need be
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'build')));
app.use(cookieParser());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(() => (req, res, next)  =>{
  res.locals.user = req.user; // This is the important line
  // req.session.user = user
  console.log(res.locals.user);
  next();
});
app.use(bodyParser.urlencoded({ extended:false})); 

//build mode
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/client/public/index.html'));
// })

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
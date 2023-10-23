//importing packages and setting variables
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyparser = require('body-parser');



const app = express();
const port =  3450;

const authenticationRoute = require('./api/routes/Authentication')




//middlewares

app.use (morgan('dev'));
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}));
app.use(helmet());
//error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Sorry, that didn"t work!')
})




//Route middlewares


app.use('/login', authenticationRoute);






















app.listen(port, ()=>{
    console.log('Server Up and Running On Port', `${port}`)
})
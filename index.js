// const express  = require('express');
// const app  = express();
//
// app.listen(3000,()=>{
//   console.log('server chal gaya');
// })

// Use for all type requests
// app.use('/user',(request, response)=>{
//   response.send({name:'Shariq',age:20,education:'intermediate'})
// })

// post for post type requests
// app.post('/user',(request, response)=>{
//   response.send({name:'Shariq',age:20,education:'intermediate'})
// })

// get for get requests
// app.get('/user',(request, response)=>{
//   response.send({name:'Shariq',age:20,education:'intermediate'})
// })

// for requests parameters
// app.use(express.json());

const express  = require('express');
const app  = express();

app.listen(3000,()=>{
  // console.log('server chal gaya');
})

app.use(express.json());

app.use('/', require('./screens/path'));


var mongoose = require('./config/db');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connection successfull !');
});

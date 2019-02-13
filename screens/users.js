const express  = require('express');
const router  = express.Router();
const Users = require('../model/Users');

router.get('/getAll', (req, res)=>{
  Users.find({})
  .then(response=>{
    res.send(response);
  })
  .catch(err=>{
    res.send(err.message);
  })
});

router.get('/get/:id', (req, res)=>{
  console.log(req.params.id);
});

router.post('/addUsers', (req, res)=>{
  const users = new Users(req.body);
  users.save()
  .then(()=>{
    res.send({message:'user successfully added'})
  })
  .catch(err=>{
    res.send({message:err.message})
  })
});

router.post('/updateUsers', (req, res)=>{
  // const users = new Users(req.body);
  // users.save()
  Users.findByIdAndUpdate(req.body.id, { $set: { name: req.body.name }})
  .then(()=>{
    res.send({message:'user update successfully'})
  })
  .catch(err=>{
    res.send({message:err.message})
  })
});

// 5c397bbfd0551213e81bba42


module.exports = router;

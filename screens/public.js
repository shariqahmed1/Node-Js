const express  = require('express');
const router  = express.Router();

router.get('/getAll', ()=>{
  console.log('get chal gaya');
});

router.post('/add', (req, res)=>{
  console.log(res);
});

module.exports = router;

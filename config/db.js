const mongoose = require('mongoose');
mongoose.connect('mongodb://shariq:shariq123@ds115219.mlab.com:15219/learningapp', {useNewUrlParser: true});

module.exports = mongoose;

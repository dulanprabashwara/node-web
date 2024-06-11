const mongoose = require('mongoose');
const schema = mongoose.schema;
const userschema = new schema ({
    id: Number, name:String
})
const user= mongoose.model('user',userschema);
module.exports= user;

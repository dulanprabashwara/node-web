const mongoose = require('mongoose');
const app = require('./app');
const cors = require('cors');
const port = 3001;
const host = '127.0.0.1'
const router =require('./router');
app.use(cors())
app.use(express.json());
const uri = "";
const connect = async ()=>{
    try{
        await mongoose.connect(uri);
        console.log('connected to the mongodb');
    }catch(error){
        console.log("monogodb error",error);
    }
}
connect()
const server = app.listen(port,host,()=>{
    consolelog(`node server is listninig to ${server.address().port}`)
})
app.use('./api',router);s
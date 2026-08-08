const dns=require("dns")
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = require('./src/app')
const connectdb =require('./src/db/db')
connectdb();



app.listen(3000,()=>{
    console.log("server is running")
})
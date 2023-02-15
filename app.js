const express = require('express');
const server = require('./src/routes/route');
const db = require('./src/database/connection');
const app = express();
const cors = require('cors')
app.use(cors());
app.use(express.json());
db.con.connect((err)=>{if (err) throw err;});

app.get('/',(req,res)=>{
    console.log("you're in the server");
    res.send("you're in the server");
});

app.use('/',server);

app.listen(5000,()=>{
    console.log("server is running on port 5000",)
});
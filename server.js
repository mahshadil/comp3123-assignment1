const express= require('express')
const employeeRoute=require('./routes/employee')
const userRoute=require('./routes/user')
const mongoose=require('mongoose')
const dotenv= require('dotenv').config()
const db = require('./db')
db()

const app = express()
// const apiV1=express()
// app.use(cors())

const PORT = 8002


app.use(express.json())

app.use((req, res, next) => {
    console.log("application middleware");
    console.log(`${Date()}-${req.method}-${req.url}`);
    next(); // Call "next" to continue the middleware
});


app.use('/api/v1/emp',employeeRoute)
app.use('/api/v1/user',userRoute)
// app.use('/api/v1/',apiV1)


app.get('/',(req,res)=>{
    res.send('Home')
})




app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}...`)
})

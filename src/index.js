// require ('dotenv').config({path: './env'})


import dotenv from 'dotenv';
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})
connectDB()


















/*
(async ()=>{
    try {
      await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      app.on('error',()=>{
        console.log('error', error)
      })
      app.listen(process.env.PORT,()=>{
        console.log(`app is listening on ${process.env.PORT}`)

      })
    } catch (error) {
        console.log('Error accur', error)
        throw error
    }
})()
*/


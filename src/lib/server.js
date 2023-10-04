import express from 'express'
import { Resend } from 'resend'
import dotenv from 'dotenv'
const app = express()

dotenv.config();
console.log("tHE API key: " , process.env.VITE_APP_RESEND_API_KEY)
const resend = new Resend(process.env.VITE_APP_RESEND_API_KEY)


app.post("/api/v1/sendEmail" , async (res , req) => {
  console.log(req , res)

})

app.listen(8000 , () => {
  console.log("The server is dummed at: " , 8000)
})

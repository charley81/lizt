import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import { connectDB } from './config/db.js'

const app = express()
dotenv.config()

const PORT = process.env.PORT || 8000
connectDB()

app.listen(PORT, () => console.log(`server listening on port: ${PORT}`))

import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'

const app = express()
dotenv.config()

const PORT = 8000

app.listen(PORT, () => console.log(`server listening on port: ${PORT}`))

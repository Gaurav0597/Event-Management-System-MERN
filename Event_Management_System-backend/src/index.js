import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
dotenv.config()
import eventController from './controllers/EventController.js'
import nontecheventContoller from "./controllers/NonTechnicalEvent.js"
import coursecontroller from "./controllers/CourseController.js"
const app = express()

app.use(
  cors({
    origin: 'http://localhost:5000',
    credentials: true,
  }),
)
app.use(express.json())
app.use('/event', eventController)
app.use('/nonTechnicalEvent', nontecheventContoller)
app.use('/course',coursecontroller)

const connection = process.env.DB
const PORT = process.env.PORT || 5000

mongoose
  .connect(connection, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on ${PORT}`)
    })
  })
  .catch((err) => {
    console.log(err)
  })

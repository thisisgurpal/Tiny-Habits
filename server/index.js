import mongoose from 'mongoose'
import express from 'express'
import router from './config/routes.js'
import 'dotenv/config' // only needs to be added if it doesn't already exist
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// this is a comment

const app = express()

const startServer = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, console.log('Mongoose connected'))
    app.use(express.json())
    app.use(((req, res, next) => {
      console.log(`Request received: ${req.method} - ${req.url} `)
      next()
    }))
    app.use('/api', router)
    app.use(express.static(path.join(__dirname, 'client', 'build')))
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`))
    app.use(((_req, res) => {
      return res.status(404).json({ message: 'Route not found' })
    }))
  } catch (error) {
    console.log(error)
  }
}
startServer()

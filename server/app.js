import express from "express";

import userRoutes from './routes/users.routes.js'
import habitRoutes from './routes/habits.routes.js'

const app = express()
app.use(express.json())

app.use('/users', userRoutes)
app.use('/habits', habitRoutes)

export default app
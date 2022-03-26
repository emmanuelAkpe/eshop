import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

import productRoutes from './routes/ProductRoutes.js'

connectDB()

const app = express()

app.use('/api/products', productRoutes)


dotenv.config()


app.use(cors())

const PORT= process.env.PORT ||5000

app.get('/', (req, res)=>{
    res.send('hello Ghana')
})


app.listen(PORT,()=>{
    console.log(`backend running in  ${process.env.NODE_ENV} mode  on port ${PORT}`);
})
import express from 'express'
import products from './data/products.js'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

connectDB()

const app = express()



dotenv.config()


app.use(cors())

const PORT= process.env.PORT ||5000

app.get('/', (req, res)=>{
    res.send('hello Ghana')
})

app.get('/api/products', (req, res)=>{
     res.json(products);
})

app.get('/api/products/:id', (req, res)=>{
    const product =products.find((p)=>p._id === req.params.id)
    res.json(product);
})

app.listen(PORT,()=>{
    console.log(`backend running in  ${process.env.NODE_ENV} mode  on port ${PORT}`);
})
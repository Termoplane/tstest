const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require('body-parser')

const occasionRoutes = require("./router.ts")

const PORT = process.env.PORT || 3001

const app = express()

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    next()
})

app.use(occasionRoutes)

async function start() {
    try {
        await mongoose.connect('mongodb://localhost:27017/tstest', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => {
            console.log("Server is listening on port", PORT);
        })
    } catch (err) {
        console.log("🐱‍🐉🐱‍💻", err);
    }
}

start()
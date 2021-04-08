const { Router } = require("express")

const Occasion = require("./models/occasion.ts")

const router = Router()

router.get('/occasions', async (req, res) => {
    const todos = await Occasion.find({}).sort({time: "desc"})

    res.send(todos)
})

router.post('/occasions', async (req, res) => {    
    const occasionDoc = new Occasion({ ...req.body })
    try {
        await occasionDoc.save()
        const todos = await Occasion.find({}).sort({time: "desc"})
        res.send(todos)
    } catch {
        res.sendStatus(500)
    }
})

router.delete('/occasions', async (req, res) => {
    console.log(req.body, "😒😒😒😒😒😒😒😒");
    
    const { _id } = req.body
    try {
        await Occasion.deleteOne({ _id })
        const todos = await Occasion.find({}).sort({time: "desc"})
        res.send(todos)
    } catch {
        res.sendStatus(500)
    }
})

module.exports = router
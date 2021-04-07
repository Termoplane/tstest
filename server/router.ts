const { Router } = require("express")

const Occasion = require("./models/occasion.ts")

const router = Router()

router.get('/occasions', async (req, res) => {
    const todos = await Occasion.find({}).sort({time: "desc"})

    res.send(todos)
})

router.post('/occasions', async (req, res) => {
    console.log(req, "😒😒😒");
    
    const {occasion, time, place, description, important} = req.body

    const occasionDoc = new Occasion({
        occasion,
        time,
        place,
        description,
        important
    })

    await occasionDoc.save()

    res.sendStatus(200)

    console.log(occasionDoc);
})

module.exports = router
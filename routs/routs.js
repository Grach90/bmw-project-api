const { Router } = require('express');
const router = Router();
const Autopart = require('../modules/autopart');
const autopartController = require('../Controllers/autopart.controller');
const resize = require('../helpers/resize');

// router.get('/', (req, res) => {
//     res.json({ a: 1 });
// })

// router.post('/', async(req, res) => {
//     try {
//         const cotegoryData = {
//             name: req.body.name,
//             created_at: new Date()
//         }
//         const cotegory = await Cotegory.create(cotegoryData);
//         res.status(201).json({ cotegory });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({
//             message: 'Server Error'
//         })
//     }
// })

router.get('/', async(req, res) => {
    try {
        const autoparts = await Autopart.find({});
        res.status(200).json({
            autoparts
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Server Error GET'
        })
    }
})

router.post('/add', async(req, res) => {
    try {
        const autopartData = {
            title: req.body.title,
            description: req.body.description,
            created_at: new Date(),
            modified_at: new Date(),
            price: req.body.price,
            amount: req.body.amount,
            cotegory: req.body.cotegory
        }
        const autopart = await Autopart.create(autopartData);
        res.status(201).json({ autopart })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Server Error'
        })
    }
})

router.put('/edit', async(req, res) => {
    try {
        const autopart = await Autopart.findOne({
            _id: req.body.id
        })

        const { title, description, price } = autopart;

        title && (autopart.title = title);
        description && (autopart.description = description);
        price && (autopart.price = price);
        autopart.modified_at = new Date();

        await autopart.save();
        res.status(200).json(JSON.stringify(autopart));
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Server Error'
        })
    }
})

router.delete('/delete', async(req, res) => {
    try {
        await Autopart.findByIdAndDelete({
            _id: req.body.id
        })
        res.json({
            status: "ok"
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Server Error'
        })
    }
})

router.get('/search', async(req, res) => {
    const searchValue = req.query.search;
    const autoparts = await Autopart.find({
        title: searchValue
    })
    res.status(200).json({ autoparts });
})

router.get('/uploads', async(req, res) => {
    const widthString = req.query.width;
    const heightString = req.query.height;
    const format = req.query.format;

    let width, height;

    if (widthString) width = parseInt(widthString);
    if (heightString) height = parseInt(widthString);

    res.type(`image/${format || 'png'}`);

    resize(`/uploads/${req.query.name}`, format, width, height).pipe(res);

    // res.sendFile('/uploads/' + req.query.name);
})

router.get('/cotegory', async(req, res) => {
    const cotegory = req.query.cotegory;
    console.log(cotegory);
    const autoparts = await Autopart.find({
        cotegory
    })

    res.status(200).json({ autoparts });
})

router.get('/autopart/:id', async(req, res) => {
    const singleAutopart = await Autopart.findOne({
        _id: req.params.id
    })
    console.log(singleAutopart);
    res.status(200).json({ singleAutopart });
})

router.post('/addfiles', autopartController.uploadImg, autopartController.newAutopart);

module.exports = router;
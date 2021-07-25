const multer = require('multer');
const Autopart = require('../modules/autopart');


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

const uploadImg = multer({ storage: storage }).array('file', 10);

const newAutopart = async(req, res) => {
    const newAutopart = new Autopart({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        amount: req.body.amount,
        cotegory: req.body.cotegory,
        created_at: new Date(),
        modified_at: new Date(),
        image: req.files.map(file => file.path)
    });

    newAutopart.save((err, data) => {

        if (err) {
            console.log(err);
            return res.json({ Error: err });
        }
        return res.json(data);
    })

}



module.exports = {
    uploadImg,
    newAutopart
}
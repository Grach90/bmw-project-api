const Autoparts = require('../modules/autopart');

module.exports = {
    autoparts() {
        return Autoparts.find({});
    },
    addAutopart(title, description) {
        const autopart = new Autoparts({
            title,
            description
        });
        autopart.save();
    }
}
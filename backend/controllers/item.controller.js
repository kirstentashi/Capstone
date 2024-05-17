const Item = require('../models/item.schema');

exports.getItems = async (req, res) => {
    try {
        const items = await Item.find().sort({ createdAt: -1 });
        res.render('dashboard/items', { items });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });

    }
}

exports.getItem = async (req, res) => {
    const { id } = req.params;

    const item = await Item.findById(id);
    res.status(201).render('dashboard/items/:id', { item });

}

exports.create = async (req, res) => {
    try {

        const {
            name,
            stock,
            price,
            vat,
            available,
            featured,
            bestseller,
            desc,
            goodFor,
            image,
        } = req.body;

        const fields = {
            name,
            stock,
            price,
            goodFor,
        };
        for (const key in fields) {
            if (!fields[key]) {
                return res.status(400).json({ type: 'error', message: 'Please fill up the required fields in the reservation form.' });
            }
        }

        let img = { url: 'https://res.cloudinary.com/dbibml6gk/image/upload/v1708322360/TFC%20Assets/cvuo5ncqidssqlp9ngle.png', filename: 'default.jpg' }

        if (req.file) {
            // If an image is uploaded, use the uploaded image
            img = { url: req.file.path, filename: req.file.filename };
        };

        const item = new Item({
            name,
            stock,
            price,
            vat,
            available,
            featured,
            bestseller,
            desc,
            goodFor,
            image: img,
        });

        await item.save();
        res.status(201).json({ message: 'Item added successfully.', item });
        console.log(item)
    } catch (error) {
        res.status(500).json({ message: 'Internal server error.' });
        console.log(error)
    }
}
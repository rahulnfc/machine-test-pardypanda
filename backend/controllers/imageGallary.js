const axios = require('axios');
const { ImageGallary } = require('../models');

module.exports = {
    getImageGallary: async (req, res) => {
        try {
            await axios.get('https://picsum.photos/v2/list').then(async (response) => {
                const datas = response.data;
                await datas.map(async (data) => {
                    // check if id exist in database
                    const image = await ImageGallary.findOne({ id: data.id });
                    if (!image) {
                        // if not exist then insert
                        const imageGallary = await ImageGallary({ ...data })
                        await imageGallary.save()
                    }
                })
            })
            await ImageGallary.find().then(async (imageGallary) => {
                await res.status(200).json({ imageGallary });
            })
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
}
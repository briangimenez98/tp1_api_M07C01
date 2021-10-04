const db = require('../../database/models');
const sequelize = db.sequelize;


const genresController = {
    list: async (req, res) => {
        try {
            const genres = await db.Genre.findAll()
                return res.status(200).json({
                    total: genres.length,
                    data: genres,
                    status: 200,
                    msg: "Todo OK"
            })
        } catch (error) {
            return res.status(error.status || 500).json({
                status: error.status || 500,
                message: error.message
            })
        }
    },
    detail: (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                return res.status(200).json({
                    total: genre.length,
                    data: genre,
                    status: 200,
                    msg: "Todo OK"
                })
            })
            .catch(error => {
                return res.status(error.status || 500).json({
                    status: error.status || 500,
                    message: error.message
                })
            })
    }
}

module.exports = genresController;
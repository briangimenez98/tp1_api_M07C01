const db = require('../../database/models');
const sequelize = db.sequelize;

const moviesController = {
    create: (req,res) => {
        db.Movie.create(req.body)
        .then(movie => {
            return res.status(200).json({
                status: 200,
                created: "Película creada exitósamente",
                data: movie
            })
        })
        .catch(error => {
            return res.status(error.status || 500).json({
                status: error.status || 500,
                message: error.message
            })
        })
    },
    delete: (req,res) => {

        let movieId = req.params.id;

        db.Movie.destroy({
            where: {id:movieId},
            force: true
        })
        .then( () => {
            db.Movie.findAll()
            .then(movies => {
                return res.status(200).json({
                    total: movies.length,
                    data: movies,
                    status: 200,
                    msg: "Película eliminada exitósamente"
                })
            })
            .catch(error => {
                console.log(error);
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
}

module.exports = moviesController;
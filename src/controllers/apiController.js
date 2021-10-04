const db = require("../database/models");
const Op = db.sequelize.Op;

module.exports = {
    list: (req,res) => {
        try {
            db.Movie
                .findAll()
                .then(movies => {
                    return res.status(200).json({
                        total: movies.length,
                        data:movies,
                        status: 200,
                        msg: "Okey polilla"
                    })
                })
        } catch (error) {
            
        }
    },
    show: (req,res) => {
        db.Movie
        .findByPk(req.params.id)
        .then(movie => {
            return res.status(200).json({
                data:movie,
                status: 200
            })
        })
        .catch(errors => {
            console.log(errors);
        })
    },
    store: (req,res) => {
        return res.json(req.body)
        /* db.Movie
        .create(req.body)
        .then(movie => {
            return res.status(200).json({
                data:movie,
                status: 200
            })
        })
        .catch(errors => {
            console.log(errors);
        }) */
    },
}
const flight = require('../model/flight');



module.exports.index = (req, res, next) => {
    flight.findAll().then(flights => {
        res.render('flight-index', {
            data: flights
        });
    })
}

module.exports.create = (req, res, next) => {
    res.render('flight-create');
}

module.exports.createPost = (req, res, next) => {
    flight.create({
            fname: req.body.fname,
            fnumber: req.body.fnumber,
            ftype: req.body.ftype,
            fcapacity: req.body.fcapacity
        })
        .then(user => {
            res.redirect("/flight");
        })
}

module.exports.update = (req, res, next) => {
    flight.findByPk(req.params.id)
        .then(user => {
            res.render('flight-update', {
                data: user
            })
        });
}

// module.exports.updatePost = (req, res, next) => {
//     movie.findByPk(req.params.id)
//         .then(user => {
//             movie.update({
//                     name: req.body.name,
//                     releaseDate: req.body.releasedate,
//                     summary: req.body.summary,
//                     director: req.body.director
//                 }, {
//                     where: {
//                         id: req.params.id
//                     }
//                 })
//                 .then(count => {
//                     res.redirect('/');
//                 });
//         });
// }
module.exports.updatePost = async (req, res, next) => {
    var user = await flight.findByPk(req.params.fid);
    await flight.update(
        {
            fname: req.body.fname,
            fnumber: req.body.fnumber,
            ftype: req.body.ftype,
            fcapacity: req.body.fcapacity,
        },
        {
            where: {fid: req.params.id}
        }
    )
    res.redirect('/flight');
}

module.exports.delete = async (req, res, next) => {
    let id = req.params.id;
    let user = await flight.findByPk(id);
    if (user) {
        await flight.destroy({
            where: {
                fid: id
            }
        });
        res.redirect("/flight");
    }
}
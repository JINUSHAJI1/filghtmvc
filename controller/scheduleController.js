const schedule = require('../model/schedule');

module.exports.home = (req, res, next) => {
    res.render('index');
}


module.exports.index = (req, res, next) => {
    schedule.findAll().then(schedules => {
        console.log(schedules);
        res.render('schedule-index', {
            data: schedules
        });
    })
}

module.exports.create = (req, res, next) => {
    res.render('schedule-create');
}

module.exports.createPost = (req, res, next) => {
    schedule.create({
            sid: req.body.sid,
            // model_id: req.body.fnumber,
            fnumber: req.body.fnumber,
            source: req.body.source,
            destination: req.body.destination,
            date: req.body.date,
            time:req.body.time
        })
        .then(user => {
            res.redirect("/schedule");
        })
}

module.exports.update = (req, res, next) => {
    schedule.findByPk(req.params.id)
        .then(user => {
            res.render('schedule-update', {
                data: user
            })
        });
}

module.exports.updatePost = async (req, res, next) => {
    var user = await schedule.findByPk(req.params.sid);
    await schedule.update(
        {
            sid: req.body.sid,
            fnumber: req.body.fnumber,
            source: req.body.source,
            destination: req.body.destination,
            date: req.body.date,
            time:req.body.time
        },
        {
            where: {sid: req.params.id}
        }
    )
    res.redirect('/schedule');
}

module.exports.delete = async (req, res, next) => {
    let id = req.params.id;
    let user = await schedule.findByPk(id);
    if (user) {
        await schedule.destroy({
            where: {
                sid: id
            }
        });
        res.redirect("/schedule");
    }
}
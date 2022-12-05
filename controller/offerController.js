const User = require('../model/user');

module.exports.index = (req, res, next) => {
    User.findAll().then(offers => {
        res.render('user-home', {
            data: offers,
            identity: req.identity.user
        });
    })
}


module.exports.update = (req, res, next) => {
     User.findByPk(req.params.id)
        .then(users => {
            res.render('userprofile', {
                data: users
            })
        });
}


module.exports.updatePost = async (req, res, next) => {
    var users = await User.findByPk(req.params.id);
    await User.update(
        {
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            address: req.body.address,
            dob: req.body.dob,
            gender: req.body.gender,
            password: req.body.password
        },
        {
            where: {id: req.params.id}
        }
    )
    res.redirect('/userhome');
}




const User = require('../model/user');

module.exports.login = (req, res, next)=>{
    res.render('login');
}
module.exports.home = (req, res, next) => {
    res.render('index');
}
module.exports.loginPost = async (req, res, next)=>{
    const {email, password} = req.body;
    const userFromDb = await User.findOne({
        where: {email: email, password: password}
    });
    
    if(userFromDb == null){
        return res.render('login', {message: 'No user with this email or password was found.'})
    }

    req.session.userId = userFromDb.id;
    res.redirect('/userhome');
}

module.exports.register = (req, res, next)=>{
    res.render('register');
}

module.exports.registerPost = async (req, res, next)=>{
    const {name, email, password } = req.body;
    let existingUser = await User.findOne({
        where: {
            email: email
        }
    });

    if(existingUser){
        return res.render('register', {message: 'Already registered.'});
    }

    await User.create({
        name: name,
        email: email,
        password: password
    });

    res.redirect('/login');
}





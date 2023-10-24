const User = require('../models/User') //เชื่อม database user

module.exports = async (req, res) =>{
    
    let UserData = await User.findById(req.session.userId)
    res.render('home',{UserData})
}

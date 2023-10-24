const bcrypt = require('bcrypt')

const User = require('../models/User');

module.exports = (req, res) =>{
    const {email, password, username} = req.body

    User.updateOne({email: email},{$set: {username: username}}).then((user)=>{
        console.log("update success")
    })
    
    console.log(username)
    
    res.redirect('/home')
    }

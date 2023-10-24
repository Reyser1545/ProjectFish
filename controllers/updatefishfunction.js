const bcrypt = require('bcrypt')

const User = require('../models/Fish');

module.exports = (req, res) =>{
    const {Name,Description,ImageUrl} = req.body

    User.updateOne({Name: Name},{$set: {Description: Description,ImageUrl: ImageUrl}}).then((user)=>{
        console.log("update Fish success")
    })
    
    res.redirect('/searchfishname')
    }

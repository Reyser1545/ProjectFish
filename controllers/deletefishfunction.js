const bcrypt = require('bcrypt')

const fish = require('../models/Fish');

module.exports = (req, res) =>{
    const {Name} = req.body
    fish.deleteOne({Name: Name}).then((fish)=>{
        console.log(req.body)
        return res.redirect('/searchfishname')
    })
    
}


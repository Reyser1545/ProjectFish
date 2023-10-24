const Fish = require('../models/Fish')
module.exports = (req, res) => {
    Fish.create(req.body).then(()=>{
        console.log("Fish registered successfully!")
        res.redirect('/searchfishname')
    }).catch((error) => {
        //console.log(error.errors)
        if(error){
            const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
            req.flash('validationErrors',validationErrors)
            req.flash('data',req.body)
            return res.redirect('/addfish')
        }
    })
}
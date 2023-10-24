const bcrypt = require('bcrypt');
const Fish = require('../models/Fish');

module.exports = (req, res) => {
    const {Name} = req.body
    console.log(Name)
    Fish.findOne({Name:Name}).then((FishData)=>{
        if(FishData){
            req.session.fishid = FishData._Id
            console.log(FishData._id)

            res.render('searchfish',{
                FishData
                
            })  
        }
        else{
            res.render('searchfishname',{
                FishData
            })
        }
    })
}

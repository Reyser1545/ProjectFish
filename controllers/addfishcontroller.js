module.exports = (req, res) => {
    let Name = ""
    let Description = ""
    let ImageUrl = ""

    let data = req.flash('data')[0]

    if(typeof data != "undefined") {
        Name = data.Name
        Description = data.Description
        ImageUrl = data.ImageUrl

    }
    res.render('addfish',{
        errors: req.flash('validationErrors'),
        Name: Name,
        Description: Description,
        ImageUrl: ImageUrl

    })

}
const Myimage = require('../models/category.model')

exports.createCategory = (req, res) => {
    let FileName = req.body.file_name
    let image = req.file.filename
    let myText = req.body.mytext
    console.log(FileName, image, myText)
    console.log("files",req.file)
    
    const category = new Myimage({
        file_name: FileName,
        image: image,
        myText
    })
    category.save((err, category) => {
        if (err) {
            console.log(err)
            return res.status(400).json({
                errors: err.meesage
            })
        }
        return res.json({
            message: "Created category successfully",
            category
        })
    })

}
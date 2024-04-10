const multer = require("multer");
const appRoot = require('app-root-path')
const path = require('path')

const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, appRoot + '/src/public/image/')
    },
    filename: function (req,file,cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const imageFilter = function(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!'
        return cb(new Error('Only image files are allowed!'), false)
    }
    cb(null, true);
}

let upload = multer({storage:storage, fileFilter:imageFilter})
let uploadMultiple = multer({storage:storage, fileFilter:imageFilter}).array('multiple-profile-pic',3)
const errLimitFile = function (req ,res, next)  {
        uploadMultiple(req, res, (err) => {
            if (req.fileValidationError) {
                return res.send(req.fileValidationError)
            }
            else if (err instanceof multer.MulterError && err.code === "LIMIT_UNEXPECTED_FILE") {
                // handle multer file limit error here
                res.send('LIMIT_UNEXPECTED_FILE')
            } else if (err) {
                res.send(err)
            }
            else {
                next();
            }
        })
}

module.exports ={
    upload,
    uploadMultiple,
    errLimitFile
}
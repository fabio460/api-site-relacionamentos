require('dotenv').config()
var aws = require('aws-sdk')
var multer = require('multer')
var multerS3 = require('multer-s3')
const crypto = require('crypto')
aws.config.update({
    accessKeyId:'AKIA2QECU5ZFBMIBO3WY',
    secretAccessKey:'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',
    region:'us-east-1'
})
var upload = multer({
  storage: multerS3({
    s3: new aws.S3(),
    bucket: 'imagensperfi',
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
        crypto.randomBytes(16,(err,hash)=>{
            const fileName = `${hash.toString('hex')}${file.originalname}`
            cb(null,fileName)
        })
    }
  })
})

module.exports = upload
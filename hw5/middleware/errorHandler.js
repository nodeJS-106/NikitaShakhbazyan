const {constants} = require('../constants')

const errorHandler = (err,req,res,next) => {
    const status = res.status ? res.status : 500;

    switch (status) {
        case constants.VALIDATION_ERROR:
            res.json({title : "validatin err",
            message : err.message,
            stackTrace : err.stack
        })
            break;
        case constants.NOT_FOUND:
            res.json({title : "Not found error",
            message : err.message,
            stackTrace : err.stack
            })
            break;
        case constants.SERVER_ERROR :
            res.json({title : "Server error",
            message : err.message,
            stackTrace : err.stack
            })
            break;
        case constants.FORBIDDEN : 
            res.json({title : "Forbidden",
            message : err.message,
            stackTrace : err.stack
            })
            break
        default:
            console.log('There is no errors !!')
            break;
    }
}

module.exports = errorHandler
const notFound = (req, res, next) =>{
    console.log("not found middleware");
    const error = new Error(`Not Found - ${req.originalUrl}`)
    console.log(error);
    res.status(404);
    next(error);
}
//
const errorHandler = (err, req, res, next)=>{
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message:err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

export {notFound, errorHandler}
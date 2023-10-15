function notFound(request, response, next) {
    response.status(404);
    const error = new Error('Not Found', request.originalUrl);
    next(error);
}


function errorHandler(err, req, res, next){
    res.status(res.statusCode || 500);
    res.json({
        message: err.message,
        stack: err.stack
    });
}

module.exports = {
    notFound,
    errorHandler
}
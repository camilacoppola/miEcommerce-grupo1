function notImplementedMiddleware(req, res, next){
    res.send("Not implemented");
}

module.exports = notImplementedMiddleware;

const authorize = function (res, req, next) {
    console.log("authorized");
    next()
}

module.exports = authorize
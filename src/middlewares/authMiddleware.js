const jwt = require("../lib/jwt")
const {SECRET} = require("../config/config")

exports.auth = async (req, res, next) => { // check if valid logged user. if there's a token, he's logged. if not, we call next

    const token = req.cookies['username']


    if(token) {
        //validate token
        try{
            const user = await jwt.verify(token, SECRET);
            req.user = user;
            next()
        } catch (err){
            res.clearCookie("username");
            res.redirect("/users/login");
        }
        
    } else {
        next()
    }
    
}
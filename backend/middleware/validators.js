module.exports = {
    validateRegister: (req, res, next) => {
        const {username, password} = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "Username, password are required", error: true });
        }

        if (username.length < 4 || username.length > 20) {
            return res.send({message: "username min 4, max 20 length", error: true});
        }
        if (password.length < 3 || password.length > 20) {
            return res.send({message: "password min 3, max 20", error: true});
        }
        // if (!validator.validate(email)) return res.send({message: "incorrect email", error: true});
        // console.log("Naujas vartotojas pridėtas");
        next();
    },
    validateLogin: (req, res, next) => {
        const {username, password} = req.body;
        if (!username || !password) {
            return res.status(400).json({message: "Both username and password are required", error: true, success:false});
        }
        if (username.length < 4 || username.length > 20) {
            return res.send({message: "username min 4, max 20 length", error: true, success:false});
        }
        if (password.length < 3 || password.length > 20) {
            return res.send({message: "password min 3, max 20", error: true, success:false});
        }
        // console.log("login");
        next();
    },
};
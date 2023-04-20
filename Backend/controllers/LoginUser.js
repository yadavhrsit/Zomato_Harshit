const UserModal = require("../modals/UserSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function LoginUser(req, res) {
    let email = req.body.email;
    let password = req.body.password;

    if (!email) {
        return res.json({ error: "Enter an Email" })
    }
    else {
        try {
            const data = await UserModal.findOne({ email });
            bcrypt.compare(password, data.password, function (err, result) {
                if (result) {
                    let accesstoken = jwt.sign({ email }, process.env.JWT_ACCESS_TOKEN, { expiresIn: "120m" })
                    res.cookie("User", email
                        , {
                            maxAge: 10000,
                            secure: false,
                            httpOnly: true,
                            sameSite: 'lax'

                        }
                    );
                    res.cookie("token", accesstoken
                        , {
                            maxAge: 10000,
                            secure: false,
                            httpOnly: true,
                            sameSite: 'lax'
                        }
                    );
                    return res.json({
                        message: "Logged in successfully",
                        login: true,
                        token: accesstoken
                    });
                }
                else {
                    return res.json({
                        message: "Incorrect Password"
                    })
                }
            });
        }
        catch (error) {
            res.send("Not a Registered Email");
        }
    }
}

module.exports = LoginUser;
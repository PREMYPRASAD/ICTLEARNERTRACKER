const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const userInfo = require('../models/user')

//read user list 
exports.getAllUser = async(req, res) => {
    try {
        const list = await userInfo.find();
        res.send(list);
    } catch (error) {
        console.log(error);
    }
}

// read single user detail
exports.getOneUser = async(req, res) => {
    try {
        let id = req.params.id;
        let user = await userInfo.findById(id);
        res.send(user);
    } catch (error) {
        console.log(error);
    }
}

// add new user
exports.addUser = async(req, res) => {
    try {
        // store the front end entered details in server variable
        console.log(req.body);
        bcrypt.hash(req.body.password, 10).then((hash) => {
            // store hash in the database
            let usernew = {
                user_name: req.body.user_name,
                email_id: req.body.email_id,
                password: hash,
                user_type: req.body.user_type,
                contact_number: req.body.contact_number,
                office_location: req.body.office_location,
                course: req.body.course
            }

            let user = new userInfo(usernew);
            let saveUser = user.save();
            res.send(saveUser);
        })
    } catch (error) {
        console.log(error);
    }
}

// update user detail
exports.updateUser = async(req, res) => {
    try {
        let id = req.body._id;
        let user = {
            user_name: req.body.data.user_name,
            email_id: req.body.data.email_id,
            password: req.body.data.password,
            user_type: req.body.data.user_type,
            contact_number: req.body.data.contact_number,
            office_location: req.body.data.office_location,
            course: req.body.course
        }
        let updateInfo = await userInfo.findByIdAndUpdate({ '_id': id }, { $set: user });
        res.send(updateInfo)
    } catch (error) {
        console.log(error);
    }
}

// delete user detail
exports.deleteUser = async(req, res) => {
    try {
        let id = req.params.id;
        let deleteUser = await userInfo.deleteOne({ '_id': id });
        res.send(deleteUser);
    } catch (error) {
        console.log(error);
    }
}


// Login Api
// exports.login = (req, res) => {
//     let userData = req.body;
//     var flag = false;
//     var usertype = "";
//     var username = "";

//     userInfo.find().then(function(user) {
//         for (let i = 0; i < user.length; i++) {
//             if (userData.email_id == user[i].email_id && userData.password == user[i].password) {
//                 console.log("found user", user[i].email_id);
//                 usertype = user[i].user_type;
//                 username = user[i].user_name;
//                 flag = true;
//                 break;
//             } else {
//                 flag = false;
//             }
//         }
//         if (flag == true) {
//             let payload = { subject: userData.email + userData.password }
//             let token = jwt.sign(payload, "secretKey");
//             res.status(200).send({ token, username, userrole });
//         } else {
//             res.status(401).send("invalid credentials")
//         }

//     });


// };




// This will be the login function after frontend is ready 
// exports.login = (req, res) => {
//     var flag = false;

//     userInfo.findOne({ "email_id": req.body.email_id }).then((user) => {
//         if (!user) {
//             return res.status(401).send("User not found");
//         }
//         bcrypt.compare(req.body.password, user.password).then((valid) => {
//             if (!valid) {
//                 return res.status(401).send("Invalid password");
//             }
//             let payload = { subject: userData.email_id + userData.password }
//             let token = jwt.sign(payload, "secretKey");
//             var usertype = user.type;
//             var username = user.name;
//             res.status(200).send({ token, username, usertype });
//         })
//     })
// };
exports.login = async(req, res) => {
    try {
        let user = await userInfo.findOne({
            email: req.body.email_id,
            password: req.body.password
        })
        if (!user) {
            return res.json({ message: "Invalid Credentials" });


        }
        res.send(user)
    } catch (error) {
        console.log(error)
    }
}
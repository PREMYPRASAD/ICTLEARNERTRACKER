const express = require('express');
const router = express.Router();

//csv upload required packages and declaration starts
var multer = require('multer');
var csv = require('csvtojson');

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
let uploads = multer({ storage: storage });
const studentInfo = require('../models/student');
// csv upload specific code ends

const studentCntrlr = require('../controllers/student')

//read student list 
router.get('/studentlist', studentCntrlr.getAllStudents)

// read single studentInfo detail
router.get('/student/:id', studentCntrlr.getOneStudent)

// add new student
router.post('/student', studentCntrlr.addstudent)

// update student detail
router.put('/student', studentCntrlr.updatestudent)

// delete studenrt detail
router.delete('/student/:id', studentCntrlr.deletestudent)

// upload csv students
router.post('/uploadstudents', uploads.single('csv'), (req, res) => {
    csv()
        .fromFile(req.file.path)
        .then((jsonObj) => {

            var students = [];
            for (var i = 0; i < jsonObj.length; i++) {
                var obj = {};
                obj.student_id = jsonObj[i]['student_id'];
                obj.student_name = jsonObj[i]['student_name'];
                obj.contact_number = jsonObj[i]['contact_number'];
                obj.course = jsonObj[i]['Course'];
                obj.email_id = jsonObj[i]['email_id'];
                obj.contact_address = jsonObj[i]['contact_address'];
                obj.program = jsonObj[i]['program'];
                obj.batch = jsonObj[i]['batch'];
                obj.training_head = jsonObj[i]['training_head'];
                obj.placement_officer = jsonObj[i]['placement_officer'];
                obj.employment_status = jsonObj[i]['employment_status'];
                obj.course_status = jsonObj[i]['course_status'];
                students.push(obj);
            }

            studentInfo.insertMany(students, (err, data) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send(data);
                }
            });
        }).catch((error) => {
            console.log(error);
        })
});

module.exports = router;
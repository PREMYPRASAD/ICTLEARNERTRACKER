const express = require('express');
const router = express.Router();

//csv upload required packages -- multer + fast-csv and streamifier - not saving file to folder
const csvupload = require('@fast-csv/parse');
const streamifier = require('streamifier');
const parseCsv = multer().single('csv'); // uses file input name
//end multer + fast-csv and streamifier

//csv upload required packages and declaration starts -- multer + csvtojson
const csv = require('csvtojson');
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}‐${file.originalname}`);
    }
});
let uploads = multer({ storage: storage });
// csv upload specific code ends
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
//upload csv learners by reading line by line from file first and then save to db
router.post("/upload", parseCsv, (req, res) => {
    const { buffer } = req.file;
    const dataFromCSV = [];

    streamifier
        .createReadStream(buffer)
        .pipe(csvupload.parse({ headers: true, ignoreEmpty: true })) // <== this is @fast-csv/parse!!
        .on("data", (row) => {
            var obj = {};
            //obj.student_id = ['student_id'];
            obj.student_name = row['student_name'];
            obj.contact_number = row['contact_number'];
            obj.course = row['Course'];
            obj.email_id = row['email_id'];
            obj.contact_address = row['contact_address'];
            obj.program = row['program'];
            obj.batch = row['batch'];
            obj.training_head = row['training_head'];
            obj.placement_officer = row['placement_officer'];
            obj.employment_status = row['employment_status'];
            obj.course_status = row['course_status'];
            dataFromCSV.push(obj);
        })
        .on("end", async(rowCount) => {
            try {
                studentInfo.insertMany(dataFromCSV, (err, data) => {
                    if (err) {
                        res.status(401).send("Duplicate entry error");
                    } else {
                        res.status(200).send({ data });
                    }
                });
            } catch (error) {
                console.log(error);
            }
        });
});


module.exports = router;
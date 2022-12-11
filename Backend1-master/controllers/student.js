const studentInfo = require('../models/student');

//read student list 
exports.getAllStudents = async(req, res) => {
    try {
        const list = await studentInfo.find();
        res.send(list);
    } catch (error) {
        console.log(error);
    }
}

// read single studentInfo detail
exports.getOneStudent = async(req, res) => {
    try {
        let id = req.params.id;
        let student = await studentInfo.findById({ '_id': id });
        res.send(student);
    } catch (error) {
        console.log(error);
    }
}

// add new student
exports.addstudent = async(req, res) => {
    try {
        // store the front end entered details in server variable
        console.log(req.body);
        let studentnew = {

            //student_id: req.body.student_id,
            student_name: req.body.student_name,
            contact_number: req.body.contact_number,
            email_id: req.body.email_id,
            contact_address: req.body.contact_address,
            course: req.body.course,
            batch: req.body.batch,
            program: req.body.program,
            training_head: req.body.training_head,
            placement_officer: req.body.placement_officer,
            employment_status: req.body.employment_status,
            course_status: req.body.course_status,
            date: req.body.date


        }

        let student = new studentInfo(studentnew);
        let savestudent = student.save();
        res.send(savestudent);
    } catch (error) {
        console.log(error);
    }
}

// update student detail
exports.updatestudent = async(req, res) => {
    try {
        let id = req.body._id;
        let student = {
            //student_id: req.body.student_id,
            student_name: req.body.data.student_name,
            contact_number: req.body.data.contact_number,
            email_id: req.body.data.email_id,
            contact_address: req.body.data.contact_address,
            course: req.body.data.course,
            batch: req.body.data.batch,
            program: req.body.data.program,
            training_head: req.body.data.training_head,
            placement_officer: req.body.data.placement_officer,
            employment_status: req.body.data.employment_status,
            course_status: req.body.data.course_status
        }
        let updatestudent = { $set: student };
        let updateInfo = await studentInfo.findByIdAndUpdate({ '_id': id }, updatestudent);
        res.send(updateInfo)
    } catch (error) {
        console.log(error);
    }
}

// delete student detail
exports.deletestudent = async(req, res) => {
    try {
        let id = req.params.id;
        let deletestudent = await studentInfo.deleteOne({ '_id': id });
        res.send(deletestudent);
    } catch (error) {
        console.log(error);
    }
}
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const studentschema = new schema({
    // student_id: { type: String, requied: true },
    student_name: { type: String, requied: true },
    contact_number: { type: String, requied: true },
    email_id: { type: String, requied: true },
    contact_address: { type: String, requied: true },
    course: { type: String, requied: true },
    batch: { type: String, requied: true },
    program: { type: String, requied: true },
    training_head: { type: String, requied: true },
    placement_officer: { type: String, requied: true },
    employment_status: { type: String, requied: true, default: "Not Employeed" },
    course_status: { type: String, requied: true, default: "enrolled" },
    date: { type: Date, default: Date.now() }

});
let studentInfo = mongoose.model("studentData", studentschema);
module.exports = studentInfo;
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const coursesschema = new schema({

    course_name: { type: String, requied: true },
    course_description: { type: String, requied: true },

    date: { type: Date, default: Date.now() }

});
let courseData = mongoose.model("courseData", coursesschema);
module.exports = courseData;
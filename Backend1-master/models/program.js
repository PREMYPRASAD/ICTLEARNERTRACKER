const mongoose = require("mongoose");
const schema = mongoose.Schema;

const programsschema = new schema({

    course_name: { type: String, requied: true },
    course_description: { type: String, requied: true },

    date: { type: Date, default: Date.now() }

});
let programData = mongoose.model("programData", programsschema);
module.exports = programData;
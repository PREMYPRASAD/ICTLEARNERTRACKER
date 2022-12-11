const mongoose = require("mongoose");
const schema = mongoose.Schema;

const batchschema = new schema({

    batch_name: { type: String, requied: true },
    batch_description: { type: String, requied: true },

    date: { type: Date, default: Date.now() }

});
let batchData = mongoose.model("batchData", batchschema);
module.exports = batchData;
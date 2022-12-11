const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    user_name: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true
    },
    user_type: {
        type: String,
        required: true
    },

    email_id: {
        type: String,
        required: true,
        unique: true
    },
    contact_number: {
        type: Number,
        required: true
    },
    office_location: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    }

})
userSchema.plugin(uniqueValidator);
const userData = mongoose.model('user', userSchema);
module.exports = userData;
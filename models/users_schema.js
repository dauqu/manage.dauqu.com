const mongoose = require("mongoose");

//Schema
const UsersSchema = new mongoose.Schema({
    full_name: {
        type: String,
    },
    dp: {
        type: String,
        required: true,
    },
    license: {
        type: String,
    },
    plan: {
        type: String,
    },
    purchase_date: {
        type: String,
    },
    title: {
        type: String,
    },
    about: {
        type: String,
    },
    phone: {
        type: String,
    },
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    language: {
        type: String,
    },
    country: {
        type: String,
    },
    password: {
        type: String,
    },
    rpt: { //Reset password token
        type: String,
    },
    otp: { //One time password 
        type: String,
    },
}, { timestamps: true });

module.exports = mongoose.model("users", UsersSchema);
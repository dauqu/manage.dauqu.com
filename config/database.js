require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.DATABASE).then(() => {
        console.log('Database connected');
    }).catch((err) => {
        console.log("Database connection error: ");
    });
};

module.exports = connectDB;
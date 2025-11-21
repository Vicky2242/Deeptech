const mongoose = require('mongoose');

const userSchema = new mongoose.schema({
    name: String,
    email: String,
    age: Number,
})

module.exports = mongoose.model('User', userSchema);
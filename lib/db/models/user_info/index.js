const mongoose = require('mongoose');


var UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },

    location: {
        location: {
            type: String,
        },

        date: {
            type: Date,
            default: Date.now()
        }
    }
    
});


module.exports = mongoose.model('user', UserSchema);
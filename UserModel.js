const { Schema, model } = require('mongoose')

const userShcheme = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },

    phone: {
        type: Number,
        required: true,
    },

    inn: {
        type: Number,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    age: {
        type: Date,
        required: true,
    },
    sex: {
        type: String,
        required: true,
    },
     
    testResults: {
        demonstrative: {
            type: Number,
            required: true
        },
        stuck: {
            type: Number,
            required: true
        },
        pedantic: {
            type: Number,
            required: true
        },
        unbalanced: {
            type: Number,
            required: true
        },
        hyperthymic: {
            type: Number,
            required: true
        },
        dysthymic: {
            type: Number,
            required: true
        },
        anxious: {
            type: Number,
            required: true
        },
        cyclothymic: {
            type: Number,
            required: true
        },
        effective: {
            type: Number,
            required: true
        },
        emotive: {
            type: Number,
            required: true
        },
    }
})



module.exports = model("User", userShcheme)
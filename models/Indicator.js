const mongoose = require('mongoose')

const indicatorSchema = mongoose.Schema({
    pulse: {
        type: Number,
        required: true
    },
    temperatire: {
        type: Number,
        required: true
    },
    ekg: {
        type: String,
        default: 'Loading'
    },
    statistic: {
        type: String,
        default: 'Loading'
    },
    userId: {
        ref: 'User',
        type: mongoose.Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('Indicator', indicatorSchema)
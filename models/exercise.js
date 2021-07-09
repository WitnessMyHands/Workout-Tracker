const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema (
    {
        type: {
            type: String,
            trim: true,
            required: 'Input Type of Exercise'
        },
        name: {
            type: String,
            trim: true,
            required: 'Input Name of Exercise'
        },
        duration: {
            type: Number,
            required: 'Input Duration of Exercise in Minutes'
        },
        distance: {
            type: Number,
        },
        weight: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        reps: {
            type: Number,
        },
    },
);

const exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = exercise;
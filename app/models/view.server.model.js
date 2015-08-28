'use strict';

var mongoose = require('moongose'),
    Schema = mongoose.Schema;

var ViewSchema = new Schema({
    displayName: {
        type: String,
        required: true
    },
    templateURL: {
        type: String,
        require: true
    },
    visibility: {
        type: String,
        require: true
    }
});

ViewSchema.set('toJSON',{
    getters: true,
    virtuals: true
});

mongoose.model('View', ViewSchema);
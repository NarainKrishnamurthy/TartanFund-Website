'use strict';

var mongoose = require('moongose'),
    Schema = mongoose.Schema;

var MenuItemSchema = new Schema({
    displayName: {
        type: String,
        required: true
    },
    templateURL: {
        type: String
    },
    visibility: {
        type: [String],
        require: true
    }
});

MenuItemSchema.add({
    subitems: [MenuItemSchema]
});

MenuItemSchema.set('toJSON',{
    getters: true,
    virtuals: true
});

mongoose.model('MenuItem', MenuItemSchema);
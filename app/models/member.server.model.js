'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MemberSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    graduationYear: {
        type: Number,
        required: true
    },
    profilePicURL: {
        type: String,
        default: '/img/defaultProfilePic.png'
    },
    email: {
        type: String,
        match: /.+\@.+\..+/
    },
    resumeURL: String,
    fullTime: String,
    internship: String
});

MemberSchema.set('toJSON', {
    getters: true,
    virtuals: true
});

mongoose.model('Member', MemberSchema);

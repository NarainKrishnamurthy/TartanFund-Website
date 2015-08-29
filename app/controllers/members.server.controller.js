'use strict';

var mongoose = require('mongoose');
var Member = mongoose.model('Member');

exports.create = function(req, res, next){
    var member = new Member(req.body);
    member.save(function (err){
        if (err) {
            return next(err);
        } else {
            res.json(member);
        }
    });
};

exports.list = function(req, res, next){
    Member.find({}, function(err, members){
        if (err){
            return next(err);
        } else {
            res.json(members);
        }
    })
};

exports.read = function(req, res){
    res.json(req.member);
};

exports.update = function(req, res, next) {r
    Member.findByIdAndUpdate(req.member.id, req.body, function(err, member) {
        if (err) {
            return next(err);
        } else {
            res.json(member);
        }
    })
};

exports.delete = function(req, res, next){
    req.member.remove(function (err){
        if (err){
            return next(err);
        } else {
            res.json(req.member);
        }
    });
};

exports.memberByID = function(req, res, next, id){
    Member.findOne({
        _id: id
    }, function(err, member){
        if (err){
            return next(err);
        } else {
            req.member = member;
            next();
        }
    });
};


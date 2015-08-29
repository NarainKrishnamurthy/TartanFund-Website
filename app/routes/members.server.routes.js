'use strict';

var members = require('../../app/controllers/members.server.controller');

module.exports = function(app){

    app.route('/members')
        .post(members.create)
        .get(members.list);

    app.route('/members/:memberId')
        .get(members.read)
        .put(members.update)
        .delete(members.delete);

    app.param('memberId', members.memberByID);
}

'use strict';

var members = require('../../app/controllers/members.server.controller'),
    config = require('../../config/config');

module.exports = function(app){
    if (process.env.NODE_ENV === "development"){ 
        app.route('/members')
            .post(members.create)
            .get(members.list);

        app.route('/members/:memberId')
            .get(members.read)
            .put(members.update)
            .delete(members.delete);
        
        app.param('memberId', members.memberByID);    
    } else if (process.env.NODE_ENV === 'production') {
        app.route('/members')
            .get(members.list);
    }
}

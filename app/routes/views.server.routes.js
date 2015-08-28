'use strict';

var views = require('../../app/controllers/views.server.controller');

module.exports = function(app){

    app.route('/views')
        .get(views.list);
        
    app.route('/views/:visibility')
        .get(views.listVisibile);

    app.param('visibility', users.viewsByVisibility);

};	

'use strict';

var menuItems = require('../../app/controllers/menuItems.server.controller');

module.exports = function(app){

    app.route('/menuItems')
        .get(menuItems.list);
        
    app.route('/menuItems/:visibility')
        .get(menuItems.listVisibile);

    app.param('visibility', users.menuItemsByVisibility);

};	


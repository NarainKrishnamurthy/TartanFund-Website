'use strict';

var menuItems = require('../../app/controllers/menuItems.server.controller');

module.exports = function(app){

    app.route('/menuItems')
    		.post(menuItems.create)
        .get(menuItems.list);
        
    app.route('/menuItems/:visibility')
        .get(menuItems.listVisible);

    app.param('visibility', menuItems.menuItemsByVisibility);

};	


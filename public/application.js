var tartanFundApp = angular.module('tartanFund', ['ui.bootstrap']);

//Registering services
tartanFundApp.factory("currentView", currentViewService);
tartanFundApp.factory('membersConfig', ['$http', membersConfigService]);

//Registering controllers
tartanFundApp.controller('navbarController', ['$scope', '$http', 'currentView', '$window', navbarController]);
tartanFundApp.controller('currentViewController', ['$scope', '$http', 'currentView', currentViewController]);
tartanFundApp.controller('membersController', ['$scope', '$http', 'membersConfig', membersController]);
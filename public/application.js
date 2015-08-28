var tartanFundApp = angular.module('tartanFund', []);

//Registering services
tartanFundApp.factory("currentView", currentViewService);

//Registering controllers
tartanFundApp.controller('navbarController', ['$scope', '$http', 'currentView', navbarController]);
tartanFundApp.controller('currentViewController', ['$scope', '$http', 'currentView', currentViewController]);
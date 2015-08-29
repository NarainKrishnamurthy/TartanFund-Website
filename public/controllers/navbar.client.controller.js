var navbarController = function($scope, $http, currentView, $window){
	$scope.menuItems = [];
    
    function getMenuItems (visibility, configURL){
		$http.get(configURL).
		  success(function(data, status, headers, config) {
		    console.log(data);
            $scope.menuItems = data[visibility];
		  }).
		  error(function(data, status, headers, config) {
		   	console.log('unable to get navbar items');
		  });
	};

	$scope.setView = function(templateURL){
		currentView.templateURL = templateURL;
		console.log(currentView.templateURL);
		$window.scrollTo(0,0);
	};

	//Intialization code. Maybe put this in a run block?
	getMenuItems('public', '/config/navbar.client.config.json');

};
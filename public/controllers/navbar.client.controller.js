var navbarController = function($scope, $http, currentView){
	$scope.menuItems = [];
    
    function getMenuItems (visibility){
		$http.get('/config/navbar.client.config.json').
		  success(function(data, status, headers, config) {
		    console.log(data);
            $scope.menuItems = data[visibility];
		  }).
		  error(function(data, status, headers, config) {
		   	console.log('unable to get navbar items');
		  });
	};
	getMenuItems('public');

	$scope.setView = function(templateURL){
		currentView.templateURL = templateURL;
		console.log(currentView.templateURL);
	};

};
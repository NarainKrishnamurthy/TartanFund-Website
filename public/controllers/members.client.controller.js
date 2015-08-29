var membersController = function($scope, $http){
    $scope.memberSets = {};

    function getMembers(configURL){
        $scope.memberSets = {};
        $http.get(configURL).
          success(function(configData, status, headers, config) {
            $http.get('/members').
              success(function(memberData, status, headers, config) {
    
                console.log(memberData);
                for (var setName in configData){
                    var memberSet = configData[setName];
                    for (var i=0; i< memberSet.length; i++){
                        var idToMatch = memberSet[i];
                        console.log(idToMatch);
                        var matchingMembers = memberData.filter(function (member){
                            return member.id === idToMatch;
                        }); 
                        if (matchingMembers.length > 0){
                            if (!$scope.memberSets[setName]){
                                $scope.memberSets[setName] = [];
                            }
                            $scope.memberSets[setName].push(matchingMembers[0]);
                        }
                    }
                    console.log('memberSets');
                    console.log($scope.memberSets);
                }    
              }).
              error(function(data, status, headers, config) {
                console.log('unable to get list of members');
              });
          }).
          error(function(data, status, headers, config) {
            console.log('unable to get members config file');
          });
    };

    //initialization code. Maybe put this in a run block?
    getMembers('/config/members.client.config.json');
};

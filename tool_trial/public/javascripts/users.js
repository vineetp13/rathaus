
console.log("in users.js in public");

function something($http) {
	console.log("in function something");
  $http({
        url: '/users',
        method: "POST",
        data: '',//JSON.stringify({json_ob_req: json_ob_req}),
        headers: {'Content-Type': 'application/json'}
      }).success(function (data) {
        //success(function (data, status, headers, config) {
            $scope.users = data.users; // assign  $scope.persons here as promise is resolved here 
        }).error(function (status, headers) {
          //}).error(function (data, status, headers, config) {
            $scope.status = status + ' ' + headers;
        }); 
    }
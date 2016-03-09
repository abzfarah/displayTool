angular.module('clientIO').service('rappidData', ['$http', function($http) {

    this.get = function(url) {
        return $http.get(url);
    };

}]);
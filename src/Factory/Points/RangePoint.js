angular
    .module('clientIO')
    .factory('rangeProp', rangeProp);


rangeProp.$inject = ['UnitListFactory'];


function rangeProp(UnitListFactory) {
    var rangeProp = {};

    return {
        rangeProp: rangeProp
    }
}
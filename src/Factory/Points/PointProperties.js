angular
    .module('clientIO')
    .factory('PointProperties', PointProperties);


PointProperties.$inject = ['UnitListFactory'];


function PointProperties(UnitListFactory) {
    var rangeProp = {};

    return {
        rangeProp: rangeProp
    }
}
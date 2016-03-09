angular
    .module('clientIO')
    .factory('booleanProp', booleanProp);


booleanProp.$inject = ['UnitListFactory'];


function booleanProp(UnitListFactory) {

    var booleanProp = {};

    return {
        booleanProp: booleanProp
    }

}
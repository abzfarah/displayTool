angular
    .module('clientIO')
    .factory('selectProp', selectProp);


selectProp.$inject = ['UnitListFactory'];


function rangeProp(UnitListFactory) {

    var selectProp = {};

    return {
        selectProp: selectProp
    }
}
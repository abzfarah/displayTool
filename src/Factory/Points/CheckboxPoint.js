angular
    .module('clientIO')
    .factory('checkboxProp', checkboxProp);


checkboxProp.$inject = ['UnitListFactory'];


function checkboxProp(UnitListFactory) {

    var checkboxProp = {};

    return {
        checkboxProp: checkboxProp
    }

}
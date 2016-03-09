angular
    .module('clientIO')
    .factory('buttonProp', buttonProp);


buttonProp.$inject = ['UnitListFactory'];


function buttonProp(UnitListFactory) {

    var buttonProp = {};

    return {
        buttonProp: buttonProp
    }

}
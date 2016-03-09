angular
    .module('clientIO')
    .factory('htmlProp', htmlProp);


htmlProp.$inject = ['UnitListFactory'];


function htmlProp(UnitListFactory) {
    var htmlProp = {};

    return {
        htmlProp: htmlProp
    }

}
angular
    .module('clientIO')
    .factory('livetextProp', imageProp);


livetextProp.$inject = ['UnitListFactory'];


function livetextProp(UnitListFactory) {
    var livetextProp = {};

    return {
        livetextProp: livetextProp
    }

}
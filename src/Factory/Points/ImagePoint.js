angular
    .module('clientIO')
    .factory('imageProp', imageProp);


imageProp.$inject = ['UnitListFactory'];


function imageProp(UnitListFactory) {
    var imageProp = {};

    return {
        imageProp: imageProp
    }

}
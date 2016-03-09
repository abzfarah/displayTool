angular
    .module('clientIO')
    .factory('livetrendsProp', imageProp);


livetrendsProp.$inject = ['UnitListFactory'];


function livetrendsProp(UnitListFactory) {
    var livetrendsProp = {};

    return {
        livetrends: livetrends
    }

}
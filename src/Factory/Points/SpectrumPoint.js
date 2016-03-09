angular
    .module('clientIO')
    .factory('spectrumProp', spectrumProp);


spectrumProp.$inject = ['UnitListFactory'];


function rangeProp(UnitListFactory) {

    var spectrumProp = {};

    return {
        spectrumProp: spectrumProp
    }
}
angular
    .module('clientIO')
    .factory('pointProperties', pointProperties);


pointProperties.$inject =  ['UnitListFactory', 'booleanPoint', 'buttonPoint', 'checkboxPoint', 'datePoint', 'dialPoint', 'gaugePoint',
                            'groupboxPoint', 'htmlPoint', 'imagePoint', 'livetextPoint', 'livetrendsPoint', 'permissionsPoint',
                            'rangePoint', 'selectPoint', 'spectrumPoint', 'basicRectPoint', 'basicCirclePoint', 'configPoint'];



function pointProperties(UnitListFactory, booleanPoint, buttonPoint, checkboxPoint, datePoint, dialPoint, gaugePoint, groupboxPoint,
                         htmlPoint, imagePoint, livetextPoint, livetrendsPoint, permissionsPoint, rangePoint, selectPoint, spectrumPoint,
                         basicRectPoint, basicCirclePoint, configPoint)


{

    var Props = [booleanPoint, buttonPoint, checkboxPoint, datePoint, dialPoint, gaugePoint,
        groupboxPoint, htmlPoint, imagePoint, livetextPoint, livetrendsPoint, permissionsPoint,
        rangePoint, selectPoint, spectrumPoint, basicRectPoint, basicCirclePoint, configPoint];

    //Combine all properties
    var Props = Object.assign.apply(null, Props);

    return {
        Props: Props
    }
}
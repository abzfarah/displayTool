angular.module('clientIO')
    .factory('InspectorData', InspectorDataCtrl);

    InspectorDataCtrl.$inject = ['UnitListFactory', 'pointProperties'];

    function InspectorDataCtrl (UnitListFactory, pointProperties) {

        var Props = pointProperties.Props;

        var InspectorDefs = {

            // Point specification properties
            // -----
            'basic.Rect': Props.basicRectProps,

            'basic.Circle': Props.circleProps,

            'booleanPoint': Props.booleanProps,

            'buttonPoint': Props.buttonProps,

            'checkboxPoint': Props.checkboxProps,

            'datePoint': Props.dateProps,

            'dialPoint': Props.dialProps,

            'gaugePoint': Props.gaugeProps,

            'htmlPoint': Props.htmlProps,

            'imagePoint': Props.imageProps,

            'livetextPoint': Props.livetextProps,

            'livetrendsPoint': Props.livetrendsProps,

            'permissionsPoint': Props.permissionProps,

            'rangePoint': Props.rangeProps,

            'selectPoint': Props.selectProps,

            'spectrumPoint': Props.spectrumProps,

            'configPoint': Props.configProps,
        };

        return {
            InspectorDefs: InspectorDefs
        };

};
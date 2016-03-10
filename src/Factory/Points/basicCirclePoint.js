angular
    .module('clientIO')
    .factory('basicCirclePoint', basicCirclePoint);


basicCirclePoint.$inject = ['UnitListFactory'];


function basicCirclePoint(UnitListFactory) {

    var circleDefs = {
        text: { type: 'textarea', label: 'Label Text' },
        'font-size': { type: 'range', min: 5, max: 80, unit: 'px', label: 'Font size' },
        'font-family': { type: 'select', options: fontList, label: 'Font family' },
        'EngineeringUnits': { type: 'select', options: engineeringUnitList, label: 'Display Unit' },
        'font-weight': { type: 'range', min: 100, max: 900, step: 100, defaultValue: 400, label: 'Font weight' },
        'fill': { type: 'color', label: 'Fill color' },
        'stroke': { type: 'color', defaultValue: '#000000', label: 'Font color' },
        'stroke-width': { type: 'range', min: 0, max: 5, step: .5, defaultValue: 0, unit: 'px', label: 'Stroke width' },
        'ref-x': { type: 'range', min: 0, max: .9, step: .1, defaultValue: .5, label: 'Horizontal alignment' },
        'ref-y': { type: 'range', min: 0, max: .9, step: .1, defaultValue: .5, label: 'Vertical alignment' },
        'ref-dx': { type: 'range', min: 0, max: 50, step: 1, defaultValue: 0, label: 'Horizontal offset' },
        'ref-dy': { type: 'range', min: 0, max: 50, step: 1, defaultValue: 0, label: 'Vertical offset' },
        'dx': { type: 'range', min: 0, max: 50, step: 1, defaultValue: 0, label: 'Horizontal distance' },
        'dy': { type: 'range', min: 0, max: 50, step: 1, defaultValue: 0, label: 'Vertical distance' },
        'stroke-dasharray': { type: 'select', options: ['0', '1', '5,5', '5,10', '10,5', '3,5', '5,1', '15,10,5,10,15'], label: 'Display Unit' },
        rx: { type: 'range', min: 0, max: 30, defaultValue: 1, unit: 'px', label: 'X-axis radius' },
        ry: { type: 'range', min: 0, max: 30, defaultValue: 1, unit: 'px', label: 'Y-axis radius' },
        'xlink:href': { type: 'text', label: 'Image URL' }
    };

    var basicCircleProps = {

        inputs: {
            attrs: {
                text: inp({
                    text: { group: 'text', index: 1 },
                    'font-size': { group: 'text', index: 2 },
                    'font-family': { group: 'text', index: 3 },
                    'font-weight': { group: 'text', index: 4 },
                    fill: { group: 'text', index: 5 },
                    stroke: { group: 'text', index: 6 },
                    'stroke-width': { group: 'text', index: 7 },
                    'ref-x': { group: 'text', index: 8 },
                    'ref-y': { group: 'text', index: 9 }
                }),
                rect: inp({
                    fill: { group: 'presentation', index: 1 },
                    'stroke-width': { group: 'presentation', index: 2, min: 0, max: 30, defaultValue: 1 },
                    'stroke-dasharray': { group: 'presentation', index: 3 },
                    rx: { group: 'presentation', index: 4 },
                    ry: { group: 'presentation', index: 5 }
                })
            }
        }
    };


    function inp(defs) {
        var ret = {};
        _.each(defs, function(def, attr) {

            ret[attr] = _.extend({}, circleDefs[attr], def);
        });
        return ret;
    }


    return {
        circleProps: basicCircleProps
    }

}
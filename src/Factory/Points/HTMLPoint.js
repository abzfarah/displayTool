angular
    .module('clientIO')
    .factory('htmlPoint', htmlPoint);


htmlPoint.$inject = ['UnitListFactory'];


function htmlPoint(UnitListFactory) {
    var htmlDefs = {
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


    var htmlProps = {

        inputs: {
            attrs: {
                text: inp({
                    text: {group: 'Lavel Specific Properties', index: 1},
                    'font-size': {group: 'Lavel Specific Properties', index: 2},
                    'font-family': {group: 'Lavel Specific Properties', index: 3},
                    'stroke': {type: 'color', group: 'Lavel Specific Properties', index: 4, defaultValue: '#000000'},
                    'EngineeringUnits': {group: 'Lavel Specific Properties', index: 5}

                }),
                displayProperties: inp({
                    width: {type: 'number', min: 1, max: 500, group: 'Display Properties', label: 'width', index: 21},
                    height: {type: 'number', min: 1, max: 500, group: 'Display Properties', label: 'height', index: 23},
                    x: {type: 'number', min: 1, max: 2000, group: 'Display Properties', label: 'x', index: 23},
                    y: {type: 'number', min: 1, max: 2000, group: 'Display Properties', label: 'y', index: 24},
                    layer: {type: 'number', min: 1, max: 2000, group: 'Display Properties', label: 'Layer', index: 25},

                })
            }
        }
    };


    function inp(defs) {
        var ret = {};
        _.each(defs, function(def, attr) {

            ret[attr] = _.extend({}, htmlDefs[attr], def);
        });
        return ret;
    }

    return {
        htmlProps: htmlProps
    }

}
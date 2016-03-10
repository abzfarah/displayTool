angular
    .module('clientIO')
    .factory('selectPoint', selectPoint);


selectPoint.$inject = ['UnitListFactory'];


function selectPoint(UnitListFactory) {

    var selectDefs = {
         'custom-data': { type: 'text' },
        'font-size': { type: 'range', min: 5, max: 80, unit: 'px', label: 'Font size' },


        'font-family': { type: 'select', options: fontList, label: 'Font family' },
        'select-type': { type: 'select', options: selectType, label: 'Select Type' },
        'type-sort': { type: 'select', options: typeSort, label: 'Type Sort' },


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



    var displayProperties = inp({

        width: {type: 'number', min: 1, max: 500, group: 'Display Properties', label: 'width', index: 21},
        height: {type: 'number', min: 1, max: 500, group: 'Display Properties', label: 'height', index: 23},
        x: {type: 'number', min: 1, max: 2000, group: 'Display Properties', label: 'x', index: 23},
        y: {type: 'number', min: 1, max: 2000, group: 'Display Properties', label: 'y', index: 24},
        layer: {type: 'number', min: 1, max: 2000, group: 'Display Properties', label: 'Layer', index: 25},

    });


    var selectBoxProperties = inp({
        'select-type': {group: 'Select Box Properties', index: 1},
        'type-sort': {group: 'Select Box Properties', index: 2},
        'font-size': {group: 'Select Box Properties', index: 3},
        'stroke': {type: 'color', group: 'Select Box Properties', index: 4, defaultValue: '#000000'},
        'font-family': {group: 'Select Box Properties', index: 5},
        'custom-data': { label: 'Text',  group: 'Select Box Properties', label: 'Point Name', index: 6,

            attrs: { 'label': { 'data-tooltip': 'An example of setting custom data via Inspector.' } }

        }



    });



    var selectProps = {

        inputs: {
            attrs: {
                selectBoxProperties: selectBoxProperties ,
                displayProperties: displayProperties
            }
        }
    };


    function inp(defs) {
        var ret = {};
        _.each(defs, function(def, attr) {

            ret[attr] = _.extend({}, selectDefs[attr], def);
        });
        return ret;
    }




    return {
        selectProps: selectProps
    }
}
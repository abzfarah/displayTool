angular.module('clientIO')
    .factory('StencilData', StencilData);

StencilData.$inject = ['iconFactory'];


    function StencilData(iconFactory) {

        var hello=iconFactory;

    var Stencil = [

            new joint.shapes.basic.Image({
                attrs: {
                    image: { width: 50, height: 50, 'xlink:href': iconFactory.configIcon },
                    text: { text: 'Configuration', 'font-size': 9, display: '', stroke: '#000000', 'stroke-width': 0 }
                },
                iconType: 'configPoint'
            }),

            new joint.shapes.basic.Image({
                attrs: {
                    image: { width: 50, height: 50, 'xlink:href': iconFactory.permissionsIcon },
                    text: { text: 'Permissions', 'font-size': 9, display: '', stroke: '#000000', 'stroke-width': 0 },

                },
                iconType: 'permissionsPoint'
            }),


            new joint.shapes.basic.Image({
                attrs: {
                    image: { width: 50, height: 50, 'xlink:href': iconFactory.dialIcon},
                    text: { text: 'Dial', 'font-size': 9, display: '', stroke: '#000000', 'stroke-width': 0 }
                },

                iconType: 'dialPoint'
            }),


            new joint.shapes.basic.Image({
                attrs: {
                    image: { width: 50, height: 50, 'xlink:href': iconFactory.dateIcon },
                    text: { text: 'Date', 'font-size': 9, display: '', stroke: '#000000', 'stroke-width': 0 }
                },

                iconType: 'datePoint'
            }),

            new joint.shapes.basic.Image({
                attrs: {
                    image: { width: 50, height: 50, 'xlink:href': iconFactory.rangeIcon },
                    text: { text: 'Range', 'font-size': 9, display: '', stroke: '#000000', 'stroke-width': 0 }
                },

                iconType: 'rangePoint'
            }),

            new joint.shapes.basic.Image({
                attrs: {
                    image: { width: 50, height: 50, 'xlink:href': iconFactory.buttonIcon },
                    text: { text: 'Button', 'font-size': 9, display: '', stroke: '#000000', 'stroke-width': 0 }
                },
                iconType: 'buttonPoint'
            }),


            new joint.shapes.basic.Image({
                attrs: {
                    image: { width: 50, height: 50, 'xlink:href': iconFactory.selectIcon },
                    text: { text: 'Select', 'font-size': 9, display: '', stroke: '#000000', 'stroke-width': 0 }
                },
                iconType: 'selectPoint'
            }),


            new joint.shapes.basic.Image({
                attrs: {
                    image: { width: 50, height: 50, 'xlink:href': iconFactory.labelIcon },
                    text: { text: 'Label', 'font-size': 9, display: '', stroke: '#000000', 'stroke-width': 0 }
                },
                iconType: 'labelPoint'
            }),


            new joint.shapes.basic.Image({
                attrs: {
                    image: { width: 50, height: 50, 'xlink:href': iconFactory.htmlIcon },
                    text: { text: 'HTML', 'font-size': 9, display: '', stroke: '#000000', 'stroke-width': 0 }
                },

                iconType: 'htmlPoint'
            }),

            new joint.shapes.basic.Image({
                attrs: {
                    image: { width: 50, height: 50, 'xlink:href': iconFactory.groupboxIcon },
                    text: { text: 'Groupbox', 'font-size': 9, display: '', stroke: '#000000', 'stroke-width': 0 }
                },
                iconType: 'groupboxPoint'
            }),

            new joint.shapes.basic.Image({
                attrs: {
                    image: { width: 50, height: 50, 'xlink:href': iconFactory.booleanIcon },
                    text: { text: 'Boolean', 'font-size': 9, display: '', stroke: '#000000', 'stroke-width': 0 }
                },
                iconType: 'booleanPoint'
            }),


            new joint.shapes.basic.Image({
                attrs: {
                    image: { width: 50, height: 50, 'xlink:href': iconFactory.livetextIcon },
                    text: { text: 'Live Text', 'font-size': 9, display: '', stroke: '#000000', 'stroke-width': 0 }
                },

                iconType: 'livetextPoint'
            }),


            new joint.shapes.basic.Image({
                attrs: {
                    image: { width: 50, height: 50, 'xlink:href': iconFactory.spectrumIcon },
                    text: { text: 'Spectrum', 'font-size': 9, display: '', stroke: '#000000', 'stroke-width': 0 }
                },

                iconType: 'spectrumPoint'
            }),

            new joint.shapes.basic.Image({
                attrs: {
                    image: { width: 50, height: 50, 'xlink:href': iconFactory.checkboxIcon },
                    text: { text: 'Checkbox', 'font-size': 9, display: '', stroke: '#000000', 'stroke-width': 0 }
                },
                iconType: 'checkboxPoint'
            }),

            new joint.shapes.basic.Image({
                attrs: {
                    image: { width: 50, height: 50, 'xlink:href': iconFactory.trendingIcon },
                    text: { text: 'Trending Live', 'font-size': 9, display: '', stroke: '#000000', 'stroke-width': 0 }
                },
                iconType: 'trendingPoint'
            }),

            new joint.shapes.basic.Image({
                attrs: {
                    image: { width: 50, height: 50, 'xlink:href': iconFactory.gaugeIcon },
                    text: { text: 'Gauge', 'font-size': 9, display: '', stroke: '#000000', 'stroke-width': 0 }
                },
                iconType: 'gaugePoint'
            }),

            new joint.shapes.basic.Rect({
                size: { width: 5, height: 3 },
                attrs: {
                    rect: {
                        rx: 2, ry: 2, width: 50, height: 30,
                        fill: '#27AE60'
                    },
                    text: { text: 'Rectangle', fill: '#ffffff', 'font-size': 10, stroke: '#000000', 'stroke-width': 0 }
                },

                iconType: 'basic.Rect'
            }),
            new joint.shapes.basic.Circle({
                size: { width: 5, height: 3 },
                attrs: {
                    circle: { width: 50, height: 30, fill: '#E74C3C' },
                    text: { text: 'Circle', fill: '#ffffff', 'font-size': 10, stroke: '#000000', 'stroke-width': 0 }
                },
                iconType: 'basic.Circle'
            })



    ];


        return {

            shapes: Stencil
        };

};
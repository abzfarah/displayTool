angular.module('clientIO')
    .directive('display', display)

    display.$inject = ['rappidData', 'InspectorData', 'StencilData', 'iconFactory'];

    function display (rappidData, InspectorData, StencilData, iconFactory) {

        var paper, graph, paperScroller, stencil, selection, selectionView, clipboard, commandManager;

        var initialization = [

            // Create a graph, paper and wrap the paper in a PaperScroller.
            function paperInit(scope, element) {

                graph = new joint.dia.Graph;

                paper = new joint.dia.Paper({
                    width: 2000,
                    height: 2000,
                    gridSize: 10,
                    perpendicularLinks: true,
                    model: graph,

                    defaultLink: new joint.dia.Link({
                        attrs: {
                            '.marker-source': { d: 'M 10 0 L 0 5 L 10 10 z', transform: 'scale(0.001)' },
                            '.marker-target': { d: 'M 10 0 L 0 5 L 10 10 z' },
                            '.connection': {}
                        }
                    })
                });

                paperScroller = new joint.ui.PaperScroller({
                    paper: paper,
                    autoResizePaper: true,
                    padding: 50
                });

                $('#paper-container', element).append(paperScroller.el);

                scope.components.paper = paper;
                scope.components.scroller = paperScroller;
                scope.components.graph = graph;
            },

            // Create stencil.
            function stencilInit(scope, element) {

                var Data = StencilData;







                stencil = new joint.ui.Stencil({
                    graph: graph,
                    paper: paper,
                    width: 240
                })



                $('#stencil-container', element).append(stencil.render().el);
                stencil.load( StencilData.shapes);




                joint.layout.GridLayout.layout(stencil.getGraph(), {
                    columnWidth: 110,
                    columns: 60,
                    rowHeight: 110,
                    dy: 20,
                    dx: 20,
                    resizeToFit: true
                });



                stencil.getPaper().fitToContent(1,1,10);
                scope.components.stencil = stencil;
            },

            // Selection
            function selectionInit(scope, element) {

                selection = new Backbone.Collection;
                selectionView = new joint.ui.SelectionView({
                    paper: paper,
                    graph: graph,
                    model: selection
                });

                // Initiate selecting when the user grabs the blank area of the paper while the Shift key is pressed.
                // Otherwise, initiate paper pan.
                paper.on('blank:pointerdown', function(evt, x, y) {

                    if (_.contains(KeyboardJS.activeKeys(), 'shift')) {
                        selectionView.startSelecting(evt, x, y);
                    } else {
                        selectionView.cancelSelection();
                        paperScroller.startPanning(evt, x, y);
                    }
                });

                paper.on('cell:pointerdown', function(cellView, evt) {
                    // Select an element if CTRL/Meta key is pressed while the element is clicked.
                    if ((evt.ctrlKey || evt.metaKey) && !(cellView.model instanceof joint.dia.Link)) {
                        selectionView.createSelectionBox(cellView);
                        selection.add(cellView.model);
                    }
                });

                selectionView.on('selection-box:pointerdown', function(evt) {
                    // Unselect an element if the CTRL/Meta key is pressed while a selected element is clicked.
                    if (evt.ctrlKey || evt.metaKey) {
                        var cell = selection.get($(evt.target).data('model'));
                        selectionView.destroySelectionBox(paper.findViewByModel(cell));
                        selection.reset(selection.without(cell));
                    }
                });

                // Disable context menu inside the paper.
                // This prevents from context menu being shown when selecting individual elements with Ctrl in OS X.
                paper.el.oncontextmenu = function(evt) { evt.preventDefault(); };

                KeyboardJS.on('delete, backspace', _.bind(function(evt) {

                    if (!$.contains(evt.target, paper.el)) {
                        // remove selected elements from the paper only if the target is the paper
                        return;
                    }

                    commandManager.initBatchCommand();
                    selection.invoke('remove');
                    commandManager.storeBatchCommand();
                    selectionView.cancelSelection();

                    if (_.contains(KeyboardJS.activeKeys(), 'backspace') && !$(evt.target).is("input, textarea")) {
                        // Prevent Backspace from navigating back.
                        evt.preventDefault();
                    }

                }));
            },

            //  Halo, FreeTransfrom  & Inspector
            function cellToolsInit(scope, element) {

                var inspector;
                var $inspectorHolder = $('#inspector-container', element);

                function openCellTools(cellView) {

                    // No need to re-render inspector if the cellView didn't change.
                    if (!inspector || inspector.options.cell !== cellView.model) {

                        if (inspector) {

                            if (inspector.getModel().collection) {
                                // update cell if the model is still in the graph
                                inspector.updateCell();
                            }

                            // Clean up the old inspector if there was one.
                            inspector.remove();
                        }
                        var test = InspectorData.InspectorDefs;
                        var CommonInspectorInputs = InspectorData.CommonInspectorInputs;
                        var CommonInspectorGroups = InspectorData.CommonInspectorGroups;
                        var type = cellView.model.attributes.type;

                        var imageType = cellView.model.attributes.attrs.text.text;
                        var type = cellView.model.attributes.attrs.text.text;

                        var realtype = cellView.model.attributes.iconType;

                        inspector = new joint.ui.Inspector({
                            inputs:  scope.bigData[realtype] ? scope.bigData[realtype].inputs : CommonInspectorInputs ,
                            groups:  scope.bigData[realtype] ? scope.bigData[realtype].groups : CommonInspectorGroups,
                            cell: cellView.model
                        }).on('render', function() {

                            this.$('[data-tooltip]').each(function() {

                                var $label = $(this);
                                new joint.ui.Tooltip({
                                    target: $label,
                                    content: $label.data('tooltip'),
                                    right: '.inspector',
                                    direction: 'right'
                                });
                            });
                        });

                        $inspectorHolder.html(inspector.render().el);
                    }

                    new joint.ui.Halo({ cellView: cellView }).render();
                    new joint.ui.FreeTransform({ cellView: cellView }).render();

                    // adjust selection
                    selectionView.cancelSelection();
                    selection.reset([cellView.model]);
                }
                paper.on('cell:pointerup', function(cellView) {

                    if (cellView.model instanceof joint.dia.Element && !selection.contains(cellView.model)) {
                        openCellTools(cellView);
                    }
                });
            },

            // Clipboard
            function clipboardInit(scope, element) {

                clipboard = new joint.ui.Clipboard;

                KeyboardJS.on('ctrl + c', function() {
                    // Copy all selected elements and their associated links.
                    clipboard.copyElements(selection, graph, {
                        translate: { dx: 20, dy: 20 },
                        useLocalStorage: true
                    });
                });

                KeyboardJS.on('ctrl + v', function() {

                    selectionView.cancelSelection();
                    clipboard.pasteCells(graph, { link: { z: -1 }, useLocalStorage: true });

                    // Make sure pasted elements get selected immediately. This makes the UX better as
                    // the user can immediately manipulate the pasted elements.
                    clipboard.each(function(cell) {

                        if (cell.get('type') === 'link') return;

                        // Push to the selection not to the model from the clipboard but put the model into the graph.
                        // Note that they are different models. There is no views associated with the models
                        // in clipboard.
                        selection.add(graph.getCell(cell.id));
                        selectionView.createSelectionBox(paper.findViewByModel(cell));
                    });
                });

                KeyboardJS.on('ctrl + x', function() {

                    var originalCells = clipboard.copyElements(selection, graph, { useLocalStorage: true });
                    commandManager.initBatchCommand();
                    _.invoke(originalCells, 'remove');
                    commandManager.storeBatchCommand();
                    selectionView.cancelSelection();
                });
            },

            // Command Manager
            function commandManagerInit(scope, element) {

                commandManager = new joint.dia.CommandManager({ graph: graph });

                KeyboardJS.on('ctrl + z', function() {

                    commandManager.undo();
                    selectionView.cancelSelection();
                });

                KeyboardJS.on('ctrl + y', function() {

                    commandManager.redo();
                    selectionView.cancelSelection();
                });

                scope.components.commander = commandManager;
            },

            function toolTips(scope, element) {

                $('.toolbar-container [data-tooltip]', element).each(function() {

                    new joint.ui.Tooltip({
                        target: $(this),
                        content: $(this).data('tooltip'),
                        top: '.toolbar-container',
                        direction: 'top'
                    });
                });
            }
        ];

        return {

            restrict: 'E',

            replace: true,

            templateUrl: './templates/rappid.html',

            scope: {
                title: '@',
                source: '@'
            },

            controller: ['$scope', 'rappidData', 'InspectorData', function($scope, rappidData, InspectorData) {

                var Data = InspectorData.InspectorDefs;
                $scope.bigData = Data;
                // container of all jointjs objects/plugins
                $scope.components = {};

                rappidData.get($scope.source).success(function(data) {
                    $scope.data = _.extend({ stencil: {}, inspector: {}}, data);
                }).error(function() {
                    $scope.data = { stencil: {}, inspector: {}};
                });
            }],

            link: function(scope, element, attrs) {

                var unbindOnData = scope.$watch('data', function(data) {
                    if (!data) return;
                    // run all initalizators
                    _.invoke(initialization, 'call', window, scope, element);
                    // remove watcher (init only once)
                    unbindOnData();
                });
            }
        };
};

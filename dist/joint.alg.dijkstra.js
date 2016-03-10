/*! JointJs v1.7.0 - HTML 5 Diagramming Framework

 Copyright (c) 2015 client IO

 2016-01-11






 // Dijkstra's shortest path algorithm.
// ===================================

// Implemented using a priority queue.
// Time complexity: O(|E| + |V| log |V|)

joint.alg = joint.alg || {};

// `adjacencyList` is an object where keys are nodes and values are
// lists of neighbours.
// `source` is the id of the source node from which shortest paths will be computed.
// `weight` is a function that returns a distance between two nodes.
joint.alg.Dijkstra = function(adjacencyList, source, weight) {

    weight = weight || function(u, v) { return 1; };

    var dist = {};
    dist[source] = 0;

    var previous = {};

    var Q = new joint.alg.PriorityQueue;

    for (var v in adjacencyList) {

        if (v !== source) {
            dist[v] = Infinity;
        }
        Q.insert(dist[v], v, v);
    }

    var scanned = {};

    while (!Q.isEmpty()) {

        var u = Q.remove();
        scanned[u] = true;

        var neighbours = adjacencyList[u] || [];
        for (var i = 0; i < neighbours.length; i++) {
            var v = neighbours[i];

            if (!scanned[v]) {

                var alt = dist[u] + weight(u, v);
                if (alt < dist[v]) {

                    dist[v] = alt;
                    previous[v] = u;
                    Q.updatePriority(v, alt);
                }
            }
        }
    }

    return previous;
};

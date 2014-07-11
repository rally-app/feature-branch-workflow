/*global FeatureBranchWorkflow, $*/


window.FeatureBranchWorkflow = {
    Models: {Event},
    Collections: {Events},
    Views: {EventView},
    Routers: {EventRouter},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
    }
};

$(document).ready(function () {
    'use strict';
    FeatureBranchWorkflow.init();
});

var nickBottomley = function(joke){
    return joke;
}

/*global FeatureBranchWorkflow, $*/


window.FeatureBranchWorkflow = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
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

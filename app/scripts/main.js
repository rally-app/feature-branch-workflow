/*global FeatureBranchWorkflow, $*/


window.FeatureBranchWorkflow = {
    Models: {Event, AnotherEvent},
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

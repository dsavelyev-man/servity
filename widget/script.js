define(['jquery'], function($) {
    'use strict';

    return function() {
        let self = this;

        this.callbacks = {
            render: function() {
                return true;
            },
            bind_actions: function() {
                return true;
            },
            init: function() {
                return true;
            },
            destroy: function() {
                // ...
            },
            settings: function() {
                // ...
            },
            onSave: function() {
                return true;
            }
        };

        return this;
    };
});
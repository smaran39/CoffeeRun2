(function(window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    function FormHandler(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }
        this.$formElement = $(selector);
        if (this.$formElement.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    FormHandler.prototype.addSubmitHandler = function(fn) {
        console.log('Setting submit handler for form');
        this.$formElement.on('submit', function(event) {
            event.preventDefault();

            var data = {};
            $(this).serializeArray().forEach(function(item) {
                data[item.name] = item.value;
                console.log(item.name + ' is ' + item.value);
            });
            console.log(data);
            fn(data);
            this.reset();
            this.elements[0].focus();
        });
    };
//from here- Silver Challenge required code
    FormHandler.prototype.addChangeHandler = function(fn) {
            this.$formElement.on('change', function(event) {
                event.preventDefault();
                fn();
            });

        };


        FormHandler.prototype.addResetHandler = function(fn) {
            //console.log('Setting reset handler for form');
            this.$formElement.on('reset', function() {
                fn();
            });
        };

      //till here extra-code for Silver challenge
    App.FormHandler = FormHandler;
    window.App = App;
})(window);

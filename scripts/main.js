(function(window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var myTruck = new Truck('ncc-1701', new DataStore());
    window.myTruck = myTruck;
    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));

//from here - Silver Challenge required code
    formHandler.addChangeHandler(function() {
            var strength = document.getElementById('strengthLevel').value;
            document.getElementById('strength_value').innerHTML = strength;
            //console.log('it is'+strength);
            if (strength>=0 && strength <= 30) {
                document.getElementById('strength_value').style.color = 'green';
            } else if (strength >= 31 && strength <=70) {
                document.getElementById('strength_value').style.color = 'yellow';
            } else if(strength >=71 && strength <=100) {
                document.getElementById('strength_value').style.color = 'red';
            }
        });

        formHandler.addResetHandler(
                function () {
                    document.getElementById('strength_value').innerHTML = 30; //30 is the given default value for coffee strength
                    document.getElementById('strength_value').style.color = 'green';
                }
            );
//till here- Silver Challenge code
    console.log(formHandler);

})(window);

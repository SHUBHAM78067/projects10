sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("FioriTilesfor10Projects.projects10.controller.vacc.Vacc", {
            onInit: function () {
                let myVaccModel = new JSONModel("../model/vacc.json");
                this.getView().setModel(myVaccModel,"vacc");

                let myViewConfig = {
                    "table":true,
                    "calendar":false
                };
                let myViewModel = new JSONModel(myViewConfig);
                this.getView().setModel(myViewModel,"view");

            },
            formatDate:function (input) {
                return new Date(input);        
            },
            formatState:function (input) {
                let currentDate = new Date();
                let inputDate = new Date(input);
                if(inputDate < currentDate){
                    return 'Success'; 
                }else if(inputDate > currentDate){
                    return 'Warning';
                }else{
                    return 'Error';
                }
                
            }
        });

    });

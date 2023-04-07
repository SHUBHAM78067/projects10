sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("FioriTilesfor10Projects.projects10.controller.covid.Graph", {
            onInit: function () {
                let myTilesModel = new JSONModel("../model/tiles.json");
                this.getView().setModel(myTilesModel,"tiles");

            },
            press:function (oRoute){
                this.getOwnerComponent().getRouter().navTo(oRoute);
            }
        });
    });

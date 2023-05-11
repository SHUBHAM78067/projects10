sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("FioriTilesfor10Projects.projects10.controller.bcr.Bcr", {
           onInit:function (){
            let typeModel = new JSONModel("../model/type.json");
                this.getView().setModel(typeModel,"type");
           }
        });
    });

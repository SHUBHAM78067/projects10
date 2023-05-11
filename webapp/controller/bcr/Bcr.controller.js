sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel, MessageBox, MessageToast) {
        "use strict";

        return Controller.extend("FioriTilesfor10Projects.projects10.controller.bcr.Bcr", {
           onInit:function (){
            let typeModel = new JSONModel("../model/type.json");
                this.getView().setModel(typeModel,"type");
           },
           onpressnr:function (event) {
            this.getView().byId("SimpleFormToolbarnr").setVisible(true);
            this.getView().byId("idsave").setVisible(true);
            this.getView().byId("idIconTabBar").setVisible(true);
           },
           onpresspr:function(params) {
            this.getView().byId("SimpleFormToolbarnr").setVisible(false);
            this.getView().byId("idsave").setVisible(false);
            this.getView().byId("idIconTabBar").setVisible(false);
           },
           onpressar:function (event) {
            this.getView().byId("SimpleFormToolbarnr").setVisible(false);
            this.getView().byId("idsave").setVisible(false);
            this.getView().byId("idIconTabBar").setVisible(false);
           },
           onPressSave:function (event) {
            var oResourceModel = this.getView().getModel("i18n");
            var oBundle = oResourceModel.getResourceBundle();
            var msgSuccess = oBundle.getText("msgSuccess", ["858585"]);
            var msgError = oBundle.getText("msgError");
    
            MessageBox.confirm("Do you want to raise a new request ?", {
              title: "Confirmation",
              onClose: function (status) {
                if (status === "OK") {
                  MessageToast.show(msgSuccess);
                } else {
                  MessageBox.error(msgError);
                }
              },
            });
           },
           handleClick: function(oEvent) {
            var demoToast = this.getView().byId("demoToast");
            demoToast.setText("Event click fired.");
            demoToast.show();
          }
        });
    });

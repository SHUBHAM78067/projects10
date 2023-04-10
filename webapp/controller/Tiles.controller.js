sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("FioriTilesfor10Projects.projects10.controller.Tiles", {
            onInit: function () {
                
                let myTilesModel = new JSONModel("../model/tiles.json");
                this.getView().setModel(myTilesModel,"tiles");

            },
            press:function (oRoute){
                if(oRoute.substring(0,4) == 'EXT-'){
                  let selItem =  JSON.parse(this.getView().getModel("tiles").getJSON()).find(item => {if(item.route == oRoute){return item;}});
                  // URLHelper is used to route out side the app(call,sms,email,url)
                  sap.m.URLHelper.redirect(selItem.url);
                }else{
                    this.getOwnerComponent().getRouter().navTo(oRoute);
                }
            }
        });
    });

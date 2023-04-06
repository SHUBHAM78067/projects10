sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("FioriTilesfor10Projects.projects10.controller.countdown.Countdown", {
            onInit: function () {
                debugger;
                this.timer = {
                    "days":0,
                    "hours":0,
                    "minutes":0,
                    "seconds":0
                }
                let myTimerModel = new JSONModel(this.timer);
                this.getView().setModel(myTimerModel,"timer")
                
                setInterval(this.calculateTime.bind(this),1000);

            },
            calculateTime:function (){
                debugger;
               let BirthDayDate = new Date("Nov 18 2023");
               let today = new Date();
               let diff = BirthDayDate.getTime() - today.getTime();
               this.timer.days = Math.floor(diff / (1000 * 60 * 60 * 24));
               this.timer.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
               this.timer.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
               this.timer.seconds = Math.floor((diff % (1000 * 60)) / 1000);
               this.getView().getModel("timer").setData(this.timer);
               

            }
        });
    });

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    'sap/viz/ui5/api/env/Format',
    'sap/viz/ui5/format/ChartFormatter'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel,Format,ChartFormatter) {
        "use strict";

        return Controller.extend("FioriTilesfor10Projects.projects10.controller.covid.Graph", {
            dataPath : "https://api.rootnet.in/covid19-in/stats/latest",
            oVizFrame : null,
            onInit: function () {
                Format.numericFormatter(ChartFormatter.getInstance());
                var formatPattern = ChartFormatter.DefaultPattern;
         
             
    
                var oVizFrame = this.oVizFrame = this.getView().byId("idVizFramePie");
                oVizFrame.setVizProperties({
                    legend: {
                        title: {
                            visible: false
                        }
                    },
                    title: {
                        visible: false
                    }
                });
                var myLatestCovidModel = new JSONModel(this.dataPath);
                oVizFrame.setModel(myLatestCovidModel);

                var oPopOver = this.getView().byId("idPopOverPie");
                oPopOver.connect(oVizFrame.getVizUid());
                oPopOver.setFormatString(formatPattern.STANDARDFLOAT);

            }
        });
    });

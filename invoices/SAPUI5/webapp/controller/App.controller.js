// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"  // Corregido aquí
    // "lazoft/SAPUI5/model/models",
    // "sap/ui/model/resource/ResourceModel"
    //"sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.XMLView} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     * @param {typeof lazoft.SAPUI5.model.models} models
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
    // function (Controller, MessageToast, models, ResourceModel) {
    function (Controller, MessageToast) {
        "use strict";
        return Controller.extend("lazoft.SAPUI5.controller.App", {

            onInit: function () {
                // // this.getView().setModel(oModel);//esta línea de código ya no va
                // // set data model on the view
                // this.getView().setModel(models.createRecipient());

                // // set i18n model on the view
                // var i18nModel = new ResourceModel({ bundleName: "lazoft.SAPUI5.i18n.i18n" });
                // this.getView().setModel(i18nModel, "i18n");
            },

            onSaludar: function () {
                alert("Hola a to2");
            },
            // onSaludar2: function () {
            //     var oI18nModel = this.getView().getModel("i18n");
            //     console.log("Modelo i18n:", oI18nModel);
            
            //     if (oI18nModel) {
            //         var oBundle = oI18nModel.getResourceBundle();
            //         var sText = oBundle.getText("helloMsg", ["User"]);
            //         MessageToast.show(sText);
            //     } else {
            //         console.error("El modelo i18n no está disponible.");
            //     }
            // }
            
            onSaludar2: function () {
                var oBundel = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundel.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMsg);
            }

            /** onSaludar2 es nuevo */
            //onSaludar2: function () {
            //    MessageToast.show("Esto es un MesaggeToast");
            //}   
        });
    });

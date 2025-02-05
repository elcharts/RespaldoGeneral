// @ts-nocheck
sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/resource/ResourceModel",
    "lazoft/practica5/model/Models"
],
    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     * @param {typeof lazoft.practica5.model.Models} Models
     */
    function (UIComponent, ResourceModel, Models) {

        "use strict";

        return UIComponent.extend("lazoft.practica5.Component", {

            // metadata: {
            //     "rootView": {
            //         "viewName": "lazoft.practica5.view.App",
            //         "type": "XML",
            //         "Async": true,
            //         "id": "app"
            //     }
            // },

            metadata:{
                manifest:"json"
            },

            init: function () {

                // Llamar a la función de inicialización del componente base
                UIComponent.prototype.init.apply(this, arguments);

                // Crear y asignar el modelo de internacionalización (i18n)
                var oResourceModel = new ResourceModel({
                    bundleName: "lazoft.practica5.i18n.i18n"
                });
                this.setModel(oResourceModel, "i18n");

                // Obtener el modelo JSON desde Models.js y asignarlo al componente
                this.setModel(Models.createRecipient());
            }
        });
    });
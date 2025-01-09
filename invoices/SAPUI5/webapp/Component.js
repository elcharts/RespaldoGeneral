// @ts-nocheck
sap.ui.define([
    "sap/ui/core/UIComponent",
    "lazoft/SAPUI5/model/models",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     * @param {typeof lazoft.SAPUI5.model.models} models
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (UIComponent, models, ResourceModel) {

        return UIComponent.extend("lazoft.SAPUI5.Component", {
 
            metadata: {
                manifest:"json"
                // "rootView": {                    
                //     "viewName": "lazoft.SAPUI5.view.App",
                //     "type"    : "XML",
                //     "async"   : true,
                //     "id"      : "app"
                // }
            },

            init: function () {
                //Llamar a la función init del padre.
                UIComponent.prototype.init.apply(this, arguments);

                //set data model on the view
                this.setModel(models.createRecipient());                

                //set i18n model on the view
                var i18nModel = new ResourceModel({ 
                    bundleName: "lazoft.SAPUI5.i18n.i18n" 
                });
                this.setModel(i18nModel, "i18n");

            }
        });
    }
);
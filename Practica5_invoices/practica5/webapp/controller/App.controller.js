// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("lazoft.practica5.controller.App",{

            onInit: function () {
                var oComponent = this.getOwnerComponent();
                this.getView().setModel(oComponent.getModel("i18n"), "i18n");
                this.getView().setModel(oComponent.getModel()); // Modelo JSON de Models.js
            },
            onShowHello: function () {
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMessage = oBundle.getText("messageHello", [sRecipient]);
                MessageToast.show(sMessage);
            }
        });
    });
//============================================================================
// // @ts-nocheck
// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/m/MessageToast",
//     "sap/ui/model/resource/ResourceModel",
//     "lazoft/practica5/model/Models"
// ],
//     /**
//      * @param {typeof sap.ui.core.mvc.Controller} Controller
//      * @param {typeof sap.m.MessageToast} MessageToast
//      * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
//      * @param {typeof lazoft.practica5.model.Models} Models
//      */
//     function (Controller, MessageToast, ResourceModel, Models) {
//         "use strict";

//         return Controller.extend("lazoft.practica5.controller.App",{

//             onInit: function () {

//                 this.getView().setModel(Models.createRecipient());

//                 var oResourceModel = new ResourceModel({
//                     bundleName : "lazoft.practica5.i18n.i18n"
//                 });
//                 this.getView().setModel(oResourceModel, "i18n");
                
//             },
//             onShowHello: function () {
//                 var oBundle = this.getView().getModel("i18n").getResourceBundle();
//                 var sRecipient = this.getView().getModel().getProperty("/recipient/name");
//                 var sMessage = oBundle.getText("messageHello", [sRecipient]);
//                 MessageToast.show(sMessage);
//             }
//         });
//     });
//============================================================================
// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "lazoft/practica5/model/Models"
// ],
//     function (Controller, Models) {
//         "use strict";
//         return Controller.extend("lazoft.practica5.controller.App",{

//             onInit:function(){
//                 var oModel = Models.createRecipient();
//                 this.getView().setModel(oModel);
//             },

//             onShowHello:function(){
//                 alert('Hola a to2');
//             }
//         })
//     });
//============================================================================
// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/ui/model/json/JSONModel"
// ], function (Controller, JSONModel) {
//     "use strict";

//     return Controller.extend("lazoft.practica5.controller.App", {

//         onInit:function(){

//             var oData = {
//                 recipient:{
//                     name:"world"
//                 }
//             };
//             var oModel = new JSONModel(oData);
//             this.getView().setModel(oModel);
//         },

//         onShowHello:function(){
//             alert("Hola mundo");
//         }
//     });
// });

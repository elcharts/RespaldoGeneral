// @ts-nocheck
sap.ui.define([
"sap/ui/core/ComponentContainer"
],
/**
 * @param {typeof sap.ui.core.ComponentContainer} ComponentContainer
 */
    function(ComponentContainer){

        new ComponentContainer({
            name:"lazoft.practica5",
            settings:{
                id:"practica5"
            },
            async: true
        }).placeAt("content");
    });
//==========================================================================*
// // @ts-nocheck
// sap.ui.define([
//     "sap/ui/core/mvc/XMLView"
// ],
//     /**
//      * 
//      * @param {typeof sap.ui.core.mvc.XMLView} Controller
//      */
//         function(XMLView){
//         "use strict"; // Es una buena práctica agregar esto para evitar errores silenciosos
//         XMLView.create({
//             viewName:"lazoft.practica5.view.App"
//         }).then(
//             oView => oView.placeAt("content")
//         );
// });
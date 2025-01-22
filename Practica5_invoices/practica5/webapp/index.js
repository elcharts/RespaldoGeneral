sap.ui.define([
    "sap/ui/core/mvc/XMLView"
//  "sap/m/Text"
],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.XMLView} Controller
     */
    // function(Text){
        function(XMLView){
        "use strict"; // Es una buena práctica agregar esto para evitar errores silenciosos
        XMLView.create({
            viewName:"lazoft.practica5.view.App"
        }).then(
            oView => oView.placeAt("content")
        );
        // }).then(
        //     function(oView){
        //     oView.placeAt("content");
        // });
//===================================================================================================
        // alert("se cargo correctamente");

        // new Text({
        //     text:"Hola mundo desde index.js"
        // }).placeAt("content");
});
// //@ts-nocheck
// sap.ui.define([
//     "sap/ui/core/ComponentContainer"
// ],
// /**
//  * 
//  * @param {sap.ui.core.ComponentContainer } ComponentContainer
//  */
// function (ComponentContainer) {
  
//     new ComponentContainer({
//         name:"lazoft.SAPUI5",
//         settings:{
//             id:"SAPUI5"
//         },
//         async:true
//     }).placeAt("content");
// });
//--------------------------------------------------------------------------------*
// Definimos el módulo "sap.ui.define" que tiene como dependencia "sap/ui/core/mvc/XMLView"
// sap.ui.define([
//     "sap/ui/core/mvc/XMLView"  // Importamos la clase XMLView que nos permitirá cargar una vista XML
// ],
// function (XMLView) {
//     "use strict"; // Activamos el modo estricto de JavaScript para evitar errores sutiles en el código
    
//     // Usamos el método "create" de XMLView para crear una vista a partir del nombre de la vista XML
//     XMLView.create({
//         viewName: "lazoft.SAPUI5.view.App" // Especificamos el nombre de la vista XML que se quiere cargar
//     }).then(function (oView) {
//         // Una vez que la vista se haya creado correctamente, la colocamos en el contenedor con el id "content"
//         oView.placeAt("content");
//     });
// });

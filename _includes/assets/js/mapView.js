var mapView = function () {

  "use strict";

  this.initialise = function(geoData, geoCodeRegEx) {
    $('.map').show();
    $('#map').sdgMap({
      geoData: geoData,
      geoCodeRegEx: geoCodeRegEx,
      serviceUrl: '/sdg-indicators-baltimore/Maryland_Baltimore_City_Neighborhoods.geojson',
      nameProperty: 'LABEL',
      idProperty: 'LABEL',
      width: 710,
      height: 400,
    });
  }
};

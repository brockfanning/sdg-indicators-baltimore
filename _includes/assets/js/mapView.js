var mapView = function () {

  "use strict";

  this.initialise = function(geoData, geoCodeRegEx) {
    $('.map').show();
    $('#map').sdgMap({
      geoData: geoData,
      geoCodeRegEx: geoCodeRegEx,
      serviceUrl: 'http://brock.tips/sdg-indicators-baltimore/baltimore.geo.json',
      nameProperty: 'LABEL',
      idProperty: 'LABEL',
      width: 710,
      height: 350,
    });
  }
};

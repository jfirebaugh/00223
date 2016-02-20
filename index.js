var tileCover = require('tile-cover');
var bboxPolygon = require('turf-bbox-polygon');

global.tileCount = function (latLngBounds, minZoom, maxZoom) {
  var sum = 0;
  for (var i = minZoom; i <= maxZoom; i++) {
    sum += tileCover.tiles(
      bboxPolygon([
        latLngBounds.getWest(),
        latLngBounds.getSouth(),
        latLngBounds.getEast(),
        latLngBounds.getNorth()
      ]).geometry,
      { min_zoom: i, max_zoom: i }).length;
  }
  return sum;
};

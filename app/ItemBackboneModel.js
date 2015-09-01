/* jslint node: true */
"use strict";

var Backbone = require('backbone');

var ItemBackboneModel = Backbone.Model.extend({
  coordinates: function coordinates() {
    return [this.get('geojson').coordinates[1], this.get('geojson').coordinates[0]];
  },
  data: function data() {
    return this.get('data');
  }
});

module.exports = ItemBackboneModel;
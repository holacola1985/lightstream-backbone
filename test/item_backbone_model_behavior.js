/* jslint node: true */
/* jslint expr: true */
/*global describe, it, before, beforeEach, after, afterEach */
"use strict";

var chai = require('chai');
var should = chai.should();

var ItemBackboneModel = require('../app/ItemBackboneModel');

describe('ItemBackboneModel behavior', function () {
  it('should get coordinates from geojson property', function () {
    var item = {
      geojson: {
        type: 'Point',
        coordinates: [3.9, 43.6]
      }
    };

    var model = new ItemBackboneModel(item);

    model.coordinates().should.have.length(2);
    model.coordinates()[0].should.equal(43.6);
    model.coordinates()[1].should.equal(3.9);
  });

  it('should get data form model', function () {
    var item = {
      data: {
        firstname: 'John',
        lastname: 'Doe'
      }
    };

    var model = new ItemBackboneModel(item);

    model.data().firstname.should.equal('John');
  });
});
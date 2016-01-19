var assert = require('assert');
var geonames = require('./../js/main.js');
describe('GeoNames', function() {
    describe('constructor', function () {
        it('should return object after creation', function () {
            var geo = new geonames('test');
            assert.equal('test', geo.username);
            assert.equal(null, geo.latitude);
        });
    });
    describe('setters', function () {
        it('should ', function () {
            var geo = new geonames('test');
            assert.equal('test', geo.username);
            assert.equal(null, geo.latitude);
        });
    });
});

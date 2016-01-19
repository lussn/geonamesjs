const FIND_NEARBY_PLACE_JSON = 'findNearbyPlaceNameJSON';
const HOST = 'http://api.geonames.org/';
const POPULATION_OVER_1000 = 'cities1000';

var sendRequest = function (url, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4) {
            var cities = JSON.parse(xhttp.responseText).geonames;
            callback(cities);
        }
    }.bind(this);
    xhttp.send();
};

var createUrl = function (action, params) {
    return HOST + action + '?' + params + "&username=" + this.username;
};

var createParams = function () {
    var params = '';
    params += (this.radius !== null) ? '&radius=' + this.radius : '';
    params += (this.maxRows !== null) ? '&maxRows=' + this.maxRows : '';
    params += (this.population !== null) ? '&cities=' + this.population : '';
    params += (this.latitude !== null) ? '&lat=' + this.latitude : '';
    params += (this.longitude !== null) ? '&lng=' + this.longitude : '';
    return params;
};

var GeoNames = function GeoNames (username) {
    this.username = username;
    this.latitude = null;
    this.longitude = null;
    this.radius = null;
    this.maxRows = null;
    this.population = null;

    this.findNearbyPlaceNameJSON = function (latitude, longitude, callback) {
        var params = createParams.call(this);
        var url = createUrl.call(this, FIND_NEARBY_PLACE_JSON, params);
        sendRequest.call(this, url, callback);
    };

    this.setRadius = function (radius) {
        this.radius = radius;
        return this;
    };

    this.setMaxRows = function (maxRows) {
        this.maxRows = maxRows;
        return this;
    };

    this.setPopulationOver1000 = function () {
        this.population = POPULATION_OVER_1000;
        return this;
    };

    this.setLatitude = function (latitude) {
        this.latitude = latitude;
        return this;
    };

    this.setLongitude = function (longitude) {
        this.longitude = longitude;
        return this;
    };

    return this;
};

module.exports = GeoNames;

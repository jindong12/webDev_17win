/**
 * app.js
 * main application script
 */
"use strict";

//Seattle real time fire 911 calls API
//for more details on this API and the returned data, see 
//https://data.seattle.gov/Public-Safety/Seattle-Real-Time-Fire-911-Calls/kzjm-xkqj
var seattle911API = "https://data.seattle.gov/resource/grwu-wqtk.json?$where=datetime is not null&$order=datetime desc&$limit=500";

//OpenStreetMap tile server (no access token required)
//see http://wiki.openstreetmap.org/wiki/Tile_servers
//for more information and styles
var osmTiles = {
    url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
};

//latitude and longitude of Seattle city center
var seattleCoords = [47.61, -122.33];

//default zoom level (0-18 for street maps)
//other map styles may have different zoom ranges
var defaultZoom = 13;

//create Leaflet map and add the OSM tile layer
var map = L.map("map").setView(seattleCoords, defaultZoom);
L.tileLayer(osmTiles.url, {
    attribution: osmTiles.attribution
}).addTo(map);

/**
 * add code to fetch the `seattle911API` URL
 * when the data returns, parse it as JSON and 
 * for each object in the returned array, add a
 * marker to the map. remember that each object 
 * has a `latitude` and `longitude` property.
 * also bind a popup to each marker
 * that shows the contents of the `type`, `datetime`,
 * and `address` properties from the object.
 * format the `datetime` using moment(...).fromNow() to 
 * get human-friendly time durations (e.g., "an hour ago")
 * See http://leafletjs.com/reference-1.0.2.html#marker
 * for details on creating markers, and see
 * http://leafletjs.com/reference-1.0.2.html#marker-bindpopup
 * for details on binding popup content to a marker
 */

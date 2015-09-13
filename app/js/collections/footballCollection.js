'use strict'

var FootballCollection = require('ampersand-rest-collection');
var FootballModel = require('../models/footballModel');
module.exports = FootballCollection.extend({
    url: 'http://www.api.football-data.org/alpha/soccerseasons/398/fixtures/',
    model: FootballModel,
    ajaxConfig: function () {
      return {
        headers: {
          'X-Auth-Token': '901fbe59245a4ea6bbcef49184252a62'
        },
        xhrFields: {}
      };
    },
    parse: function(data) {
        var el = data;
        console.log('data', data);
        return el.fixtures;

    }
});
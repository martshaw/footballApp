'use strict';
var AmpersandModel = require('ampersand-model');

module.exports = AmpersandModel.extend({
  /**
  * default attributes
  */
  props: {
    _links: {
      awayTeam: {
        href: ''
      },
      homeTeam: {
        href: ''
      },
      self: {
        href: ''
      }
    },
    awayTeamName: '',
    homeTeamName: '',
    date: '',
    result: {
      goalsAwayTeam: '',
      goalsHomeTeam: ''
    },
    urlStrip: ''
  },
  initialize: function() {
    this.set('urlStrip', this._urlStrip);
  },
  _urlStrip: function(data) {
    var mn = data.lastIndexOf('/'),
        jk = data.length;
    return data.slice(mn + 1, jk);
  },
  init: function() {
    this.set('sentimentClass', this.setSetimentSize());
  }
});
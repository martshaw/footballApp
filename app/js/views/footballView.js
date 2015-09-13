var FootballView = require('ampersand-view');
var AmpersandApp = require('ampersand-app');
var FootballModel = require('../models/footballModel');
var FixtureView = require('../views/fixtureView');
var Router = require('../router.js');

module.exports = FootballView.extend({
  router: new Router(),
  template: function() {

  },
  initialize: function () {
    this.fixtures = {};
    this.collection.fetch({reset: true});
    this.listenTo(this.collection, 'reset', this.render);
    this.listenTo(this, 'wordClicked', this.wordClicked);
  },
  /**
   * _wordClicked update the present selected word
   */
  wordClicked: function (word) {
    console.log('change', word)
    this.presentWord && this.presentWord.model.set('status', false);
    this.presentWord = word;
    this.presentWord.model.set('status', true);
  },
  setFixtures: function (data) {
      var test = new FixtureView({
          model: data,
          el: this.el
      });
      test.render();
  },
  getWords: function (id) {
    return this.words[id];
  },
  render: function () {
    var that = this;
    this.el.innerHTML = '';
    console.log('data', this.collection.models);
    this.collection.models.forEach( function (data){
      that.setFixtures(data);
    });
    return this;
  }
});
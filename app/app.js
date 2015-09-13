'use strict';
// it just requires ampersand-app too!
var App = require('ampersand-app');
var FootballModel = require('./models/topicModel');
var FootballCollection = require('./collections/footballCollection');
var FootballView = require('./views/footballView');
var Router = require('./router.js');

module.exports = App.extend({
    init: function () {
          var footballVew = new TopView({
            el: document.getElementById('fixtures'),
            collection: new TopCollection()
          });
          this.router = new Router();
          this.router.history.start();
          this.router.on('route:fixture', function(wd) {
            var wdId = wordsVew.getWords(decodeURIComponent(wd));
            wordsVew.trigger('wordClicked', wdId);
            wordsInfoView.trigger('updateTopInfo', wdId.model);
          });
    }
});
window.app = App.init();

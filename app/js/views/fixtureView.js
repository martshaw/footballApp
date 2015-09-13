var topInfoView = require('ampersand-view');
var Router = require('../router.js');

module.exports = topInfoView.extend({
    router: new Router(),
    template: function (match) {
        this.el.innerHTML = this.el.innerHTML + `<li class=""><a href="football/${match.urlStrip(match._links.self.href)}" data-hook="${match.date}"> ${match.date} - ${match.homeTeamName} - ${match.awayTeamName}</a></li>`;
    },
    events: {
    'click a': 'onWordClick'
  },
  onWordClick: function (event) {
    event.preventDefault();
    var that = this;
    var id = this.model.get("id");
    //console.log('this', this, that, this.model.get('id'));
    //this.router.navigate('word/' + encodeURIComponent(event.target.dataset.hook));
  },
    initialize: function () {
      //this.listenTo(this.model, 'reset change', this.render);
    },
    render: function () {
      this.template(this.model.toJSON());
    }
});
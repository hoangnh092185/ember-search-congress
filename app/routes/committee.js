import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  page: null,
  model:
    function(params) {
      this.set('page', params.page);
      var key = config.myApiKey;
      var url = 'http://congress.api.sunlightfoundation.com/committees?apikey=' + key + "&subcommittee=false&page=" + params.page;
      return Ember.$.getJSON(url).then(function(responseJSON){
        return responseJSON;
      });
    },
    actions: {
      next(){
        var nextPage = parseInt(this.get('page')) + 1;
        this.transitionTo('committee', nextPage);
      },
      back(){
        var prevPage = parseInt(this.get('page')) - 1;
        this.transitionTo('committee', prevPage);
      }
    }
});

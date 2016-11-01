import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model:
    function(params) {
      var key = config.myApiKey;
      var url = 'http://congress.api.sunlightfoundation.com/bills?apikey=' + key ;
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
      },
      search(params) {
        this.transitionTo('billsearch', params.keywords, 1);
      },
    }
});

import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  page: null,
  keywords: null,
  model:
  function(params) {
    this.set('page', params.page);
    this.set('keywords', params.keywords);
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/bills/search?apikey=' + key + '&query=' + params.keywords + "&page=" + params.page;
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON;
    });
  },
  actions: {
    search(params) {
      this.transitionTo('billsearch', params.keywords, 1);
    },
    next(){
      var nextPage = parseInt(this.get('page')) + 1;
      this.transitionTo('billsearch', this.get('keywords'), nextPage);
    },
    back(){
      var prevPage = parseInt(this.get('page')) - 1;
      this.transitionTo('billsearch', this.get('keywords'), prevPage);
    }
  }
});

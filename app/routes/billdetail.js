import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  bill_id: null,
  model:
  function(params) {
    this.set('bill_id', params.bill_id);
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/bills/search?apikey=' + key + '&bill_id=' + params.bill_id;
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON;
    });
  },
});

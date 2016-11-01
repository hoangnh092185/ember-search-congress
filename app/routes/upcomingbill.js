import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model:
    function(params) {
      var key = config.myApiKey;
      var url = 'http://congress.api.sunlightfoundation.com/upcoming_bills?apikey=' + key;
      return Ember.$.getJSON(url).then(function(responseJSON){
        return responseJSON;
      });
    },
});

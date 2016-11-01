import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(committees) {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/committees?apikey=' + key + "&subcommittee=true&parent_committee_id=" + committees.committee_id ;
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON;
    });
  }
});

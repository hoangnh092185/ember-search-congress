
import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['last_action_at'],
  sortedBills: Ember.computed.sort('model.results', 'sortBy'),
  actions: {
    searchBill(){
      var params = { keywords: this.get('keywords')
      };
      this.sendAction('search', params)
    }
  }
});

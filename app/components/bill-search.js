import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    searchBill(){
      var params = { keywords: this.get('keywords')
      };
      this.sendAction('search', params)
    }
  }
});

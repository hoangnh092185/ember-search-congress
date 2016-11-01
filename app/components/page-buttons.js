import Ember from 'ember';

export default Ember.Component.extend({
  pages: Ember.computed('count', function() {
    return Math.ceil(this.get('count') / this.get('page.per_page'));
  }),
  canGoBack: Ember.computed('page', function() {
    var page = parseInt(this.get('page.page'));
    return (page > 1);
  }),
  canGoForward: Ember.computed('page', function() {
    var page = parseInt(this.get('page.page'));
    return !(this.get('page.count') / this.get('page.per_page') < 1);
  }),
  actions: {
    back() {
      this.sendAction('back');
    },
    next() {
      this.sendAction('next');
    }
  },


});

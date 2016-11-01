import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lookup-committee', 'Integration | Component | lookup committee', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{lookup-committee}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#lookup-committee}}
      template block text
    {{/lookup-committee}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

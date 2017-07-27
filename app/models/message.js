import Model from 'ember-pouch/model';
import DS from 'ember-data';

const {
  attr,
  belongsTo
} = DS;

export default Model.extend({
  message: attr('string'),
  post: belongsTo('post', { async: false })
});

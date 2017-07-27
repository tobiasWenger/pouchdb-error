import Model from 'ember-pouch/model';
import DS from 'ember-data';

const {
  attr,
  belongsTo
} = DS;

export default Model.extend({
  comment: attr('string'),
  post: belongsTo('post', { async: false })
});

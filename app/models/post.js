import Model from 'ember-pouch/model';
import DS from 'ember-data';

const {
  attr,
  hasMany
} = DS;

export default Model.extend({
  title: attr('string'),
  comments: hasMany('comment', { async: false, dontsave: true }),
  messages: hasMany('message', { async: false, dontsave: true }),
});

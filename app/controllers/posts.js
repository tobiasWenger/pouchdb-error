import Ember from 'ember';

const {
  Controller,
  get
} = Ember;

export default Controller.extend({
  actions: {
    addPost() {
      const store = get(this, 'store');
      const post = store.createRecord('post', { title: 'new post' });
      post.save();
    }
  }
});

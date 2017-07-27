import Ember from 'ember';

const {
  Controller,
  get,
  computed: { union },
  RSVP: { Promise }
} = Ember;

export default Controller.extend({
  commentsAndMessages: union('model.comments', 'model.messages'),

  actions: {
    addStuff() {
      this._createAndSave().then(() => {
        this._deleteAll();
      });
    },

    addStuffWithDelay() {
      this._createAndSave().then(() => {
        setTimeout(() => {
          this._deleteAll();
        }, 3000);
      });
    }
  },

  _deleteAll() {
    get(this, 'commentsAndMessages').forEach((commentOrMessage) => {
      commentOrMessage.destroyRecord();
    });
  },

  _createAndSave() {
    const store = get(this, 'store');
    const post = get(this, 'model');

    const comment = store.createRecord('comment', {
      post: post
    });

    const message = store.createRecord('message', {
      post: post
    });

    return Promise.all([
      comment.save(),
      message.save()
    ]);
  }
});

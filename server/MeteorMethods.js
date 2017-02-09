Meteor.methods({

  'questions.insert': function(text) {
    check(text, String); // Check if text is a String
    if (! this.userId) { // Check if user is logged in
      throw new Meteor.Error('not-authorized');
    }
    Questions.insert({
      text: text,
      createdAt: new Date(), // current time
      owner: Meteor.userId(),
      privateState: false,
      comments: []
    });
  },

  'questions.remove': function(questionId) {
    check(questionId, String);
    Questions.remove(questionId);
  },

  'questions.setPrivate': function(questionId, booleanState) {
    check(questionId, String);
    Questions.update(questionId, { $set: { privateState: booleanState } });
  },

  'comments.insert': function(questionId, text) {
    check(text, String);
    Questions.update(questionId, {$push: {comments: text}});
  }

});

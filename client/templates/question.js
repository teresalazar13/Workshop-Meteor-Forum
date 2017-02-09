Template.question.helpers({
  ownerUsername: function() {
    return Meteor.users.findOne({"_id": this.owner}).username;
  },

  isOwner: function() {
    return this.owner == Meteor.userId();
  },

  privateState: function() {
    return this.privateState;
  },

  id: function() {
    return this._id;
  },

});

Template.question.events({
  'click .delete': function() {
    Meteor.call('questions.remove', this._id);
  },

  'click .toggle-private': function() {
    Meteor.call('questions.setPrivate', this._id, !this.privateState);
  }
});

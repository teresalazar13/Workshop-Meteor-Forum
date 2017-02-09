Template.questionPage.helpers({
  username: function() {
    return Meteor.users.findOne({"_id": this.owner}).username;
  }
});

Template.questionPage.events({

  'submit .new-comment': function(error) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    var target = event.target;
    var text = target.text.value;

    // Call method to insert question
    Meteor.call('comments.insert', this._id, text);

    // Clear form
    target.text.value = '';
  },

});

Template.questionPage.helpers({
  username: function() {
    return Meteor.users.findOne({"_id": this.owner}).username;
  }
});

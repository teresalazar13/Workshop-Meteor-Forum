Template.question.helpers({
  ownerUsername: function() {
    return Meteor.users.findOne({"_id": this.owner}).username;
  }
});

Template.question.events({

});

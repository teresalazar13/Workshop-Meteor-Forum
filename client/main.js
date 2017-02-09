Template.body.onCreated(function bodyOnCreated() {
  Meteor.subscribe('questions');
});

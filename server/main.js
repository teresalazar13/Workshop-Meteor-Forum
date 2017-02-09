Meteor.publish('questions', function() {
  return Questions.find({
    $or: [
        { privateState: { $ne: false } },
        { owner: this.userId },
      ],
  });
});

Meteor.publish("usersData", function() {
  return Meteor.users.find({}, {
      fields: {
          "username": true,
      }
  });
});

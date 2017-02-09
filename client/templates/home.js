Template.home.helpers({

  listOfQuestions: function() {
    list = [
      {text: 'Tu queres tu tens?'},
      {text: 'Soma e segue?'},
      {text: 'Tudo bem?'},
    ];
    return list;
  },

  collectionOfQuestions: function() {
    return Questions.find({});
  }

});

Template.home.events({

  'submit .new-question': function(error) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    var target = event.target;
    var text = target.text.value;

    // Call method to insert question
    Meteor.call('questions.insert', text);

    // Clear form
    target.text.value = '';
  },

  'click .delete': function(error) {
    Questions.remove(this._id);
  }

});

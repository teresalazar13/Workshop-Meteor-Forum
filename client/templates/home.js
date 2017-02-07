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

    // Insert a question into the collection
    Questions.insert({
      text: text,
      createdAt: new Date(), // current time
    });

    // Clear form
    target.text.value = '';
  },

});

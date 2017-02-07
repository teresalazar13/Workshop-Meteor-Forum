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

});


Router.route('/', function () {
  this.render('home');
});



Router.route('/questionPage/:_id', function () {
  this.render('questionPage', {
    data: function () {
      return Questions.findOne({_id: this.params._id});
    }
  });
});

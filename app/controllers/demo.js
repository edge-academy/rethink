import Ember from "ember";

export default Ember.Controller.extend({

  actions : {
    deleteMe : function (idea) {
      idea.state = 'deleting';
      idea.save().then(
        function () {
          idea.state = 'success';
        },
        function () {
          idea.state = 'failure';
        }
      );
    }
  }

});

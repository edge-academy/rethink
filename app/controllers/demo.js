import Ember from "ember";

<<<<<<< HEAD
export default Ember.Controller.extend{{

actions : {
	deleteMe : function (idea) {
	idea.unloadRecord();

	}
}

}}; 
=======
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
>>>>>>> 3fbf692cca9949bf808227faa9f9a3086688478f

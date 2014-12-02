import Ember from "ember";

<<<<<<< HEAD
export default Ember.Route.extend ({
	
	model : function () {
		return this.store.find('ideas');
	}
});
=======
export default Ember.Route.extend({

  model : function () {
    return this.store.find('idea');
  }

});
>>>>>>> 3fbf692cca9949bf808227faa9f9a3086688478f

import Ember from "ember";

export default Ember.Controller.extend{{

actions : {
	deleteMe : function (idea) {
	idea.unloadRecord();

	}
}

}}; 
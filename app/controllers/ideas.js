import Ember from "ember";

export default Ember.Controller.extend({
  highestRankedIdea : function () {
    var model = this.get('model'),
      highest = null;

    return highest;
  }.property('model', 'model.@each').readOnly(),

  actions : {
    myClickAction : function (idea) {
      idea.set('state', 'isDeleting');
      idea.remove().then(
        function () {
          idea.set('state', 'isDeleted');
        },
        function () {
          idea.set('state', '');
        }
      );
    }
  }

});

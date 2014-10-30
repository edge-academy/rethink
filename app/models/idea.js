import DS from "ember-data";

var attr = DS.attr,
    belongsTo = DS.belongsTo,
    Idea = DS.Model.extend({
      title : attr(),
      description : attr(),
      category : belongsTo('category'),
      media : attr(),
      author : belongsTo('user')
    });

Idea.reopenClass({ FIXTURES : [
  {
    id: 1,
    title: 'Cras Fringilla Amet',
    description : '',
    category : 1,
    media : {
      type : 'image',
      src  : 'fixtures/photos/photo1.png'
    },
    author : 1
  }
]});

export default Idea;

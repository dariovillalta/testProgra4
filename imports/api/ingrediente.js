export const Ingredientes = new Mongo.Collection('ingredientes');

let Schema = {};

Schema.ingrediente = new SimpleSchema({
  nombre: {
    type: String
  },
  descripcion: {
    type: String
  },
  formula: {
    type: Number
  }
});


Ingredientes.attachSchema(Schema.ingrediente);

if(Meteor.isServer){
  Meteor.methods({
    'ingrediente.create'(ingrediente){
      Ingredientes.insert(ingrediente, function(err){
        if(err){
          console.log('llegamos2');
          throw new Meteor.Error('Error Mio: ' + err);
        }
      });
    },
      'ingrediente.remove'(ingrediente){
       Ingredientes.remove(ingrediente, function(err){
         if(err)
          throw new Meteor.Error('Error removing place: ' + err);
       });
     }
  });
}
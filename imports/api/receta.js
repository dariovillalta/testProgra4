export const Recetas = new Mongo.Collection('recetas');
import { Ingredientes } from './ingrediente.js';

let Schema = {};

Schema.receta = new SimpleSchema({
  nombre: {
    type: String
  },
  descripcion: {
    type: String
  },
  ingredientes: {
    type: [Schema.ingrediente]
  }
});


Recetas.attachSchema(Schema.receta);

if(Meteor.isServer){
  Meteor.methods({
    'receta.create'(receta){
      Recetas.insert(receta, function(err){
        if(err){
          console.log('llegamos2');
          throw new Meteor.Error('Error Mio: ' + err);
        }
      });
    },
      'receta.remove'(receta){
       Recetas.remove(receta, function(err){
         if(err)
          throw new Meteor.Error('Error removing place: ' + err);
       });
     },
     'receta.update'(idGlobal, ingredientesNuevos){
        Recetas.update({id: idGlobal}, {
          $set: { ingredientes: ingredientesNuevos }
        }, function(err){
          if (err) {
            throw new Meteor.Error('Error pppp: ' + err);
          };
        });
     }
  });
}
import "./ingredientes.html";
import { Ingredientes } from '../../api/ingrediente.js';

Template.ingredientes.helpers({
  currentUser: function(){
    return Meteor.user();
  },
  ingredientes: function(){
    return Ingredientes.find({});
  },
  hayIngredientes: function(){
    var ing = Ingredientes.find().fetch().length;
    var bandera = false;
    if(ing>0)
      bandera=true;
    return bandera;
  }
});

Template.ingredientes.onRendered(function(){
  Meteor.subscribe('Users');
});

Template.ingredientes.events({
  "click #borrar": function(){
    Meteor.call('ingrediente.remove', this, function(err){
      if(err){
        console.log(err);
        Materialize.toast("Error inesperado", 4000);
      }else {
        Materialize.toast("Eliminado", 4000);
      }
    });
  },

  "click #agregar": function(){
    var ingredienteCreated= {
      nombre: $('#nombre').val(),
      descripcion: $('#descripcion').val(),
      formula: $('#formula').val()
    }
    Meteor.call('ingrediente.create', ingredienteCreated, function(err){
      if(err){
        console.log(err);
        Materialize.toast("Error inesperado", 4000);
      }else {
        Materialize.toast("Ingrediente agregado", 4000);
      }
    });
  }
});
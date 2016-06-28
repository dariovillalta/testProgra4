import "./home.html";
import { Ingredientes } from '../../api/ingrediente.js';
import { Recetas } from '../../api/receta.js';

Template.home.helpers({
  currentUser: function(){
    return Meteor.user();
  },
  ingredientes: function(){
    return Ingredientes.find({});
  },
  recetas: function(){
    return Recetas.find({});
  },
  cadaIng: function(receta){
    return Recetas.find({_id: receta._id}, {fields: {'ingredientes':1}});
  }
});

Template.home.onRendered(function(){
  Meteor.subscribe('Users');
});

Template.home.events({
  "click .request": function(){
    alert(this.username);
  	this.requestFriendship();
    Materialize.toast("Solicitud Enviada");
  }
});
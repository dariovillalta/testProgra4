import "./navBar.html"

Template.navBar.events({
  'click #logout'(event){
    Meteor.logout();
    Router.go('/');
  }
});

Template.navBar.rendered = function() {
	$('#logIn').leanModal();
};

Template.navBar.events({
  "click #login"(event){
      var User = {
        username: $("#usernameInput").val(),
        email: $("#usernameInput").val(),
        password: $("#passwordInput").val()
      }
      Meteor.loginWithPassword($("#usernameInput").val(), $("#passwordInput").val(), function(error){
        if(error){
          Materialize.toast("El correo electrónico y/o contraseña que has introducido son incorrectos.", 4000);
        }else{
          Materialize.toast("Login Successfully", 4000);
          Router.go('/home');
        }
      });
  }
});
import { Router } from "meteor/iron:router"
import "../ui/layout/layout.js"
import "../ui/navBar/navBar.js"
import "../ui/footer/footer.js"
import "../ui/home/home.js"
import "../ui/ingredientes/ingredientes.js"

Router.configure({
    layoutTemplate:"layout"
});

Router.route('/',function(){
    this.render("home");
});

Router.route('/ingredientes',function(){
    this.render("ingredientes");
});
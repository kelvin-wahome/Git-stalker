var githubRequest = require('./../js/gitstalker.js').githubRequestModule;

$(document).ready(function(){
 $('#getting-repos-form').submit(function(event){
   console.log('I AM GROOT');
   event.preventDefault();
   console.log("working");
   var userName = $("#goal").val();
   console.log(userName);
   $("goal").val("");
   githubRequest(userName);

 });
});

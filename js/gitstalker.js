 var githubRequest = require('./../js/gitstalker.js').githubRequest;

$(document).ready(function(){
  $('#getting-repos-form').submit(function(event){
    debugger;
    event.preventDefault();
    console.log("working");
    var userName = $("#userName").val();
    debugger;
    $("userName").val("");
    githubRequest(userName);

  });

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "a10b336912072a299a803ddb0d1fe6e56439dd30";

},{}],2:[function(require,module,exports){
var apiKey = require ('./../.env').apiKey;
function githubRequest(userName){
  console.log("response");
  $.get('https://api.github.com/users/'+ userName + '?access_token='+apiKey).then(function(response){
    // console.log(JSON.stringify(response));

    $("#userName").text("Full Names:" +response.name);
    $("#userFollowing").text("Following:" + response.following);

}).fail(function(error){
  console.log(error.responseJSON.message);
});

  $.get('https://api.github.com/users/'+ userName + '/repos?access_token='+apiKey).then(function(response){
    console.log(JSON.stringify(response));

    for (var index = 0; index <= response.length; index++ ) {


              if( response[index].description === null) {
                  $('#showRepoInfo').append("<li> <h5>Repo name: " + response[index].name + ". </h5> <p> This repo has no description </p> </li>");
              } else {

                  $('#showRepoInfo').append("<li> <h5>Repo name: " + response[index].name + ". </h5> <p>" + response[index].description + "</p> </li>");
              }
          }


});
}
exports.githubRequestModule=githubRequest;

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../js/gitstalker.js":2}]},{},[3]);

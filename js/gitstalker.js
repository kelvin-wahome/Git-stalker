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

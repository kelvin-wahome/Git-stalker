var apiKey = require ('./../.env').apiKey;
exports.githubRequest=function(userName){
  console.log("response");
  $.get('https://api.github.com/users/'+ userName + '?access_token='+apiKey).then(function(response){
    console.log(response);
    $("#userName").text("Full Names:" +response.name);
    $("#userRepostories").text("Repo:" + response.public);
    $("#userFollowing").text("following:") + response.following);

}).fail(function(error){
  console.log(error.responseJSON.message);
});
};

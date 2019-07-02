// instantiate http;
const http = new easyHTTP();

// GET POST
http.get('https://jsonplaceholder.typicode.com/posts',
function(err, post) {    // post will be whatever 'self.http.responseText' is equal to in simplehttp.js
  if (err) {
    console.log(err);
  } else 
  console.log(posts);
});













//https://jsonplaceholder.typicode.com/
// instantiate http;
// const http = new easyHTTP;   // for whatever reason, I was typing out easyHTTP() instead of easyHTTP;

// NOTE: You can only use the same address if you have a different request. The GET AND POST use same link

/*GET POST */
// http.get('https://jsonplaceholder.typicode.com/posts',
// function(err, posts) {    // post will be whatever 'self.http.responseText' is equal to in simplehttp.js
//   if (err) {
//     console.log(err);
//   } else 
//   console.log(posts);
// });


/*
TO GET A SINGLE POST
http.get('https://jsonplaceholder.typicode.com/posts/1', = would return a single post
http.get('https://jsonplaceholder.typicode.com/posts12',    THIS WOULD BE A 404 ERROR
function(err, post) {    // post will be whatever 'self.http.responseText' is equal to in simplehttp.js
  if (err) {
    console.log(err);
  } else 
  console.log(posts);
});
*/


// instantiate http object
const http = new easyHTTP;


// Creating the data
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
}

//Creating the HTTP post request (similar process as before) 
http.post('https://jsonplaceholder.typicode.com/posts', 
data, function(err, post) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  } 
});









//https://jsonplaceholder.typicode.com/
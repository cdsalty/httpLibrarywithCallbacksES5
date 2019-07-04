const http = new easyHTTP;



//      Get Posts

http.get('https://jsonplaceholder.typicode.com/posts',
  function(err, posts){
    if(err) {
      console.log(err);
    } else {
      console.log(posts); 
    }
  });

  


 // Create the DATA (for POST)
const data = {
  title: 'POST POST POST',
  body: 'This is the POST I created'
};
  
// Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', 
// data, function(err, post){
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Update the data using ' PUT '
http.put('https://jsonplaceholder.typicode.com/posts/1',
data, function(err, post){
  if(err){
    console.log(err);
  } else {
    console.log(post);
  }
});

  
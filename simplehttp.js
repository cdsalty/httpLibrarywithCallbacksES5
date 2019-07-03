
/*
This is a refresh using ES5 and prototypes; will update later versions to fetch;
  - including practice with making request and prototypes
*/ 

function easyHTTP() {
  this.http = new XMLHttpRequest(); // setting http to the HTTP Request Object (only property we have)
}

// Making a HTTP GET Request (GET: used to retrieve data from a specified resource)
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let self = this; // to capture 'this' scope otherwise using 'this' inside the function wouldn't work.
  this.http.onload = function() {  // the ES6 arrow syntax would prevent this extra jargon (this.http.onload = () => {)
    if(self.http.status === 200) { // check the status and make sure it's 200
       callback(null, self.http.responseText); // error will be the first thing passed back if exist using null
    } else {
      callback(`Error: Possibly an id-ten-t error... ` + self.http.status); // if error, such as 404
    }
  }
  this.http.send();
}



// Make an HTTP POST Request (POST: used to submit data to be processed by a specified resource)
easyHTTP.prototype.post = function(url, data, callback) { // data comes in as an object so must stringify it
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application.JSONP');

  let self = this; 
  this.http.onload = function() {  
    callback(null, self.http.responseText); // the responseText should be the new post added.
  }
  this.http.send(JSON.stringify(data));
}


// Make an HTTP PUT Request
easyHTTP.prototype.put = function(url, data, callback) { // data comes in as an object so must stringify it
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application.JSONP');

  let self = this; 
  this.http.onload = function() {  
    callback(null, self.http.responseText); // the responseText should be the new post added.
  }
  this.http.send(JSON.stringify(data));
}


// Make an HTTP DELETE Request (similar to GET)
easyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);

  // 9:50pm
}












  
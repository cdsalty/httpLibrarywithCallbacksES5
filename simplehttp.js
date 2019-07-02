
/*
This is a refresh using ES5 and prototypes; will update later versions to fetch;
  - including practice with making request and prototypes
*/ 

function easyHTTP(){
  this.http = new XMLHttpRequest(); // setting http to the HTTP Request Object (only property we have)
  // previously used 'xhr' = and also xhr.open(), etc.
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let self = this; // to capture 'this' scope
  this.http.onload = function() {  // the ES6 arrow syntax would prevent this problem (this.http.onload = () => {)
    // check the status and make sure it's 200
    if(self.http.status === 200) {
       callback(null, self.http.responseText); // error will be the first thing passed back if there is one
       // but we want to have an error shown if an error occurs; other than 200? 
       // Do this with our else statement that's getting added in now.
    } else {
      callback(`Error: Possibly an id-ten-t ` + self.http.status); // if error, such as 404
    }
  }

  this.http.send();
  
}

// inside a function, the 'this' keyword belongs to that function. 8:55

// Make an HTTP POST Request

// Make an HTTP PUT Request

// Make an HTTP DELETE Request












/* Deleted and will use as reference if needed.
function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let self = this;
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}
*/
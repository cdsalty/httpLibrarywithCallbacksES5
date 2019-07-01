/*
This is a refresh using ES5 and prototypes; will update later versions to fetch;
  - including practice with making request and prototypes
*/ 

function easyHTTP(){
  this.http = new XMLHttpRequest(); // setting http to the HTTP Request Object
  // previously used 'xhr' = and also xhr.open(), etc.
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url){
  this.http.open('GET', url, true);

  this.http.onload = function(){
    // check the status and make sure it's 200
    if(this.http.status === 200) {
       console.log(this.http.responseText);
    }
  }

  this.http.send();

}



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
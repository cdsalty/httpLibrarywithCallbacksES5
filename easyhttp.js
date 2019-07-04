function easyHTTP() {
  this.http = new XMLHttpRequest();
}



//    ***     GET request     ***

easyHTTP.prototype.get = function(url, callback){
  this.http.open('GET', url, true);
  
  let self = this;
  this.http.onload = function(){
    if(self.http.status === 200) {
      callback(null, self.text.responseText);   // want the error passed back first to stop it
    } else {
      callback('Error: ' + self.http.status);
    }
  }
  this.http.send();
}


//    ***     POST request     ***

easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');
  
  let self = this;
  this.http.onload = function(){
    callback(null, self.http.responseText);
  }
  this.http.send(JSON.stringify(data));
}


//    ***     PUT request     ***
        // Same as post, just swapping the word 'PUT' for 'POST'
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');
    
  let self = this;
  this.http.onload = function(){
    callback(null, self.http.responseText);
  }
  this.http.send(JSON.stringify(data));
  }
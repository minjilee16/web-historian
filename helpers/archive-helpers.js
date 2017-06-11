var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var http= require('http'); 
var request = require('request');
/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!



exports.readListOfUrls = function(callback) {
  // find file with URLS 
  // return the contents 
  var path = exports.paths.list;
  fs.readFile(path, 'utf8',function(error, data) {
    if (error) { 
      console.error(error);
    } else { 
      callback(data.split("\n"));
    } 
  });
};


// 1) 
// input: url, callback function 
// ouput: boolean 

exports.isUrlInList = function(url, callback) {
  // access the file 
  // get the data 
  fs.readFile(exports.paths.list, 'utf8',function(error, data) {
    if (error) { 
      console.log(error);
    } else { 
      // split the data into an array by line break 
      var dataStorage = data.split('\n');
      // declare new variable as false 
      var result = false;
      // iterate data storage 
      for (var i =0; i< dataStorage.length; i++) {
        // check if data storage contains url 
        if( dataStorage[i] === url ){
          //reassign the variable to ture; 
          result = true; 
        }
      }
      // pass the result to callback funciton 
      callback(result);
    } 
  });
};



exports.addUrlToList = function(url, callback) {
  // access the file 
  fs.readFile(exports.paths.list, 'utf8',function(error, data) {
    if (error) { 
      console.error(error);
    } else { 
      // split the data converting to an array 
      var dataStorage = data.split("\n");
      // if the url doesn't exist at data storage 
      if(dataStorage.indexOf(url) === -1 ) {
        // write nwe url at the last element of dataStorage 
        fs.writeFile(exports.paths.list, dataStorage[dataStorage.length-1]=url, callback);
      }
    } 
  });
};



// explanation 
// check if the url is in archrived 
exports.isUrlArchived = function(url, callback) {
 // initialize search for archived sites through archived path for stored url data
  fs.readFile(exports.paths.archivedSites + '/' + url, 'utf8', function(err, data) {
     //if there is an error in retrieving the data
    if (err) {
       //and the error is that the file does not exist
      if(err = 'ENOENT') {
         //pass false into the callback
        callback(false);
      } else {
         //return error information on the error
        console.log(err);
      }
    //otherwise, if the data was retrieved successfully
    } else {
     //pass true into the callback 
      callback(true);
    }
  });
};


// exports.downloadUrls = function(urls) {
//   // Iterate over urls and pipe to new files
//   _.each(urls, function (url) {
//     if (!url) { return; }
//     request('http://' + url).pipe(fs.createWriteStream(exports.paths.archivedSites + '/' + url));
//   });
// };


exports.downloadUrls = function(urls) {
 // url we are given we can assume those are pending urls
 // iterate the urls array 
 // get request to each url using http get method 
 // option argument will be an object having hostname as url and path as index.html 
 // write file of each url 
  for(var i = 0; i < urls.length; i++) {
    if( !urls[i] ) {
      return; 
    }
    request( 'http://' + urls[i] ).pipe( fs.createWriteStream(exports.paths.archivedSites + '/' + urls[i]))
  }

// exports.paths.archivedSites
  

  // console.log(fs.createWriteStream(exports.paths.archivedSites) )
  // for(var i = 0; i < urls.length; i++) {
  //   // console.log('urls',fs.createWriteStream(exports.paths.archivedSites))
  //   request.stream(urls[i], function(response) {
  //     response.pipe(file);
  //     // console.log('responseeee',response.pipe(file));
  //   });
  // }

  // for(var i= 0; i < urls.lengt)

// var request = http.get("http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg", function(response) {
//   response.pipe(file);
// });
  

  // var file = fs.createWriteStream(exports.paths.archivedSites);

  // for(var i =0; i< urls.length; i++) {

  //   request(urls[i], function (error,response,body) {
  //     console.log('error:', error); // Print the error if one occurred
  //     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //     console.log('body:', body); // Print the HTML for the Google homepage.
  //   }).pipe(fs.createWriteStream(exports.paths.archivedSites))
  // }

// var request = require('request');
// request('http://www.google.com', function (error, response, body) {
 
// var download = function(url, dest, cb) {
//   var file = fs.createWriteStream('/index.html');
//   var request = http.get(url, function(response) {
//     response.pipe(file);
//     file.on('finish', function() {
//       file.close(cb);  // close() is async, call cb after close completes.
//     });
//   }).on('error', function(err) { // Handle errors
//     fs.unlink(dest); // Delete the file async. (But we don't check the result)
//     if (cb) cb(err.message);
//   });
// };



};






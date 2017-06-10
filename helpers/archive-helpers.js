var fs = require('fs');
var path = require('path');
var _ = require('underscore');

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
  var str= fs.readFile(path, 'utf8',function(error, data) {
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
  // var path = exports.paths.list; 
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
  // var path = exports.paths.list; 
  // get the data 
  fs.readFile(exports.paths.list, 'utf8',function(error, data) {
    if (error) { 
      console.log(error);
    } else { 
      // split the data into an array by line break 
      // consolelog('dataStorage', dataStorage);
      var dataStorage = data.split('\n');
      // declare new variable as false 
      for (var i = 0; i < dataStorage.length-1; i++){
        if( dataStorage.indexOf(url) !== -1 ) {
          dataStorage[i] = url; 
        } else  {
          dataStorage[dataStorage.length-1] = url; 
        }
      }


    
      (console.log('after', dataStorage ));

      //  // declare new variable as false 
      // var result = false;
      // // iterate data storage 
      // for (var i =0; i< dataStorage.length; i++) {
      //   // check if data storage contains url 
      //   if( dataStorage[i] === url ){
      //     //reassign the variable to ture; 
      //     result = true; 
      //   }
      // }
      // // pass the result to callback funciton 
      // callback();








      callback(); 
    } 
  });

};

exports.isUrlArchived = function(url, callback) {
};

exports.downloadUrls = function(urls) {
};

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

  // fs.readFileSyne returns the value we expect
  
  var path = exports.paths.list;

  var str = fs.readFile(path, 'utf8', callback );
  // var str = fs.readFile(path, 'utf8'); 
  console.log('***************str', str);
  // return str;
console.log("Carry on executing");

  // console.log('PATHs*************************', path  );
  // console.log('callback*************************', callback  );
  // console.log('read*************************',fs.readFile(path, 'utf8', callback )  );
};
console.log("Carry on executing");
// exports.readListOfUrls(function(urls) {
//   urls=exports.paths.list
//         expect(urls).to.deep.equal(urlArray);
//         done();
//   });


// var fs = require('fs');

//     var fileName = 'readme.txt';
//     var str = fs.readFile(fileName, 'utf8', function (err, data) {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//        console.log('result read: ' + data);
//     });


// var str = fs.readFileSync(fileName, 'utf8');
// console.log('result read: ' + str);



exports.isUrlInList = function(url, callback) {
};

exports.addUrlToList = function(url, callback) {
};

exports.isUrlArchived = function(url, callback) {
};

exports.downloadUrls = function(urls) {
};

const path = require('path');

const string = __filename;

// path.sep: /
console.log('path.sep:', path.sep); 
// path.delimiter: :
console.log('path.delimiter:', path.delimiter); 
console.log('------');
// path.dirname(): /Users/gp/Desktop/node_module
console.log('path.dirname():', path.dirname(string));
// path.extname(): .js
console.log('path.extname():', path.extname(string));
// path.basename(): path.js
console.log('path.basename():', path.basename(string));
// path.basename(): path
console.log('path.basename():', path.basename(string, path.extname(string)));
console.log('------');
// path.parse() { root: '/',
//   dir: '/Users/gp/Desktop/node_module',
//   base: 'path.js',
//   ext: '.js',
//   name: 'path' }
console.log('path.parse()', path.parse(string));
// path.format(): C:\users\gplee/pathjs
console.log('path.format():', path.format({
    dir: 'C:\\users\\gplee',
    name: 'path',
    ext: 'js',
}));
// path.normalize(): C:/users\\gplee\path.js
console.log('path.normalize():', path.normalize('C://users\\\\gplee\\\path.js'));
console.log('------');
// path.isAbsolute(): false
console.log('path.isAbsolute():', path.isAbsolute('C:\\'));
// path.isAbsolute(): false
console.log('path.isAbsolute():', path.isAbsolute('./home'));
console.log('------');
// path.relative(): ../C:\
console.log('path.relative():', path.relative('C:\\users\\gplee\\path.js', 'C:\\'));
// path.join(): /Users/gp/Desktop/users/gplee
console.log('path.join():', path.join(__dirname, '..', '..', '/users', '.', '/', 'gplee'));
// path.resolve(): /gplee
console.log('path.resolve():', path.resolve(__dirname, '..', 'users', '.', '/gplee'));
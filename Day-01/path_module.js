//The `path` module in Node.js handles file and directory paths, providing functions for joining, normalizing, and resolving paths.

const path= require('path')


let ext=path.extname('C:\\Desktop\\node\\Day-01\\test.txt');
console.log(ext);

let basename=path.basename('C:\\Desktop\\node\\Day-01\\test.txt');

console.log(basename);
console.log(__dirname);
console.log(__filename);

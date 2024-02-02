//to know the system properties 
// applications use this module to check system compatibility

const os= require('os');

console.log(os.arch());
console.log(os.platform());
console.log(os.networkInterfaces());
console.log(os.cpus());
console.log(os.totalmem());
console.log(os.freemem());


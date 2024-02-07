const fs= require('fs');


//readinf a file 


let filecont= fs.readFileSync('f1.txt');

console.log("file cont---->>>" + filecont);


//writing into the file 


fs.writeFileSync('f2.txt', 'cccccccccccccccccccc')  //  data willm be overridden not updates , prev data is lissed 




fs.appendFileSync('f2.txt', 'cdddddddddddddddddddddddd');


fs.unlinkSync('f2.txt');  //delete the file 

console.log("hey budyy!!!");

/// if the file passed isnot exist then writing , appending functions will makw one 

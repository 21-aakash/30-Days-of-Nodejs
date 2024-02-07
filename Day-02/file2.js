const fs =require('fs');


// fs.mkdirSync('mydirectory');   //create a directory 


let content=fs.readdirSync('C:\\Desktop\\node\\Day-02\\mydirectory');

console.log("here is  ", content); 


console.log(fs.existsSync('mydirectory'));  // check file/directory exists or not 


fs.rmdirSync('mydirectory');// to delete the directory


console.log("khtam");

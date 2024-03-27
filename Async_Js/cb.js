const fs =require('fs')


console.log("-----First Line----")



fs.readFile('f1.text', cb1)

function cb1( error, data)
{
      if(error) console.log(error)

      console.log("File 1 Data" + data);

}
fs.readFile('f2.text', cb2)

function cb2( error, data)
{
      if(error) console.log(error)

      console.log("File 2 Data" + data);

}













// let data1 =fs.readFileSync('f1.text')

// console.log("File1 data is : "+ data1)



// let data2 =fs.readFileSync('f2.text')

// console.log("File2 data is : "+ data2)


console.log("-----Last Line----")
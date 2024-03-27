
const middleone = require('./middlewares/middle1')
const middletwo = require('./middlewares/middle2')

const express= require('express');
const morgan = require('morgan');

const app= express();


app.use(express.json())
let courses= [

    {id:1, name: 'Javacript'},
    {id:2, name: 'C++'},
    {id:3, name: 'Python'}
]

//read the data-----------------------------------------------------------------------------------------------------------

app.use(morgan);


app.use(middleone);
app.use(middletwo);
app.use(morgan);

app.get('/', (req, res)=>{

    res.send("this is express js ");

});
app.get('/courses', (req, res)=>{

    res.send(courses);

});
app.get('/about', (req, res)=>{

    res.send("this is about section  ");

});
app.get('/courses/:name', (req, res)=>{

    console.log(req.params); 
    let course= courses.find(course=>course.name===req.params.name);



    if(!course)res.status(404).send('This is courses does not exixt');
    res.send(course);

    //(course => course.name === req.params.name): This is an arrow function used as the testing function for find(). It takes one parameter, course, which represents each element of the courses array as the find() method iterates through it. The function checks if the name property of the current course object is equal to the name parameter obtained from req.params. This is likely part of a web application where req.params.name contains the name of the course obtained from a request.


});

//post the data---------------------------------------------------------------------------------------------------------------------------------------------------------------

 app.post('/courses', (req, res)=>{

        const course= {

            id: courses.length+1, 
            name: req.body.name
        }

           courses.push(course);
              res.send(course);


 })

//Update the data---------------------------------------------------------------------------------------------------------------------------------------------------------------

app.put('/courses/:coursename', (req, res)=>{


let course =courses.find(courses => courses.name=== req.params.coursename);

if(!course)res.status(404).send('This is courses does not exixt');

course.name= req.body.name;

res.send(course);


})

//Delete the data---------------------------------------------------------------------------------------------------------------------------------------------------------------

app.delete('/courses/:coursename', (req, res)=>{


  let newcourses = courses.filter(courses=>courses.name!==req.params.coursename);

  courses=newcourses;

  res.send(courses);


})


//Route parameters 

// app.get('/courses/:route_paramter', (req, res)=>{
    
// console.log(req.params);      


// })
// app.get('/courses/:route_paramter', (req, res)=>{
    
// res.send(req.params.route_paramter);



// })

app.listen(3000, ()=>{
    console.log("Port is running");

})
// child processes is a node moudule used to create sub-processes within a script
//you can perform different task with your secript by just using some methods



const cp = require('child_process')


// cp.execSync('calc')

console.log('output'+cp.execSync('node demo.js'));
cp.execSync('start chrome https://www.freejobalert.com/new-updates/');


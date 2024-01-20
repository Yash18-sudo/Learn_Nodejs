const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();


const bodyParser  = require('body-parser');
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/',(req,res)=>{

    var data = {
        a:1,
        b:3
    }
    res.send(data);
});

app.get('/check',(req,res)=>{
    res.send('Yello world');
});




const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes)

const menuItemRoutes = require('./routes/menuItemRoutes');
app.use('/menu',menuItemRoutes)

const PORT = process.env.PORT || 3000;

app.listen(PORT);
    // newPerson.name = data.name;
    // newPerson.age = data.age;
    // newPerson.work = data.work;
    // newPerson.mobile = data.mobile;
    // newPerson.email = data.email;
    // newPerson.address = data.address;
    // newPerson.salary = data.salary;












// var os = require('os');
// var fs = require('fs');

// var user = os.userInfo();
// console.log(user);
// console.log(user.username);
// console.log(user.password);

// fs.appendFile('greetings.txt', 'Hi  ' + user.username + '! \n', ()=>{console.log('file is created')});

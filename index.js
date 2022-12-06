const express = require('express');
const cors = require('cors');
const app = express();

// const port = process.env.PORT || 3000;
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Wow ! Going to learn  node js and Express');
});

const users = [
    {id:0, name:"Arif", email:"arif@gmail.com", phone:'01755886677'},
    {id:1, name:"Saikat", email:"saikat@gmail.com", phone:'01755886699'},
    {id:2, name:"Nabil", email:"nabil@gmail.com", phone:'01755886611'},
    {id:3, name:"Anik", email:"anik@gmail.com", phone:'01755882299'},
    {id:4, name:"Abir", email:"abir@gmail.com", phone:'01755884455'}
];


app.get('/users', (req, res)=>{
    //use query parameter
    const search = req.query.search;
    if(search){
       const searchResult = users.filter(user=> user.name.toLocaleLowerCase().includes(search));
       res.send(searchResult);
    }else{
        res.send(users);
    }
    
});

//app METHOD
app.post('/users',(req, res)=>{
   const newUser = req.body;
   newUser.id = users.length;
   users.push(newUser);

    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})

// dynamic api
app.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.listen(port, ()=>{
    console.log('listening to port', port);
});
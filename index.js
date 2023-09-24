//objects in javascript are key value pairs

const person = {
    name: "john",
    age: 30
}
//dot notation 

 console.log(person.name); 

 //Sample notes express server

 //import express

 const express = require('express');

 //import path

 const app = express();
 //Assignment 2

NOTES = [
    {
    "id":1,
    "title":"First Note",
    "description":"This is the first note"
},
{
    "id":2,
    "title":"Second Note",
    "description":"This is the second note"
},
{
    "id":3,
    "title":"Third Note",
    "description":"This is the third note"
}
]


 app.get('/',firstRoute)

 function firstRoute(req,res){
    res.send("Hello world");
 }

app.get('/notes',(req,res)=>{
    res.send(NOTES);
})

app.get('/notes/:id',(req,res)=>{
    const id = req.params.id;
    for(var i=0;i<NOTES.length;i++){
        if(NOTES[i].id == id){
            res.send(NOTES[i]);
        }
        else{
            res.send("NOTES not found");
        }
    }

})


 app.listen(3000,printMessage)

 function printMessage(){
    console.log('server is running on port 3000')
 }

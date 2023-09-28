// http express server to perform crud on notes.json file

const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

const port = 3000;

function getNotes()
{
    const data = fs.readFileSync('notes.json','utf-8');
    return JSON.parse(data);
}

function saveNotes(data){
    return fs.writeFileSync('notes.json',JSon.Stringly(data));

}

app.get('/',(req,res)=>{
    return res.sendFile(__dirname+"/index.html")
      //res.send("Hello World");
});

app.get('/notes',(req,res)=>{
    let notes = getNotes()
    return res.json(notes)
})

app.get('/notes/:id',(req,res)=>{
    let id = req.params.id;
    let notes = getNotes()
    for(let i=0;i<notes.length;i++){
        if(notes[i].id == id){
            return res.send(notes[i])
        }
    }
    return res.status(404).send('No Notes Found')

})

app.post('/notes',(req,res)=>{
    let (title,descripton) = req.body;
    if(!tilte || !description){
        return res.status(400).send('Please enter Title and Description')
    }

    let notes = getNotes();
    let newNote = {
        id: notes.length+1,
        title,
        description
    }

    notes.push(newNote)
    saveNotes(notes)
})


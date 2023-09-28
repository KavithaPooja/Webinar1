//sample todo express backend app

const express = require('express');

const app = express();

app.use(express.json());

const mongoose = require('mongoose');

const port = 3000;

const notesSchema = new mongoose.Schema({
    title: String,
    description: String
});

const Note = mongoose.model('Note', notesSchema);


// let numberOfRequests = 0;

// function middleware(req, res, next){
//     numberOfRequests++;
//     console.log(`Number of requests: ${numberOfRequests}`);
//     next();
// }

// app.use(middleware)

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/notes', async (req, res) => {

    const notes = await Note.find({});
    res.send(notes);

});

app.get('/notes/:noteId', async (req, res) => {
    const id = req.params.noteId;

    const reqNote = await Note.findById(id);

    if (reqNote) {
        res.send(reqNote);

    } else {
        res.status(404).send(`Note with id ${id} not found`);
    }
}
);

app.post('/notes', async (req, res) => {

    //post the notes to mongodb database

    const title = req.body.title;
    const description = req.body.description;

    const note = new Note({
        title:title,
        description:description
    });

    const savedNote = await note.save();

    res.send(savedNote);

}
);


app.put('/notes/:noteId', async (req, res) => {
    const id = req.params.noteId;
    const { title, description } = req.body;

    //update the notes in mongodb database

    const reqNote = await Note.findById(id);

    if (reqNote) {
        reqNote.title = title;
        reqNote.description = description;

        const savedNote = await reqNote.save();

        res.send(savedNote);

    } else {
        res.status(404).send(`Note with id ${id} not found`);

    }
}
);

app.delete('/notes/:noteId', async (req, res) => {
    const id = req.params.noteId;
    
    //delete the notes from mongodb database

    const reqNote = await Note.findByIdAndDelete(id);

    if (reqNote) {
        res.send("Note deleted");

    } else {
        res.status(404).send(`Note with id ${id} not found`);
    }

}
);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    mongoose.connect("mongodb+srv://211001060:wasdijkl@cluster0.nu3fss4.mongodb.net/").then(() => {
        console.log("Connected to the database!");
    })
})
const express = require('express');

const app = express();

app.use(express.json());

const mongoose = require('mongoose');

const port = 3000;

const notesSchema = new mongoose.Schema({
    Image: String,
   Caption: String
});

const Note = mongoose.model('Note', notesSchema);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/notes', async (req, res) => {

    const notes = await Note.find({});
    res.send(notes);

});

app.get('/notes/:noteImage', async (req, res) => {
    const id = req.params.noteId;

    const reqNote = await Note.findByImage(id);

    if (reqNote) {
        res.send(reqNote);

    } else {
        res.status(404).send(`Note with Image ${Image} not found`);
    }
}
);

app.post('/notes', async (req, res) => {

    //post the notes to mongodb database

    const Image = req.body.Image;
    const Caption = req.body.Caption;

    const note = new Note({
        Image:Image,
        Caption:Caption
    });

    const savedNote = await note.save();

    res.send(savedNote);

}
);


app.put('/notes/:noteImage', async (req, res) => {
    const title= req.params.notetitle;
    const { Image,Caption } = req.body;

    //update the notes in mongodb database

    const reqNote = await Note.findByImage(Image);

    if (reqNote) {
        reqNote.Image= Image;
        reqNote.Caption = Caption;

        const savedNote = await reqNote.save();

        res.send(savedNote);

    } else {
        res.status(404).send(`Note with Image ${Image} not found`);

    }
}
);

app.delete('/notes/:noteImage', async (req, res) => {
    const Caption= req.params.noteImage;
    
    //delete the notes from mongodb database

    const reqNote = await Note.findByImageAndDelete(Image);

    if (reqNote) {
        res.send("Note deleted");

    } else {
        res.status(404).send(`Note with Image ${Image} not found`);
    }

}
);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    mongoose.connect("mongodb+srv://Kavitha_T:Kavitha%40212005@kavitha.ua92bgn.mongodb.net/ ").then(() => {
        console.log("Connected to the database!");
    })
})

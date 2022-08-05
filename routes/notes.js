//  '/api/notes' endpoints

const notes = require('express').Router();
const fs = require('fs');
const { title } = require('process');
const uuid = require('uuid');


// GET method
notes.get('/', (req, res) => {
    // get notes from note file
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) { console.log(err) }
        else { res.send(JSON.parse(data)) }
    })
});

//Get with ID param - this functionality is handled INSIDE the html/js for the file and doesn't need api call
/*
notes.get('/:notes_id', (req, res) => {
let noteId = req.params.notes_id ;

    // get a certain note from note file

   fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) { console.log(err) }
        else { (JSON.parse(data)) }
    }).then((jsonData)=>{

    })


    //  res.send(`[{ "title":"Test Title","text":"Test text" }, { "title":"Test Title2","text":"Test text2"}]`) 

});
*/


// POST method
notes.post('/', (req, res) => {
    // const uuid = uuid.v4() ;
    let { title, text, id } = req.body;
    if (!id) { id = uuid.v4() }
    //console.log(id)
    const notesBody = {
        title: title, text: text, id: id
    }
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            res.json('Error in reading file')
        }
        else {
            //console.log(data);
            let theNotes = JSON.parse(data);
            theNotes.push(notesBody);
            fs.writeFile('./db/db.json', JSON.stringify(theNotes), (err) => {
                if (err) {
                    console.log(err)
                    res.json('Error in posting feedback')
                }
                else {
                    console.log('Notes updated');
                    res.json(theNotes);
                    /*res.json = { status: 'success', body: theNotes}*/
                }
            })
        }
    })
});

// DELETE Method
notes.delete('/:notes_id', (req, res) => {
    noteID = req.params.notes_id;

    //use noteID to splice out object from array in Notes file 
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            res.json('Error in reading file')
        }
        else {
            let theNotes = JSON.parse(data);
            let errorMiss = true;
            for (let i = 0; i < theNotes.length; i++) {
                if (theNotes[i].id === noteID) {
                    theNotes.splice(i, 1)
                    errorMiss = false;
                }
            }
            fs.writeFile('./db/db.json', JSON.stringify(theNotes), (err) => {
                if (err || errorMiss) {
                    errorMiss ? errorMiss = '- ID not matched' : errorMiss = ''
                    console.log(err)
                    res.json('Error in deleting item' + errorMiss)
                }
                else {
                    console.log('Note deleted, other notes updated');
                    res.json(theNotes);
                }
            })
        }
    })

});

module.exports = notes;

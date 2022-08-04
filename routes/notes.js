const notes = require('express').Router();
const fs = require('fs')

notes.get('/', (req, res) => {

    // get notes from note file

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) { console.log(err) }
        else { res.send(JSON.parse(data)) }
    })


    /*  res.send(`[{ "title":"Test Title","text":"Test text" },
            { "title":"Test Title2","text":"Test text2"}]`) */

});

//I think this is handled INSIDE the html/js for the file and doesn't need api call
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

notes.post('/', (req, res) => {

    const notesBody = req.body;
    console.log('Save Note')

    // push note into note file
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        //let x=[];
        if (err) { console.log(err) }
        else {  (JSON.parse(data)) }
    })
        .then((jsonData) => {
            console.log('jsonData: ' + json.stringify(jsonData));
            jsonData.push(notesBody)
        })
        .then((finalJson) => {
            fs.writeFile('./db/db.json', json.stringify(finalJson), (err) => {
                if (err) { console.log(err) }
                else { console.log('Notes updated') }
            })
        })



});

notes.delete('/:notes_id', (req, res) => {
    noteID = req.params.notes_id;

    //use noteID to splice out object from array in Notes file 
    console.log('DeleteNote')
});

module.exports = notes;


/*    let parsedData =[];
    //console.log(fs.readFile('./db/db.json', (err) => { console.log(err) }))
  res =  fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) { console.log(err) }
        else {
             parsedData =  JSON.parse(data);
            //console.log(parsedData)

            return  parsedData;

            // return parsedData
            //return data
        }
    });
  //  console.log(parsedData)
//res = parsedData
*/
   //  res= fs.readFile('./db/db.json','utf8', (err,data) => { console.log(err) }).then((data) => res.json(JSON.parse(data)));
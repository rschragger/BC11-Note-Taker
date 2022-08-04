const notes = require('express').Router();
const fs = require('fs')

notes.get( '/', (req, res) => {
    
    // res = fs.readFile('./db/db.json', 'utf8', (err, data) => {
    //     if (err) { console.log(err) }
    //     else { return JSON.parse(data) }
    // })
//}

const read = (path, type) => new Promise((resolve, reject) => {
    fs.readFile(path, type, (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
  
  //example how call this function
  let x = read('./db/db.json', 'utf8')
      .then((data) =>  data ) //console.log('your file is '+data))
      .catch((err) => console.log('error reading file '+err))

return x

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
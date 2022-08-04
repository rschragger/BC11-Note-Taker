const fs = require('fs');

 function x() {

    const read = (path, type) => new Promise((resolve, reject) => {
        fs.readFile(path, type, (err, data) => {
          if (err) reject(err)
          resolve(data)
        })
      })
      
      //example how call this function
     let y = read('./db/db.json', 'utf8')
          .then((data) =>  data ) //console.log('your file is '+data))
          .catch((err) => console.log('error reading file '+err))
    
console.log(y)


    // fs.readFile('./db/db.json', 'utf8', (err, data) => {
    //     if (err) {
    //         console.log(err)
    //     }
    //     else {
    //         //console.log(data)
    //         const parsedData = await JSON.parse(data);
    //         return parsedData
    //         //return data
    //     }
    // })
};

// }'this result:' +


console.log(x())
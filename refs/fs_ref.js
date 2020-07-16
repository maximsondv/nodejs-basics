const fs = require('fs');
const path = require('path');
//File System
/*fs.mkdir(path.join(__dirname, 'notes'), err => {
    if (err) throw err;
    console.log('Folder was created');
});*/

/*fs.writeFile(
    path.join(__dirname, 'notes', 'my.txt'), 'Hello World', err => {
        if (err) throw err;
        console.log('File was created');
        fs.appendFile(path.join(__dirname, 'notes', 'my.txt'), 'From append file', err => {
            if (err) throw err;
            console.log('File was changed')
        });
        fs.readFile(path.join(__dirname, 'notes', 'my.txt'), 'utf-8', (err, data) => {
            if (err) throw err;
            console.log(data);
        });
    }
);*/

fs.rename(path.join(__dirname, 'notes', 'my.txt'), path.join(__dirname, 'notes', 'mynotes.txt'), err => {
    if (err) throw err;
    console.log('File was renamed');
});
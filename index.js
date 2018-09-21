const moveFile = require('move-file');
const cypress = require('cypress');
const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/view/index.html'));
});

app.get('/runtest', (req, res) => {
  res.sendFile(path.join(__dirname + '/view/index.html'));
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});


// return cypress.run({
//             browser: environment.browser,
//             viewport: environment.viewport,
//             project: '.',
//             reporter: 'json'
//         });



// (async () => {
//     await moveFile('source/unicorn.png', 'destination/unicorn.png');
//     console.log('File moved');
// })();

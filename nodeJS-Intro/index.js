const fs = require('fs');

fs.readFile('./data.txt', { encoding: 'utf8' }, (err, data) => {
    console.log(data);
    console.log(err);
});
fs.writeFile('./data.txt', "oldData", { encoding: 'utf8' }, (err) => {
    console.log(err);
});

fs.watchFile('./data.txt', (current, previous) => {
    console.log('File Changed');
});
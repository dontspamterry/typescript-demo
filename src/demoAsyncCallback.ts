import fs = require('fs');
import {Goody} from './goody';

// Sync read
console.log(JSON.parse(fs.readFileSync('../testFiles/good.json', 'utf-8')));

console.log('');

// Async read with callback
fs.readFile('../testFiles/good.json', 'utf-8', (err: Error, data: string) => {
    if (data) {
        console.log(data);
    } else {
        console.log(err.message);
    }
});

// Async read with non-existent file
fs.readFile('../testFiles/good12.json', 'utf-8', (err: Error, data: string) => {
    if (data) {
        console.log(data);
    } else {
        console.log(err.message);
    }
});

// Callback hell
fs.readFile('../testFiles/good.json', 'utf-8', (err: Error, data: string) => {
    if (data) {
        const goody: Goody = JSON.parse(data);
        if (goody.nextFile) {
            fs.readFile(goody.nextFile, 'utf-8', (err2: Error, data2: string) => {
                if (data2) {
                    console.log(data2);
                } else {
                    console.log(err2);
                }
            });
        } else {
            console.log('No next file found');
        }
    } else {
        console.log(err.message);
    }
});

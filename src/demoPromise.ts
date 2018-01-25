import fs = require('fs');
import {Goody} from './goody';

type Resolve = (data: string) => void;
type Reject = (err: Error) => void;

function readJsonFileAsync(filename: string): Promise<string> {
    return new Promise((resolve: Resolve, reject: Reject) => {
        fs.readFile(filename, 'utf-8', (err: Error, result: string) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

readJsonFileAsync('../testFiles/good.json')
    .then(
        (val: string) => {
        console.log(val);
    })
    .catch((err: Error) => {
        console.log(err.message);
    });

// Promise chaining
readJsonFileAsync('../testFiles/good.json')
    .then((val: string) => {
        const goody: Goody = JSON.parse(val);

        return goody.nextFile;
    })
    .then((val: string) => {
        return readJsonFileAsync(val);
    })
    .then((val: string) => {
        console.log(val);
    })
    .catch((err: Error) => {
        console.log(err.message);
    });

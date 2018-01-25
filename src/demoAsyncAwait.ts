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

// Promise chaining equivalent
async function demo(): Promise<string> {
    let goody: Goody;
    let json: string;
    try {
        json = await readJsonFileAsync('../testFiles/good.json');
        console.log(json);
        goody = JSON.parse(json);
    } catch (err) {
        console.log(err.message);
        throw err;
    }
    try {
        json = await readJsonFileAsync(goody.nextFile);
        console.log(json);
    } catch (err) {
        console.log(err.message);
        throw err;
    }

    return json;
}

demo()
    .then((s: string) => {
        console.log('async await demo done');
    })
    .catch((err: Error) => {
        console.log('ruh-roh. demo gone bad');
    });

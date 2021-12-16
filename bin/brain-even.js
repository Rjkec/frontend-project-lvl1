#!/usr/bin/env node

import {hi} from '../src/cli.js';
import {brainEven} from './brain-logic.js';

const name = hi();

let i = 0;
while (i < 3) {

    const result = brainEven();
    //brainEven()
    console.log('counter',i);
    if (result === true) {
        i++;
        console.log('counter++',i);
        //continue;
    }
    
    if (result === false) {
        console.log('yes, its happening');
        i = 0;
        console.log('final i',i);
    }
}
console.log('Congratulations, ' + name + '!');


/*
 * File: /Users/tonymedrano/Desktop/observables-es6/components/math.js
 * Project: /Users/tonymedrano/Desktop/observables-es6
 * Created Date: Wednesday August 21st 2019
 * Author: tonymedrano
 * -----
 * Last Modified: Wednesday, 21st August 2019 2:29:30 pm
 * Modified By: tonymedrano (info@tonymedrano.com)
 * -----
 * Copyright (c) 2019 Agap2
 */

import {Rx} from 'rxjs';
// RxJS v6+
import { interval } from 'rxjs';
import { sample } from 'rxjs/operators';

//emit value every 1s
const source = interval(1000);
//sample last emitted value from source every 2s
const example = source.pipe(sample(interval(2000)));
//output: 2..4..6..8..
const subscribe = example.subscribe(val => console.log(val));


export default class Math {
    constructor(op) {
        this.op = op;
        this.calc(op);
    }

    static operation(op) {
        return new Math(op)
    }
    calc() {
        console.log(this.op);
    }

}
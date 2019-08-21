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

import {
    Rx
} from 'rxjs';

export default class Math {

    constructor() {
        this.operation = []
    }

    static operation() {
        return new Math()
    }

    sum(num1, num2) {
        this.operation.push(`${num1} + ${num2}: ${num1 + num2}\n`);
    }

    subtract(num1, num2) {
        this.operation.push(`${num1} + ${num2}: ${num1 + num2}\n`);
    }

    multiply(num1, num2) {
        this.operation.push(`${num1} + ${num2}: ${num1 + num2}\n`);
    }

    divide(num1, num2) {
        this.operation.push(`${num1} + ${num2}: ${num1 + num2}\n`);
    }

    print() {
        console.log(this.operation);
        this.operation.forEach(op => {
            console.log(`\x1b[43m${op}\n`);
        });
    }

}
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
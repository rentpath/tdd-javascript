const Money = require('./money');

class Dollar extends Money {

    constructor(amount) {
        super();
        this.amount = amount
    }

    times(multiplier) {
        return new Dollar(this.amount * multiplier);
    }
}

module.exports.Dollar = Dollar;

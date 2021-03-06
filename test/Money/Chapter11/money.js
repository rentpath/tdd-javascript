class Money {
    amount;
    currency;

    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency;
    }

    equals(obj) {
        return (obj.amount === this.amount && obj.currency === this.currency)
    }

    static dollar(amount) {
        return new Money(amount, "USD")
    }

    static franc(amount) {
        return new Money(amount, "CHF")
    }

    times(multiplier) {
        return new Money(this.amount * multiplier, this.currency)

    }

    getCurrency() {
        return this.currency;
    }

    toString() {
        return this.amount + " " + this.currency;
    }
}

module.exports = Money;

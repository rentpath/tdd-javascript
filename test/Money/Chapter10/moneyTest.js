const Money = require("./money");
var assert = require('assert');

describe("Money Test Chapter 10", () => {
    describe("Multiplier", () => {

        it('Test multiplication for Dollar', () => {
            var five = Money.dollar(5);
            assert.deepEqual(Money.dollar(10), five.times(2));
            assert.deepEqual(Money.dollar(15), five.times(3));
        });

        it('Test Equality for Dollar', () => {
            assert.equal(Money.dollar(5).equals(Money.dollar(5)), true);
            assert.equal(Money.dollar(5).equals(Money.dollar(6)), false);
        });

        it('Test multiplication for Franc', () => {
            var five = Money.franc(5);
            assert.deepEqual(Money.franc(10), five.times(2));
            assert.deepEqual(Money.franc(15), five.times(3));
        });

        it('Test Equality for Franc', () => {
            assert.equal(Money.franc(5).equals(Money.franc(5)), true);
            assert.equal(Money.franc(5).equals(Money.franc(6)), false);
        });

        it('Test Equality for mixed currency', () => {
            assert.equal(Money.dollar(5).equals(Money.franc(5)), false);
        });

        it('Test Currency', () => {
            assert.equal("USD", Money.dollar(1).currency)
            assert.equal("CHF", Money.franc(1).currency)
        });

    });
});


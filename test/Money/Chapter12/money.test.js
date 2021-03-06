const Money = require("./money");
const Bank = require("./Bank");

describe("Money Test Chapter 12", () => {
    describe("Currency", () => {

        test('Test multiplication for Dollar', () => {
            let five = Money.dollar(5);
            expect(Money.dollar(10)).toStrictEqual(five.times(2));
            expect(Money.dollar(15)).toStrictEqual(five.times(3));
        });


        test('Test Equality', () => {
            expect(Money.dollar(5)).toStrictEqual(Money.dollar(5));
            expect(Money.dollar(5)).not.toStrictEqual(Money.dollar(6));
            expect(Money.franc(5)).toStrictEqual(Money.franc(5));
            expect(Money.franc(5)).not.toStrictEqual(Money.franc(6));
            expect(Money.franc(5)).not.toStrictEqual(Money.dollar(5));
        });

        test('Test multiplication for Franc', () => {
            let five = Money.franc(5);
            expect(Money.franc(10)).toStrictEqual(five.times(2));
            expect(Money.franc(15)).toStrictEqual(five.times(3));
        });

        test('Test Equality for Franc', () => {
            expect(Money.franc(5)).toStrictEqual(Money.franc(5));
            expect(Money.franc(5)).not.toStrictEqual(Money.franc(6));
        });

        test('Test Equality for mixed currency', () => {
            expect(Money.dollar(5)).not.toStrictEqual(Money.franc(5));
        });

        test('Test Currency', () => {
            expect(Money.dollar(1).currency).toStrictEqual("USD");
            expect(Money.franc(1).currency).toStrictEqual("CHF");
        });

        test('Test Simple Addition', () => {
            let five = Money.dollar(5);
            let sum = five.plus(five);
            let bank = new Bank();
            expect(Money.dollar(10)).toStrictEqual(bank.reduce(sum, "USD"));
        });

    });
});


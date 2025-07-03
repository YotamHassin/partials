"use strict";

import { forEachLength } from './numHelper';

export class NumberSet {
    static Alpha = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    static init = () => {
        const numberSet = new NumberSet();
        var num = 31;
        var str = numberSet.numberToString(num);
        const arr = numberSet.chackComototive();
        const isComototive = arr.filter(x => x.isComototive)
        const isNotComototive = arr.filter(x => !x.isComototive)
        //console.log('numberSet.numberToString '+num, {str, num: numberSet.stringToNumber(str)}); 
        console.log('numberSet.chackComototive', { arr, isComototive, isNotComototive });

    };
    constructor(Alpha = NumberSet.Alpha) { this.alpha = Alpha; }

    alpha = NumberSet.Alpha;

    get Alpha() { return this.alpha; }

    get Base() { return this.Alpha.length; }

    numberToString(Num = 0, dept = 0) {
        //if (dept === 0) {
        //console.log('Num', Num);
        //}
        try {
            var Remainder, IntQuotient;
            if (Num >= this.Base) {
                Remainder = Math.floor(Num % this.Base);
                IntQuotient = Math.floor(Num / this.Base);
                //console.log('Remainder, IntQuotient', {Remainder, IntQuotient});
                const IntQuotientStr = this.numberToString(IntQuotient, dept + 1)
                    .toString();
                const RemainderStr = this.numberToString(Remainder, dept + 1)
                    .toString();

                //console.log('IntQuotientStr, RemainderStr', {IntQuotientStr, RemainderStr});

                return IntQuotientStr + RemainderStr;
            }
            else {
                return this.Alpha[Num].toString();
            }

        }
        catch (error) {
            return error.Message;
        }
    }

    stringToNumber(Num = '') {
        var Res = 0;
        for (let i = 0; i < Num.length; i++) {
            Res += ((this.Alpha.indexOf(Num[i])) * Math.pow(this.Base, Num.length - 1 - i));
        }

        return Res;
    }

    isComototive(num1 = 0, num2 = 0) {
        return (this.numberToString(num1)
            +
            this.numberToString(num2))
            ===
            (this.numberToString(num2)
                +
                this.numberToString(num1))

    }

    static chackComototive(item1 = { num1: 0, num2: 0 }, item2 = { num1: 0, num2: 0 }) {
        return item1.num1 == item2.num1 && item1.num2 == item2.num2
            || item1.num1 == item2.num2 && item1.num2 == item2.num1
    }

    chackComototive() {
        const arr = [{ num1: 0, num2: 0, isComototive: true }];
        //const arr = [];
        forEachLength(10, (num1) => {
            forEachLength(10, (num2) => {
                var item = arr
                    .find((item) =>
                        NumberSet.chackComototive(item, { num1, num2 }));

                if (!item) {
                    const isComototive = this.isComototive(num1, num2);
                    item = { num1, num2, isComototive };
                    //console.log('isComototive ', item);

                    arr.push(item);
                }

            })
        });

        return arr;

    }


}

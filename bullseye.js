"use strict";

const DirectionTwoWay = { left: 'left', rigth: 'rigth' };
//const DirectionThreeWay = { left: 'left', middle: 'middle', rigth: 'rigth' };
const DirectionThreeWay = Object.assign({ middle: 'middle' }, DirectionTwoWay);

// changeDirection
class MyCounter {
    static identifierTextDefault = undefined;
    arr = [{ identifier: '', count: 0 }];
    constructor(isMinusAllowed = true, arr = []) {
        this.isMinusAllowed = isMinusAllowed;
        this.arr = arr;
    }

    find(identifierText = MyCounter.identifierTextDefault) {
        return this.arr.find(arrayItem => arrayItem.identifier == identifierText);
    }

    findCount(identifierText = MyCounter.identifierTextDefault) {
        return this.arr.find(arrayItem => arrayItem.identifier == identifierText).count;
    }

    changeDirection(identifierText = MyCounter.identifierTextDefault, directionTwoWay = DirectionTwoWay.rigth) {
        let arrayItem = this.find(identifierText);
        // identifier not in array, init
        if (!arrayItem) {
            // init new in array
            arrayItem = { identifier: identifierText, count: 0 };
            this.arr.push(arrayItem);
        }

        // identifier is in array

        // move rigth (++)
        if (directionTwoWay == DirectionTwoWay.rigth) {
            arrayItem.count++;
        }
        // move left (--)
        else {
            // is Minus Allowed
            if (this.isMinusAllowed) {
                arrayItem.count--;
            }
            // no Minus Allowed
            else {
                // count > 0 => move left (--)
                if (arrayItem.count > 0) {
                    arrayItem.count--;
                }
                // no left allowed
                else {
                    return false;
                }
            }
        }

        return true;
    }

    static test() {
        let myArrayHandler = new MyCounter(false);
        myArrayHandler.changeDirection('a');
        myArrayHandler.changeDirection('a');
        myArrayHandler.changeDirection('b', DirectionTwoWay.left);
        myArrayHandler.changeDirection('a', DirectionTwoWay.left);
        console.log(myArrayHandler.arr);
        return myArrayHandler;
    }

    // todo: 
    static compare(
        leftHandler = new MyCounter(), leftChar = undefined,
        rigthHandler = new MyCounter(), rigthChar = undefined,
        run = (dir = DirectionThreeWay.middle) => { }) {
        // if bull
        if (rigthChar == leftChar) {
            // same place
            run(DirectionThreeWay.middle);
        }
        else {
            // add sourseChar to single list
            leftHandler.changeDirection(leftChar);

            // add textChar to single list
            rigthHandler.changeDirection(rigthChar);

            // textChar has match in sourceHandler
            if (leftHandler.changeDirection(rigthChar, DirectionTwoWay.left)) {
                rigthHandler.changeDirection(rigthChar, DirectionTwoWay.left);
                run(DirectionThreeWay.left);
            }

            // sourseChar has match in testHandler
            if (rigthHandler.changeDirection(leftChar, DirectionTwoWay.left)) {
                leftHandler.changeDirection(leftChar, DirectionTwoWay.left);
                run(DirectionThreeWay.rigth);
            }
        }
    }

}

//MyArrayHandler.test();

function bullseye(sourseStr = [], testStr = []) {
    let
        // couple same place
        bull = 0,
        // couple not same place
        eye = 0,

        // count 
        sourceHandler = new MyCounter(false),
        testHandler = new MyCounter(false);

    // foreach identifier in testStr
    for (let index = 0; index < testStr.length; index++) {
        const sourseChar = sourseStr[index];
        const textChar = testStr[index];

        MyCounter.compare(
            // source - handle sourse char's count
            sourceHandler, sourseChar,
            // test - handle test char's count
            testHandler, textChar,
            // handle direction change
            (directionChange) => {
                // middle => couple in same place
                if (directionChange == DirectionThreeWay.middle) {
                    bull++;
                }
                // left\rigth => couple not in same place
                else {
                    eye++;
                }
            });

    }

    // handler: {testHandler: testHandler.arr, sourceHandler: sourceHandler.arr}
    return {
        bull, eye,
        strs: [sourseStr, testStr],
        sourceHandler: sourceHandler.arr, testHandler: testHandler.arr
    };

}


//let b = bullseye(['1', '3', '2', '3', '2'], ['1', '2', '3', '2', '3']);
let b = bullseye(['1', '3', '2', '3'], ['1', '2', '3', '2', '3']);
//let b = bullseye(['1', '3', '2', '3', '7', '2', '2'], ['1', '2', '3', '2', '3', '2', '5']);
console.log('bullseye', b);
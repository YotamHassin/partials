// to sum (aritmatic) large numbers.
function sumInString() {
    const biggerNum = '51';
    const smallerNum = '48';

    let res = '';
    //let reminder = 0;
    let cerryTheOne = false;


    for (let index = 0; index < biggerNum.length; index++) {
        let indexR = biggerNum.length - index;
        // get first char
        const char = biggerNum[indexR];
        const sChar = smallerNum[indexR];

        // get first digit
        let digit1 = parseInt(char);
        let digit2 = parseInt(sChar);

        //let digitRes = digit + sDigit + reminder;
        //let digitRes: number = digit + sDigit + (cerryTheOne ? 1 : 0);
        let digitRes = digit1 + digit2 + (cerryTheOne ? 1 : 0);

        if (digitRes >= 10) {
            //reminder = 1; // the 1 from 10
            cerryTheOne = true;
        }
        else {
            //reminder = 0; the 0 from 1-9
            cerryTheOne = false;
        }

        res += (digitRes % 10).toString();
    }

    if (cerryTheOne) {
        return '1' + res;
    }
    return res;
}
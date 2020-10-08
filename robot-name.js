// This is only a SKELETON file for the 'Robot Name' exercise. It's been

import { stringify } from "querystring";

// provided as a convenience to get your started writing code faster.
let usedNames = []

function randomNumber(min,max) {
    return Math.random() * (max - min) + min;
}
function makeName() {
    var name = ""
    let cnt
    for (cnt = 0; cnt < 100; cnt++) {
        name = ""

        name += String.fromCharCode(randomNumber(65,90))

        name += String.fromCharCode(randomNumber(65,90))

        //let numStr = ("000" + Math.floor(randomNumber(1, 999) ))
       // name += numStr.substr(numStr.length - 3)
    for (let digit = 0; digit < 3; digit++) {
        name += Math.floor(randomNumber(0,9))
    }

    if (usedNames.findIndex(uname => name === uname) === -1)
     {break;}
    }
    if (cnt === 100) {
        throw new Error("Max tries exceeded")
    }
    usedNames.push(name)

    return name
}
export class Robot {
    constructor() {
        this._name = makeName()
    }
    get name() {
        return this._name
    }
    reset () {
        this._name = makeName()
    }
 }



Robot.releaseNames = () => { usedNames = [] };

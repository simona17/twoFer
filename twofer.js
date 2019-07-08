"use strict";
exports.__esModule = true;
function twoFer(firstname) {
    debugger;
    if (firstname)
        return 'One for ' + firstname + ', one for me';
    else
        return 'One for you, one for me';
}
var firstname = 'Simo';
console.log(twoFer(firstname));
exports["default"] = twoFer;

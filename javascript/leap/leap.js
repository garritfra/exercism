//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function (input) {
    this.Year = input;
};

Year.prototype.isLeap = function () {
    

    if (this.Year % 400 == 0) {
        return true;
    }
    if (this.Year % 100 == 0) {
        return false;
    }
    if (this.Year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
};

module.exports = Year;

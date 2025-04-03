// Negación
var x;
x = true;
console.log("|", "X", "|", "NOT X", "|");
console.log("______________");
function showResultOperatorNot() {
    if (x === true) {
        x = "T";
        console.log("|", x, "|", "  F  ", "|");
    } else {
        x = "F";
        console.log("|", x, "|", "  T  ", "|");
    }
}
showResultOperatorNot();
x = false;
showResultOperatorNot();

console.log("\n");

// Conjunción (X && Y)
var x, y;
x = true; y = true;
console.log("|", "X", "|", "Y", "|", "X AND Y", "|");
console.log("_____________________");
function showResultOperatorAnd(){
    if (x && y) {
        if (x === true) {
            x = "T";
        } else {
            x = "F";
        }
        if (y === true) {
            y = "T";
        } else {
            y = "F";
        }
        console.log("|", x, "|", y, "|", "   V   ", "|");
    } else {
        if (x === true) {
            x = "T";
        } else {
            x = "F";
        }
        if (y === true) {
            y = "T";
        } else {
            y = "F";
        }
        console.log("|", x, "|", y, "|", "   F   ", "|");
    }
}
showResultOperatorAnd();
x = true; y = false;
showResultOperatorAnd();
x = false; y = false;
showResultOperatorAnd();
x = false; y = true;
showResultOperatorAnd();

console.log("\n");

// Disyunción (X || Y)
x = true; y = true;
console.log("|", "X", "|", "Y", "|", "X OR Y", "|");
console.log("_____________________");
function showResultOperatorOr(){
    if (x || y) {
        if (x === true) {
            x = "T";
        } else {
            x = "F";
        }
        if (y === true) {
            y = "T";
        } else {
            y = "F";
        }
        console.log("|", x, "|", y, "|", "   V   ", "|");
    } else {
        if (x === true) {
            x = "T";
        } else {
            x = "F";
        }
        if (y === true) {
            y = "T";
        } else {
            y = "F";
        }
        console.log("|", x, "|", y, "|", "   F   ", "|");
    }
}
showResultOperatorOr();
x = true; y = false;
showResultOperatorOr();
x = false; y = false;
showResultOperatorOr();
x = false; y = true;
showResultOperatorOr();

console.log("\n");

// Condicional (!X || Y)
x = true; y = true;
console.log("|", "X", "|", "Y", "|", "X CONDITIONAL Y", "|");
console.log("_____________________________");
function showResultOperatorConditional(){
    if (!x || y) {
        if (x === true) {
            x = "T";
        } else {
            x = "F";
        }
        if (y === true) {
            y = "T";
        } else {
            y = "F";
        }
        console.log("|", x, "|", y, "|", "      V        ", "|");
    } else {
        if (x === true) {
            x = "T";
        } else {
            x = "F";
        }
        if (y === true) {
            y = "T";
        } else {
            y = "F";
        }
        console.log("|", x, "|", y, "|", "      F        ", "|");
    }
}
showResultOperatorConditional();
x = true; y = false;
showResultOperatorConditional();
x = false; y = false;
showResultOperatorConditional();
x = false; y = true;
showResultOperatorConditional();

console.log("\n");

// Bicondicional (X === Y)
x = true; y = true;
console.log("|", "X", "|", "Y", "|", "X BICONDITIONAL Y", "|");
console.log("_______________________________");
function showResultOperatorBiconditional(){
    if (x === y) {
        if (x === true) {
            x = "T";
        } else {
            x = "F";
        }
        if (y === true) {
            y = "T";
        } else {
            y = "F";
        }
        console.log("|", x, "|", y, "|", "        V        ", "|");
    } else {
        if (x === true) {
            x = "T";
        } else {
            x = "F";
        }
        if (y === true) {
            y = "T";
        } else {
            y = "F";
        }
        console.log("|", x, "|", y, "|", "        F        ", "|");
    }
}
showResultOperatorBiconditional();
x = true; y = false;
showResultOperatorBiconditional();
x = false; y = false;
showResultOperatorBiconditional();
x = false; y = true;
showResultOperatorBiconditional();
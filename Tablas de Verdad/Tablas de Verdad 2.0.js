// AND: Devuelve verdadero solo si X y Y son verdaderos
console.log("Tabla de verdad del operador && (AND)");
console.log("| X | Y | X && Y |");
console.log("|---|---|--------|");
console.log("| V | V |   V    |");
console.log("| V | F |   F    |");
console.log("| F | V |   F    |");
console.log("| F | F |   F    |");

// OR: Devuelve verdadero si al menos uno de los valores es verdadero
console.log("\nTabla de verdad del operador || (OR)");
console.log("| X | Y | X || Y |");
console.log("|---|---|--------|");
console.log("| V | V |   V    |");
console.log("| V | F |   V    |");
console.log("| F | V |   V    |");
console.log("| F | F |   F    |");

// NOT: Cambia el valor lógico, si es verdadero lo vuelve falso y viceversa
console.log("\nTabla de verdad del operador ! (NOT)");
console.log("| X | !X |");
console.log("|---|----|");
console.log("| V | F  |");
console.log("| F | V  |");

// CONDICIONAL: Si X es verdadero, depende de Y. Si X es falso, siempre es verdadero.
console.log("\nTabla de verdad del operador => (Condicional)");
console.log("| X | Y | X => Y |");
console.log("|---|---|--------|");
console.log("| V | V |   V    |");
console.log("| V | F |   F    |");
console.log("| F | V |   V    |");
console.log("| F | F |   V    |");

// BICONDICIONAL: Devuelve verdadero si X y Y son iguales
console.log("\nTabla de verdad del operador <=> (Bicondicional)");
console.log("| X | Y | X <=> Y |");
console.log("|---|---|---------|");
console.log("| V | V |    V    |");
console.log("| V | F |    F    |");
console.log("| F | V |    F    |");
console.log("| F | F |    V    |");

// Ejemplo práctico con valores
let X = true;
let Y = false;

console.log("\nX = true y Y = false:");
console.log("X && Y (AND):", X && Y);
console.log("X || Y (OR):", X || Y);
console.log("!X (NOT):", !X);
console.log("!X || Y (Condicional):", !X || Y);
console.log("X === Y (Bicondicional):", X === Y);
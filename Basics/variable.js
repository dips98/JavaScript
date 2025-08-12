let id1;
var id2 = 2;
const id3 = "";
accountCity: "Hyderbad";
// id3 = [];

console.table([id1,id2,id3]);

/*
First time i have used console.table([variables name ]) --> out put in table form with index number as u are giving array of variables.


Use let more often than var
let if more good for scope fields

key difference
1. Scoping:
    var is function-scoped.
    let is block scope.

2. Hoisting:
    var is hoisted and initialized with undefined:
    let declarations are also hoisted, but they are not initialized with undefined. If tried to access - reference Error -- > "Temporal Dead Zone."

3. Redeclaration:
    You can redeclare a var variable within the same scope without an error. This can lead to unexpected behavior and bugs.
    let does not allow redeclaration within the same scope:
    Attempting to redeclare a let variable within the same block scope will result in a SyntaxError.


In modern JavaScript, it is generally recommended to use let (and const for variables that should not be reassigned)
over var due to the improved control over variable scope and the prevention of common errors associated with var's 
function-scoping and redeclaration behavior.
*/




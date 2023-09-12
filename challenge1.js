/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
let name = "Rawan";
function printName() {
  console.log(name);
}
printName();
/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
function printAge(year) {
  console.log(2023 - year);
}
printAge(1994);

/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
function printHello(name, ln) {
  if (ln == "en") {
    console.log(`Hello ${name}`);
  } else if (ln === "es") {
    console.log(`Hola ${name}`);
  } else if (ln == "fr") {
    console.log(`Bonjour ${name}`);
  } else if (ln == "tr") {
    console.log(`Merhaba ${name}`);
  } else {
    console.log("Undefined");
  }
}

printHello("Rawan", "en");
printHello("Rawan", "es");
printHello("Rawan", "fr");
printHello("Rawan", "tr");
printHello("Rawan", "ar");

/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

function printMax(num1, num2) {
  if (num1 > num2) {
    console.log(num1);
  } else if (num2 > num1) {
    console.log(num2);
  } else if (num1 == num2) {
    console.log("Equal Numbers");
  }
}
printMax(5, 6);
printMax(7, 2);
printMax(2, 2);

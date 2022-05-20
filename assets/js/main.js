

// for loops

// for (start/before; condtion; step/after){

// do something
// }

// for (let i = 0; i < 7; i++) {

//     console.log(i)
// }
// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//     // sum += i;
//     console.log(i);
// }

// *********
// *********
// *********
// *********
// *********
// console.log("%cfor Loop", "color:yellow");
// let sum = "********";
// for (let i = 0; i < 5; i++) {
//     console.log(sum);
// }
// console.log("%cfor Loop 2", "color:yellow");

// *
// **
// ***
// ****
// *****
// ******

// let start = "";

// for (let i = 0; i <= 5; i++) {
//     start += "*";       // start = start + "*";
//     console.log(start);
// }

// console.log("%cfor Loop 3", "color:yellow");

//5
//6
//7
//8
//9

// for (let i = 5; i <= 9; i++) {
//     console.log(i);
// }

// console.log("%cfor Loop 4", "color:firebrick");

//50
//49
//48
//47
//46
//45

// for (let i = 50; i >= 45; i--) {
//     console.log(i);
// }

// console.log("%cfor Loop 5", "color:lightblue");

// 20 sterne loop in loop
// ***********************
// ***********************
// ***********************

// for (let i = 0; i < 3; i++) { //starte mit i = 0; führe es 3x durch, steige dann aus; was ist zu tun i++; 
//     let stars = "";
//     for (let j = 0; j < 20; j++) {//führe 
//         stars += "*";
//     }
//     console.log(stars); // rufe das Ergebnis auserhalb des loops im loop ab
// }

// console.log("%cfor Loop 6", "color:yellow"); //array

// let country = ['france', 'germany', 'spain']; // loop so lange laufen lassen, bis alle array - inhalte durchlaufen sind
// for (let i = 0; i < country.length; i++) { // starte bei 0 im Array; i ist kleiner als country.length; i++  = durchlaufe
//     console.log(country[i].toUpperCase());
// }

// console.log("%cfor Loop 7", "color:yellow"); //array

//France
//Germany
//Spain

// for (let i = 0; i < country.length; i++) { // starte bei 0 im
//     console.log(country[i].charAt(0).toUpperCase() + country[i].slice(1));
// }

// ------------for of loops-------------------

// mit ES6 gekommen: kurz und bündig, bringt eine Ähnlichkeit zu forEach mit
// console.log("%c forEach", "color:red"); //array
// let numbers = [5, 6, 7, 8, 9, 10];

//wenn ein callback benötigt
// numbers.forEach(elt => console.log(elt)); // array in der console ausgeben mit Arrow-Function



// mit for of kürzer:
// console.log("%cfor of", "color:yellow");

// wenn KEIN callback benötigt
// for (let i of numbers) {
//     console.log(i)
// }

// console.log("%cfor of ÜBUNG", "color:lightblue");

// Übung:Zahlen verdoppeln 
// mit for loop , for of und forEach


// for loop
// let numbers2 = [20, 30, 40];

// for (let i = 0; i < numbers2.length; i++) {
//     // console.log(numbers2[i] * 2);
// }

// for of
// for (let x of numbers2) {
// console.log(x * 2);
// }

// forEach

// numbers2.forEach((elt) => console.log(elt * 2));


// while loop
// while (condition){ do something}

// let index = 0;
// while (index < 5) { console.log(index); index++; } // zählt bis exkl. 5 (also 4)
// while (index < 5) { index++; console.log(index); } --> zählt bis inkl. 5



// WIRD NICHT MEHR GENUTZT --- sich merken, dass es das gibt
// Do While loop
// do{
// do something
// } while (condition);


// let index2 = 0; do {
//     console.log(index2);
//     index2++;

// } while (index2 < 0);


// !!!!!!!!!DANGER!!!!!!!!!!!!

// INFINITE LOOPS 

// for (let i=1; i >=0; i++){
//     console.log(i)
// }

// 
// !!!!!!!!!DANGER!!!!!!!!!!!!



// -----1-1----

// console.log("%cfor  ÜBUNG loope bis 10 und füge davor Hello World jedes mal ein", "color:lightblue");

// let text1 = 'Hello World ';
// for (let i = 0; i <= 10; i++) {
//     // console.log(text1 + )
//     console.log(text1 + i)
// }

// -----1-2----

// console.log("%cfor  ÜBUNG Erstelle ein Array mit den Zahlen 0-10 mit Hilfe einer Schleife", "color: yellow");

// let array = [];
// for (let i = 0; i < 10; i++) {

//     console.log(array.push(i));

// }
// -----1-4----


// console.log("%cfor  ÜBUNG zeige mit for loop alle namen im Array", "color: yellow");

// let names = ["Eric", "Steffen", "Finn", "Simon", "Franzi", "Kim", "Sergio"];

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// };


// -----1-6----

// console.log("%cfor loop Array: ein Array von Bildern erstellen und die Dateinamen von image_1.jpg bis image_100.jpg", "color: yellow");


// let retArray = [];
// let jpeg = '_jpeg';
// let img = 'img_';
// for (i = 1; i < 101; i++) {
//     retArray.push(img + i + jpeg);
// }
// console.log(retArray);




// -----1-7----
console.log("%cfor do .. while", "color: yellow");


let i = 1;
let numIs = '';

while (i < 6) {
    numIs += 'The Number is ' + i + '<br />';
    i++;
}

document.getElementById('result').innerHTML = numIs;
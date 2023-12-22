/*
for each - csak annyit csinál, hogy végigmegy az elemeken 

The forEach() method in JavaScript is used to iterate over elements in an array and perform a specified action or operation for each element.

Here's the basic syntax of the forEach() method:
*/
// array.forEach(function(currentValue, index, array) {
//   // Your code here using currentValue
// }, thisArg);
/*
Parameters:

function: A function to execute for each element in the array.
currentValue: The current element being processed in the array.
index (optional): The index of the current element being processed.
array (optional): The array that forEach() is being applied to.
thisArg (optional): Value to use as this when executing the callback function.
Example:
*/
let numberz = [1, 2, 3, 4, 5];

numberz.forEach(function(number, index) {
  console.log(`Element at index ${index} is: ${number}`);
});

/*
This code will output:

Element at index 0 is: 1
Element at index 1 is: 2
Element at index 2 is: 3
Element at index 3 is: 4
Element at index 4 is: 5
Things to note about forEach():

It executes a provided function once for each array element.
It doesn't return a new array but instead iterates through each element of the original array.
It is a concise way to perform an operation on each element without explicitly writing a loop.
The forEach() method is particularly useful when you want to perform a similar operation or action on each element 
in an array without the need for a traditional for loop.
*/

const numbers = [1,2,3,4,5,6,7,8,9,10];

/*
Szeretnénk a tömbben lévő számoknak visszakapni a kétszereseit egy tömbbe
erre létezik a hagyományos for megoldás
*/
const numbers2 = [];

for(const num of numbers) {
    numbers2.push(num*2);
}

/*
a map hasonló metódus, mint a forEach(), ő is vár egy callback functiont
és a callback function meg fog jelenni -> element, index, array
az elementet érdemes belerakni az index és az array egyáltalán nem kötelező 
*/

const numbers3 = numbers.map(function(el, index, array) {
    console.log(el);
    console.log(index);
    console.log(array);
});
/*
1
0
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
2
1
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
3
2
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
4
3
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
5
4
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
*/
/*
return-be kell megadni, hogy mit szeretnénk elvégezetetni
*/
const numbers4 = numbers.map(function(el, index, array) {
  return el * 2;//ezzel visszakapjuk a számoknak a duplikációit, kétszereseit 
});

console.log(numbers4);
/*
Egy tömbbe visszakaptuk a számaink (el) kétszeresét 
[
   2,  4,  6,  8, 10,
  12, 14, 16, 18, 20
]
*/

/*erre létre is tudunk hozni egy külön függvényt*/

function duplicate(el) {
    return el;
}

/*létrehozhatunk egy arrow functiont is*/

const duplicateArrow = (el)=> el * 2;

/*és itt pedig meghívjuk azt a függvényt a map-ben amiket csináltunk és akkor nem a map belséjében kell elvégezni a számítást*/

const numbers5 = numbers.map(duplicate);
const numbers6 = numbers.map(duplicateArrow);

/*Ez a szintektika a legjobb -> !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
const numbers7 = numbers.map((el)=>el * 2);
/*
[
   2,  4,  6,  8, 10,
  12, 14, 16, 18, 20
]
*/
/*
itt nem kell return, mert ez -> el * 2 maga a visszatérési érték
lényeg, hogy a visszatérési értékben, mindig annak a müveletnek kell lennie, amit végre szeretnénk hajtani
akár lehet összefüzés is ->
*/
const numbers8 = numbers.map((el)=>el + " ez egy szám");
console.log(numbers8);

/*
[
  '1 ez egy szám',
  '2 ez egy szám',
  '3 ez egy szám',
  '4 ez egy szám',
............
]
*/
/********************************************************************************************************************************/
/*
Most jön a find();
*/

const users = [
    {
        id:1,
        userName:"pista88",
        email: "pista88@gmail.com"
    },
    {
        id:2,
        userName:"kata96",
        email: "kata95@.com"
    },
    {
        id:3,
        userName:"peti98",
        email: "pista88@gmail.com"
    }
];
/*
Van egy tömbünk, ami tartalmaz 3 objektumot és szeretnénk valamelyiket kikeresni belölük
végigmegyünk a usereken és meghatározunk valamit pl. itt, hogy username===peti98 
annak az összes adatát vissza fogja adni, az egesz objektumot
*/

const user = users.find((el)=>el.userName === "peti98"); //ide azt a feltélt írom, hogy mi alapján szeretném kikeresni, ha csak egy paraméter
                                                         //((el)=> akkor nem szükséges a zárójelpár
console.log(user);
/*
{ id: 3, userName: 'peti98', email: 'pista88@gmail.com' }
*/
/*
ha nekem nem az összes adat szükséges csak az, hogy hányadik inedxen található meg ez az érték
akkor azt a findIndex nevű függvénnyel tudjuk kikeresni
*/
const userIndex = users.findIndex(el=>el.userName === "kata96");
console.log("Kata indexe: " + userIndex); // Kata indexe: 1
/*********************************************************************************/
/*
Ha több értékre is szükségem van pl. a páros számokra a numbers tömbből
Ezt már a filterrel lehet, ha több elemre van szükégünk

Ha péros meg páratlanok vannak, akkor mindig a százalékos osztás jön a képbe
a numbersben lévő számokat elosztjuk kettővel, ha számnak nincsen maradéka tehát 
a százalékos osztásnál nem lesz maradék, akkor tudjuk, hogy páros, ha van maradék 
maradék egy ebben az esetben, akkor pedig páratlan
*/ 

const evenNumbers = numbers.filter((num)=> num % 2 === 0);
/*ugyanezt meg lehet oldani másik szintaktikéával, egy sima function-val -> viszont kell a return*/

const evenNumbers2 = numbers.filter(function(num) {
    return num%2 === 0;
});
console.log(evenNumbers);
/*
ami visszaadd nekünk egy tömböt a páros számokkal a numbers tömbből
[ 2, 4, 6, 8, 10 ]
ha vissza akarjuk kapni ugyanigy a páratlan számokat
ugyanez a módszer csak a százalékos osztás eredménye egy kell, hogy legyen
*/

const oddNumbers = numbers.filter(num=> num%2 === 1); // jobb ezt a szintatktikát választani, mondjuk ha egy objektumban vagyunk 
console.log(oddNumbers);
/*
[ 1, 3, 5, 7, 9 ]
*/
/******************************************************************************************************************************/
/*
reduce -> szeretném összeszorozni vagy összeadni a numbers tömbben lévő számokat egymással
nem ugy mint a mpa ahol meghatároztunk valamit, mivel szeretnénk beszorozni
*/
//hagyományos metódus

let sum = 0;

for(const num of numbers) {
    sum += num; //sum = sum + number
}
/*
sum += number; adds each number from the numbers array to the sum variable iteratively,
resulting in the sum of all the numbers in the array being stored in the sum variable
*/
console.log(sum); //55

//beépített metódussal való megoldás -> reduce

const sum2 = numbers.reduce((subSum, value, index, array)=> {
    console.log("subSum: " + subSum);//megmutatja, hogy éppen jelenleg hol járunk
    console.log("value: " + value);
    console.log("index: " + index);
    console.log(array);
    return subSum + value; //vagy különben a subSum undefined lesz, de itt beírhatunk szorzást is, azt a müveletet amit el akarunk végeztetni
});
//összeadja vagy összeszorozza a numbers tömb értékeit, azért reduce, mert több értékből csinál eggyet
//össze is tud füzni szavakat egymással -> string-vel is müködik
/*
The reduce() method in JavaScript is used to reduce an array to a single value by executing a provided function for each element of the array.
The reduce() method takes in a callback function and an optional initial value as parameters.

sum2 is a constant variable that will hold the result of the reduction operation.

numbers is an array on which the reduce() method is called.

The callback function passed to reduce() takes four parameters:

subSum: The accumulator that holds the intermediate result of the reduction.
value: The current element being processed in the array.
index (optional): The index of the current element being processed.
array (optional): The array on which reduce() is being applied.
initialValue: An initial value that can be used as the initial state of the accumulator. -> let sum = 0;

subSum: 1
value: 2
index: 1
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
subSum: 3
value: 3
index: 2
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
subSum: 6
value: 4
index: 3
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
egyről kezdünk, mert az volt az első elem és value: 2 mert az a mésodik elem és utána a subSum 3 lesz, mert hozzáadjuk a value-t
utána a subSum 6, 10 és így tovább
*/

/*egyszerübb szintaktikával*/
const sum3 = numbers.reduce((subSum, num)=> subSum + num);
console.log("sum3: " + sum3); //sum3: 55

//összeszozás ugyanezzel
const sum4 = numbers.reduce((subSum, num)=> subSum * num);
console.log("sum4: " + sum4); //sum4: 3628800
/*********************************************************************************************************************************/
/*
-Every
    Az every iterációs rendszer visszatérési értéke egy boolean
    Ha az összes elem megfelel a megadott feltételnek akkor true, különben false
-Some
    Akkor lesz igaz, ha van olyan, amelyik megfelel az adott feltételnek
*/ 
//minden elem nagyobb-e, mint 5
const every = numbers.every(num=> num > 5);
console.log(every); //false

//van olyan elem ami nagyobb-e, mint 5
const some = numbers.some(num=> num > 5);
console.log(some); //true

/*********************************************************************************************************************/
/*
spread operator -> ...
hasznos, olyan esetekben, amikor nem tudjuk, hogy mennyi paramétere lehet egy függvénynek 
és ilyenkor szeretnénk beírni akármennyi számú paramétert vesszővel elválasztva ->
*/

function getNumbers(...numbers) {
    console.log(numbers);
}

//meghívjuk a függvényt és mivel felül ott van a ... ezért vissza fogok kapni egy tömböt azokkal a számokkal, amit beírtunk meghívásnál
getNumbers(1,2,3,4,5,6,7,8,9,10);//akármennyi paramétert meg tudunk adni, akár 15000 is 
/*
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
*/
console.log(...numbers); //1 2 3 4 5 6 7 8 9 10
/*****************************************************************************************************************************************/
/*keys és value*/

/*
Minden ami nem primitiv érték, objektum a JavaScriptben és a tömbök is azok
Objektumok rendelkeznek kulcsokkal, tömbök is rendelkeznek vele -> indexek
*/
const keys = numbers.keys(); //visszakapjuk sorban az összes indexet 1 2 3 4 5 6 7 8 9 10

for (const index of keys) { //mert csak azt írta ki, hogy arra iterator
    console.log(index); //1 2 3 4 5 6 7 8 9 10
}

/*entries*/

const entries = numbers.entries();
/*
Visszaad egy tömböt tömbökkel és a belső tömb van egy értékpár 1. szám(ami mindig az index) 2. az indexen lévő elem
akkor van értelme, ha objektumokkal használjuk, mert akkor visszakapjuk a kulcsot meg az értéket, de így is müködik*/

for(const entry of entries) {
    console.log(entry);
}
/*
[ 0, 1 ]
[ 1, 2 ]
[ 2, 3 ]
[ 3, 4 ]
[ 4, 5 ]
[ 5, 6 ]
[ 6, 7 ]
[ 7, 8 ]
[ 8, 9 ]
[ 9, 10 ]

Mindegyik entry az egy ilyen tömb
0-dik indexen van az 1 
1 indexen van a 2....
*/
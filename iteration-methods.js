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

const user = [
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
*/

const user = users.find((el)=>el.username === "peti98"); //ide azt a feltélt írom,
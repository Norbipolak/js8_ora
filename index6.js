/*
    A const és a var közötti különbség
*/

var a = 0;
var a = 0;

/*Két ugyanolyan nevű változót generáltam és mégsem kapok hibaüzenetet*/

let b = 0;
let b = 0;
/*
Akkor viszotn kapni fogok hibaüzenetet, itt is alá lesz húzva pirossal
identifier has been declared
*/
if(true) {
    var a = 0;
}

console.log(a);//0

/*
Akkor az fog történni, hogy kiírja a 0-t, ez azért hibás, mert ha blokkon belül készítünk változót,
annak lokális változónak kéne lennie, tehát nem kéne, hogy létezen a blokkon kívül 
itt a var esetében, ugye meg ki tudtuk írni console.log-val
*/

if(true) {
    let b = 0;
}

console.log(b); // uncaught reference error: b is not defined

/*
A let nem létezik a blokkon kívül, ha blokkon belül generáljuk 
*/

if(true) {
    const c = 0; // uncaught reference error: b is not defined
}

console.log(c);

/*
A const sem létezik a blokkon kivül, ugyanugy, mint a let
*/

/*
Mi a különbség a const és a let között
ha azt mondjuk, hogy const d; -> akkor hibát fog adni 
ha viszont azt mondjuk ó, hogy let e; ->nem kapunk hibát 
*/
const d;
let e;
/*
A const-nak a futási időben nem módosulhat az értéke
és éppen ezért neki fel kell vennie egy értéket
meg kell adni valami kezdőértéket mindig pl. const c = 5;
*/

// felültre be lehet írni hogy, "use strict" és ilyenkor szigorubb szabályok lépnek majd életbe
/***********************************************************************************************************************/
/*
Adatbekérés, hogyan müködik prompt segítségével
*/

let nev = prompt("Add meg a nevedet!"); //Kovács Oliver ls nyomunk egy ok-ot
console.log("A neved a következő: " + nev); //A neved a következő: Kovács Olivér 

/*
Kijött a promptal felül egy olyan, mint az alert a bongészőben (két gomb az alján ok és mégse)
Oda írtunk valamit nevet és a bongésző konzolján meg fog jelenni amit oda beirtunk (hasonló mint egy input mező)

A prompt az a visszatérési értéke, amit beírunk az input mezőbe, ami megjelenik
*/

let db = prompt("Add meg, hogy hány darab krumplit akarsz venni!");
db += 5;
console.log(typeof db); //string

console.log("krumplik száma: " + db);//55

let db = parseInt(prompt("Add meg, hogy hány darab krumplit akarsz venni!"));
console.log("krumplik száma: " + db);//10

/*
Ha megnézzük a (typeof) a db változónak vagy akár a névnek a típusát ->
az lesz, hogy string
Mert, hogy a prompt-ból mindig string-et kapunk vissza 
ez akkor problematikus, amikor hozzá akarunk adni egy értéket, mondjuk 5-t -> db += 5;
mert ilyenkor, ha megadjuk, hogy hány krumolit akarunk venni és beírjuk, hogy 5 vagy akármilyen számot 
hozzáadunk 5-t és lesz belőle 55, mivel a stringen az összeadás jel nem összeadást jelent, hiszen a stringet
string-vel nem lehet összeadni, összefüzést jelent és egymás utan rakja a két értéket
->
ezért integerré fogjuk parse-olni a visszatérési értéket 
és, így, ha beírunk 5-öt és hozzáadunk 5-öt, akkor 10 lesz 
*/

/*
És, hogy most parseInt-vel van a prompt let db = parseInt(prompt("Add meg, hogy hány darab krumplit akarsz venni!"));
és beírjuk, hogy kecske, akkor ->
console.log("krumplik száma: " + db);//NaN -> Not a Number
és egy függvénnyel le tudjuk ellenőrizni, hogy NaN-e, amit megadunk neki 
->
*/

if(isNaN(db)) {
    console.log("A db változó értéke Not a Number!");//ha stringet írunk be, ami NaN, akkor kiírja, ha számot akkor nem
};
/*
isNaN-nak egy boolean visszatérési értéke van, és ha NaN az érték, akkor true lesz 
és ha nem NaN az érték, akkor pedig false

És ha most beírjuk a böngészőbe a prompt-ba valami string-et, akkor meg jelenni az amit ki akarunk konzol logolni a isNaN függvénybe 
írtunk, hiszen az nem egy szám, hanem egy string 
*/

let pi = parseInt(prompt("Add meg a pi értékét!"));//3.14
console.log("A pi értéke: " + pi);//A pi értéke 3

/*
Beírtuk a prompt-ba, hogy 3,14, ami parseInt-elve van és azt kaptuk kikonzolozva, hogy 3
Hogyan lett 3.14-ből 3?
Ha parseInt-elve van valami, akkor csak egész számot add vissza 
-> 
Amikor nem egész számot, hanem törtszámot kérünk be, akkor nem a parseInt-et, hanem a parseFloat-ot kell használni
azért, mert az int(integer) az egész szám, a float(floating point number) pedig a törtszám
*/

let pi = parseFloat(prompt("Add meg a pi értékét!"));//3.14
console.log("A pi értéke: " + pi);//A pi értéke 3.14

/************************************************************************************************************************/
//Feladatok

//1

/*
Kérjünk be a felhasználótól két egész számot, majd adjuk meg az összegüket, a hányadosukat
*/

function feladat1() {
    const a = parseInt(prompt("Adj meg egy egész számot!"));//bekérjük a számokat egy változóban
    const b = parseInt(prompt("Adj meg egy újabb egész számot!"));

    const osszeg = a + b; //itt egy változóban megcsináljuk a műveletet
    const hanyados = a / b;

    console.log(`${a} + ${b} = ${osszeg}`);
    console.log(`${a} / ${b} = ${hanyados}`);

    /*`${}`*/
};

feladat1(); //és akkor megadjuk az a-t és a b-t a promptban és mivel, meghívtuk a függvényt el fogja végezni a müveleteket, amik benne vannak
//de ha átmegyünk a második feladatra, akkor ezt ki kell kommentelni, vagy különben kéri majd a promoteket erre is a böngészőben mindig elsőnek

//2

/*
Kérjük be a felhasználótól egy kör alakú medence átmérőjét és mélységét, majd adjuk meg, hogy hány köbméter víz fér bele
*/

function feladat2 () {
    const atmero = parseFloat(prompt("Add meg a medence átmérőjét!"));
    const melyseg = parseFloat(prompt("Add meg a medence mélységét!"));

    //átmérőből ki kell számolnunk a sugarat, a sugárból pedig a területet

    const t = Math.pow(atmero/2, 2) * Math.PI; //négyzetre emelés -> 1.érték, amit négyzetre akarunk emelni, 2.érték, amivel 
    //Math.PI -> konstansunk pi-nek az értékére

    /*léteztik hatványozás operátor a JavaScriptben -> ** */
    const T = (atmero/2)**2 * Math.PI//második hatványra emelés **4 -> negyedik hatványra emelés
    //vigyázni kell arra, hogy a hatványozás az magasabb rendű müvelet, mint a szorzás, ezért be kell rakni zárójelbe

    //térfogat
    const V = Math.round(T * melyseg*100)/100;
    //szorzunk 100-val belül ebböl a Math.round, csinál egy egész számot és utána osztunk 100-val, hogy két tizedesjegyig kapjuk meg

    console.log(`A megadott méretű medencébe ${V} m^3 víz fér bele!`);
    //A megadott medencébe 54.31 m^3 víz fér bele!
};

feladat2();
/*
V túl sok tizedesjegyet írt ki, ezért, használjuk a Math.round()*100 és /100, hogy két tizedesjegyig kerekítsen
const V = Math.round(T * melyseg*100)/100;
*/

//3

/*
Oldja meg az Ax+B=0 alakú elsőfokú egyenletet!(A és a B értékét a felhasználótól kérjük be, keressük az x-et)
*/
/*
Ax+B=0
Ax=-B
x=-B/A
*/
function feladat3() {
    const a = parseFloat(prompt("Add meg az 'a' értékét!"));
    const b = parseFloat(prompt("Add meg az 'b' értékét!"));

    const x = Math.round(-b/a*100)/100;//ezt is lehet két tizedesjegyre kerekíteni
    console.log(`x = ${x}`);
};

feladat3();

//4

/*
Számoljuk ki, hogy mennyi pénzt kell megunkkal vinni, ha krumplit szeretnénk vásárolni. Ehhez kérjünk be a felhasználótól, 
hogy mennyibe kerük egy kiló krumpli, és hogy hány kilót szeretnénk venni
*/ 

function feladat4() {
    const egysegar = parseInt(prompt("Add meg a krumpli kilónkénti árát!"));
    const mennyiseg = parseFloat(prompt("Add meg a mennyiséget!"));

    const vetelar = Math.round(egysegar * mennyiseg/5)*5
    //itt lehetséges, hogy nem integert fogunk kapni, ezért a Math.round-val kerekytünk 5-re, mint egy rendes bolti vásárlásnál
    // osztunk 5-vel belül, amit a Math.round lekerekít, tehát egész szám lesz, és ezt szorozzuk 5-vel, ami biztos, hogy 5-vel osztható egész szám
    console.log(`A vételár ${vetelar} Ft.`);
};

feladat4();

//5

/*
Írjunk programot, ami kiszámolja, hogy fizitésemelés után mennyi lesz a fizetésünk. Ehhez, írjunk kérjük be a felhasználótól, hogy 
mennyi most a fizetése, és hogy hány százalékos fizetésemelést kap
*/

/*
Bekérjük a százalékot és ebből a százalékból képzünk egy szorzót 
*/

function feladat5() {
    const fizetes = parsInt(prompt("Add meg a jelenlegi fizetésedet!"));
    const emeles = parsInt(prompt("Add meg az emelés mértékét"));

    const szorzo = 1 + emeles/100;
    //mert ha 30%-os az emelés, akkor azt elosztom 100-val az 0.3 és hozzadjuk az egyhez 
    const ujFizetes = fizetes * szorzo;

    console.log(`Az emelés utáni fizetés: ${ujFizetes} Ft.`);
};

feladat5();

//6

/*
Írjunk programot ami segít kiszámolni, hogy haány hónapot kell még spórolnom, ha laptopot szeretnék vásárolni. Ehhez kérje be,
hogy havonta mennyi pénzt tudok félre rakni , és hogy mennyibe kerül a laptop
*/

function feladat6() {
    const laptopAr = parseInt(prompt("Add meg, hogy mennyi a laptop ára!"));
    const sporolas = parseInt(prompt("Add meg, hogy mennyit tudsz félretenni!"));

    const honapok = Math.ceil(laptopAr/sporolas);

    console.log(`${honapok} hónapot kell spórolnod a laptop megvásárlásához`);

};
feladat6();

//7

/*
Készítsünk programtot, amely segíti a burkokó mesterek
munkáját. A szükséges csempe mennyiségének a kiszámításhoz a 
program kérje be a terület szélességét és magasságát méterben, 
majd, számolja ki, hogy 20*20cm méretű csempék esetén hány darabra van szükség 
a munka elvégzéséhez (plusz 10%-ot illik rászámolni)
*/

function feladat7() {
/*
Ki kell számolni, hogy mekkora a területe, annak a felületnek, ahova csempéket szeretnénk rakni
Szélesség * magasság -> azt kellene megmondani, hogy 20*20-as csempék esetében hány darabra van szükség 
1 négyzetméterben 20*20 csempéből hány darab fér el? -> 25db
Nekünk csak azt kell csinálnunk, hogy kiszámoljuk a területet és azt megszorozzuk 25-vel, 
mert annyi csempe fér bele és azt megszorozzuk 10%-val és azt meg kerekítjük
*/
    const szelesseg = parseFloat(prompt("Add meg a szélességet!"));
    const magassag = parseFloat(prompt("Add meg a magasságot!"));

    const db = Math.round(szelesseg * magassag * 25 * 1.1);//megszorozzuk 1.1-vel, hogy raászámoljunk 10%-ot az illesztésekre
    console.log(`A terület lefedéséhez ${db} csempe szükséges!`);
};

feladat7();

//8

/*
Kérjünk be két, egy napon belüli időpontot(elöször az órát, aztán a percet, végül a másodpercet). Számítsuk ki a két időpont 
közti különbséget másodpercben és írassuk ki
*/

/*
Ilyennel, hogy másodperc biztos, hogy kell majd számolni, mert sokszor van olyan, hogy felvinne egy adatot 
a felhasználó, mondjuk egy elélmiszernek a lejárata és véletlen úgy állította be, hogy tegnapelötre -> mixed timestamp
hogy kiszámoljuk, hány másodperc telt el a két időpont között 

Lehetnek, olyan számítások, ahol muszály megnézni, hogyan tudom másodperccé váltani az óra, perc, másodpercet
*/

function feladat8() {
const oraPercMp1 = prompt("Add meg az első óra-perc-mp hármast a következőképen: o:p:m");
const oraPercMp2 = prompt("Add meg a második óra-perc-mp hármast a következőképen: o:p:m");
/*ebben az esetben tudjuk használni a split nevű függvényt -> string függvények
kettőspont mellett szétszedjük a stringeket -> lesz egy három elemű tömböm,
ami tartalmazni fogja az órát, percet, másodpercet és innentől kezdve már tudunk ezzel számolni
*/
const splitted1 = oraPercMp1.split(':');
const splitted2 = oraPercMp2.split(':');
// a tömbböl megadjuk az elemeket a megfelelő változónak, 0 eleme a tömböknek az óra, második a perc, harmadik a másodperc 
//+ parseInt, mert ezek stringek 
const ora1 = parseInt(splitted1[0]);
const perc1 = parseInt(splitted1[1]);
const mp1 = parseInt(splitted1[2]);

const ora2 = parseInt(splitted2[0]);
const perc2 = parseInt(splitted2[1]);
const mp2 = parseInt(splitted2[2]);
/*
másodpercre kell átváltani mindakettőt
Egy órában 3600mp van 60perc és 1 perc-ben 60mp
*/

const idopontMp1 = ora1 * 3600 + perc1 * 60 + mp1;
const idopontMp2 = ora2 * 3600 + perc2 * 60 + mp2;

/*
Mi van, ha rosszul adja meg véletlenül
nem is mondjuk meg, hogy melyik legyen az első meg a második, mert azt lehet rosszul is megadni
-> 
Math.abs -> és akkor tökmindegy a sorrend, és elöbbi írja be elöször akkor a Math.abs pozitív értéket 
fog belöle csinálni 
*/

const kulonbseg = Math.abs(idopontMp1 - idopontMp2);
console.log(`A két időpont között ${kulonbseg} másodperc van!`);
}
feladat8();

//9

/*
Kérjük be a felhasználótól egy kert hosszát és szélességét, majd adjuk meg, hogy mennyi fűmagot kell vennie, 
ha öt négyzetméter befűvesítéséhez kell egy csomag fűmag
*/

function feladat9() {
    /*
    bekérjük a kert szélességét és hosszát és ha 5 négyzetméter befűvesítéséhez kell egy csomag,
    akkor el kell osztani 5-vel, de ha tört szám lesz, akkor felfele kell kerekítenünk 
    */

    const szelesseg = parseFloat(prompt("Add meg a terület a szélességét!"));
    const hossz = parseFloat(prompt("Add meg a terüket hosszát!"));

    const T = szelesseg * hossz;
    const cs = Math.ceil(T / 5);

    console.log(`A terület befűvesítéséhez ${cs} csomagra van szükség`);

};

feladat9();
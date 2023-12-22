/*
Először is hívatkozunk rá a script-vel a html-ben
egy objektumot csinálunk, amibe lementjük kezdésnek az img-t, aminek adtunk egy img id-t és a két prev, nextBtn-t is 
*/

const Gallery = {
    img: document.querySelector("#img"),
    prevBtn: document.querySelector("#prev"),
    nextBtn: document.querySelector("#next"),
    imgCounter: 0, /*nullától fog kezdődni és ez számolja azt, hogy hányadik képnél járunk*/
    imgNumDiv: document.querySelector("#img-number"), //css-ben a formázása
    images: [ /*ebbe a tömbbe megadjuk a képeket*/
        "car.png", "cargo-ship.png", "cheese.png", "flower.png", "phone.png", "plane.png", "tree.png", "ux.png"
    ],
    /*
    kitöröltük a számlálónál, hogy 1/8 a img-numberes div textjéből és ki is vettük az img az src (ittmeg megadtuk, hogy car.png)
    ezek megoldására létrehozunk egy init functiont
    */
    init() {
    /*ebben meghívjuk azokat a metódusokat, amik szükségesek ahhoz, hogy ez a dolog el tudjon indulni*/
    this.showImg();
    this.next();
    this.prev();
    /*
    és így elég, ha a galleryből az initet hívjuk meg
    akkor ő megjeleniti a első képet és regisztrálja a két eventListenert
    */
    },
    showImg() { /*ezzel jelenítjük meg a képeket*/
        const src = `kepek/${this.images[this.imgCounter]}`;
        this.img.src = src;
        /*
        és az itt lementett this.img.src egyenlővé tesszük azzal az src változóval, amit itt csináltunk
        késöbb ahol növeljük a képek számát imgCounter++ meghívjuk a showImg() functiont és megjelenítjük azt a képet
        tehát itt az történik, hogy összerakunk egy elérési útvonalat, úgyhogy képek és az images tömbnek a megfelelő
        indexű eleme, majd a src attributumát a lementett képnek az img tagnek kicseréljük, amikor rányomunk a next
        gombra és ez azt fogja eredményezni, hogy tudunk váltogatni a képek között, egészen addig amig nem lesz az index (imgCounter)
        annyi ahányadik index nem létezik, mert undefinedot fog visszadni és nincsen olyan nekünk, hogy kepek/undefined, 
        ezt ugy lehet megakadályozni, hogy -> next eventlistenerében csináljuk
        */
        this.imgNumDiv.innerText = `${this.imgCounter + 1}/${this.imgages.length}`;
        /*mert ugye nulláról kezdi, ezért hozzá kell adni eggyet, hogy az első képnél eggyet írjon, length -> ahány kép van az images tömbben*/
    },
    next() {
        this.nextBtn.addEventListener("click", () => {
            /*console.log(this.imgCounter);ha rányomunk a böngészőn a gombra akkor itt konzol nullát ír*/
            this.imgCounter++;
            /*mert nullától kezdünk és az images[] meg fog jelenni ->*/
            console.log(this.images[this.imgCounter]);
            /*kiírom a megfelelő indexű tagot, akkor azt fogja mondani a konzol a böngészőben, hogy cargo-ship.png,
            mivel, hogy nulléról indultunk, de hozzáadtunk eggyet, tehát az elsőt indexűt fogja kiírni nem a nulladikat 
            utána így tovább, ha rákattintunk még egyszer cheese.png utána flower.png, viszont amikor elérünk a végéig, 
            akkor kapunk egy undefinedot és ha kattintunk tovább akkor jön még annyi undefined, ahányszor kattintottunk,
            azért, mert ez a végtelenségig tud nőni ez az érték*/

            if (this.imgCounter === this.images.length) {
                this.imgCounter = 0;
            }
            /*
            így lehet megakadályozni, hogy menjen tovább a counter, csak amennyi képünk van
            === this.images.length -> lengthedik elem már nincsen, mert nulláról kezdünk akkor elöről kell kezdenünk, ezért
            this.imgCounter = 0; 
            ha már elérnénk azt a számot, amilyne index már nem létezik, akkor visszaváltunk nullára
            és az utolsó kép után az első kép fog következni, bárhányszor végig tudunk rajta, igy menni
            */
            this.showImg();
        });
    },
    prev() {
        this.prevBtn.addEventListener("click", () => {
            /*hasonló, mint a next csak az imgCounter az - lesz*/
            this.imgCounter--;

            /*undefinedot kapunk ha az első képről szeretnénk még visszább menni, mert negatívba kerültünk*/
            if (this.imgCounter < 0)
                this.imgCounter = this.images.length - 1;//itt meg a végére ugrik, ezért length-1 



            this.showImg(); /*ugyanugy meghívodik, mert a showImg az azokat közös dolgokat tartalmazza, ami 
            a nexthez is és a prevhez is kell, mert ez semmi mást nem csinál, csak előallít egy elérési 
            útvonalat és hozzáadja a src attributumhoz
            */

        });
    },
};

Gallery.init();

/*
ha eventListenernél sima functiont csinálunk nem arrow-t nem lesz jó mert -> 
a scope a functionon belül nem az objektum lesz hanem <div class="arrow" id="prev"></div>, tehát this. a btn-re fog mutatni, ezért 
nincs olyan, hogy imageCounter, ezért kell az arrow function, mert annak nincsen saját hatóköre és akkor 
már visszakapjuk az imageCounter-t
*/

/*
Szeretnénk tudni, hogy hányadik elemnél járunk -> imgCounter + 1, ugye mert nulláról indul
csinálunk a html-ben egy div-et id="img-number"
*/

/*
Egész összefoglalva html plusz js 
van egy img, aminek megadtuk az img id-t, egy prev, next meg egy img-number, ezeket lementjük, hogy majd fel tudjuk 
használni a késöbbiekben 
imgCounter -> az aktuális képnek, amit akarunk jeleniteni az indexe
ShowImg() -> legenerálja a src attributumot és átadja a this.img.src-nek, még ennek a feladata az is
megmutassa, hogy hányadik képnél járunk 
next metódussal regisztrálunk egy eseménykezelőt, ami hozzáad egyet minden kattintással az imgCounterhez és 
ha ez eléri a images.length-et, ennyiedik indexű elem már nem létezik, akkor az imgCountert nullára állítjuk 
és ezért újrakezdi és meghívja a showImg()-t
prev, hasonló, csak kivon eggyet az imgCounterból és ha kisebb lesz mint nulla vagy azt is írhattunk volna, hogy egyenlő
minusz eggyel, akkor az imgCounter értéke a legmagasabb index lesz -> itt fordítva megyünk körbe-körbe
*/
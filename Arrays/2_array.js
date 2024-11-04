  const hero = ["ironman","captain camera"]
  const hero2 = ["thor","hulk","black widow"];

  const allHero  = hero.concat(hero2);
  console.log(allHero);

  //spread operator
    const allHero2 = [...hero, ...hero2];   
    console.log("allHero2",allHero2);

//flat
const hero3 = ["ironman","captain camera",["thor",["hulk","black widow"]]];
console.log("Hero3: ",hero3);
const allHero3 = hero3.flat(Infinity);
console.log("All Hero3: ",allHero3);

//Array scrapping
console.log(Array.isArray(hero3));
console.log(Array.from("Priyobroto"))

//setofelements
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
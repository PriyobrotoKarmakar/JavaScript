const arr = [1,2,3,4,5];    
const hero = ["ironman","captain america","thor","hulk","black widow"];
console.log(arr[0]); // 1
console.log(hero);
hero.push("spiderman");
console.log(hero);
hero.pop();
console.log(hero);
hero.unshift("black panther");
hero.shift();
console.log(hero);


//
console.log(hero.includes("thor"));
console.log(hero.indexOf("black panther"));
console.log(typeof hero);
const newHero = hero.join();
console.log(newHero);

//slice splice
console.log("Hero: ", hero);
console.log("----------------------");
const myNewHero  = hero.slice(1,3);
console.log("My New Hero: ", myNewHero); 
console.log("Hero: ", hero);
console.log("----------------------");
const myNewHero2 = hero.splice(1,3);
console.log("My New Hero2: ", myNewHero2);
console.log("Hero: ", hero);
//string => number
let num = "5";
console.log([typeof num,num]);

let stringOfnum = Number(num);
console.log([typeof stringOfnum, stringOfnum]);

let notANumber = "1234abc"
console.log([typeof notANumber,notANumber])
let numberOfnotANumber = Number(notANumber)
console.log([typeof numberOfnotANumber,numberOfnotANumber])



//number to string
let Num = 567;
Num = String(Num)
console.log([typeof Num,Num])


//string to bool
let s1 = ""
let s2 = "hey"
console.log([s1,s2])
//th
s1 = Boolean(s1);//false
s2 = Boolean(s2);//true

console.log([s1,s2])

//bool to int
s1 = Number(s1)
s2 = Number(s2)

console.log([s1,s2])


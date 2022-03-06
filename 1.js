
/*------------------------------------------------------------------------------------
                                    String
------------------------------------------------------------------------------------*/

/*=========== Swipe the first & last value in string ===========*/
// let input = prompt();
// let str = input;
// const a = str.split("");
// const s = a[0];
// const e = a[a.length - 1];
// a[0] = e;
// a[a.length-1] = s;
// let answer = a.join("");
// console.log(answer);


/*=========== Splitting the strings into words example ===========*/
// let a = 'JavaScript String split()';
// let b = str.split(" ");
// console.log(b);


/*=========== convert string to array ===========*/
// let a = "haresh-thumar";
// let b = a.split("");
// console.log(b);


/*=========== Returning a limited number of substrings example ===========*/
// let a = 'JavaScript String split()';
// let b = a.split(' ',2);
// console.log(b);


/*=========== Splitting a string using a regular expression example ===========*/
// let a = 'Good Morning! How are you? This is John. John is my friend.';
// let b = a.split(/[!,?,.]/);
// console.log(b);

// let a = 'Good Morning! How are you? This is John. John is my friend.';
// let b = a.split(/([!,?,.])/);
// console.log(b);


/*=========== print reverse string ===========*/
// var a = "haresh thumar";
// var b = a.split("");

// for(var i = a.length - 1; i >= 0; i--){
//     document.write(a[i]);
// };


/*=========== reverse print string without loop ===========*/
// let a = "haresh-thumar";
// let b = a.split("").reverse().join("");
// console.log(b);


/*=========== enter tag & value using prompt box in string ===========*/
// let a = prompt("enter first value");
// let b = prompt("enter second value");
// console.log(`<${a}> ${b} </${a}>`);

// const name = "Front : ";
// const number = prompt();
// console.log(`${name}${number}`);


/*=========== Splitting the strings into words example ===========*/
// console.log(`\\`);
// console.log(`\``);
// console.log(`\`\$\\`);






/*------------------------------------------------------------------------------------
                                    Object{}
------------------------------------------------------------------------------------*/

/*------ same property & same value in object ------*/
// let age = 43;
// let harry = { name: 'Harry Smith', age: age };
// console.log(harry.age);
// The 'age' property is set to the value of the age variable


/*------ declair only proprty and print value in object ------*/
// let age = 43;
// let harry = { name: 'Harry Smith', age };
// The age property is now 43
// console.log(harry.age);


/*------ Splitting the strings into words example ------*/
// let age = 43;
// let field = 55;
// let harry = { name: 'Harry Smith', "unj bidgjsdjkl gkjsdglk": 42 }
// console.log(harry["unj bidgjsdjkl gkjsdglk"]);


// let n = '45';
// n: n;
// const harry = {name: "haresh", n, '$': 45, "gunjanakbari": 4565};
// console.log(harry.$);
// console.log(harry.gunjan-akbari);
// console.log(harry);


/*------- var keyword change the value using second time -------*/
// var a = 25;
// var a = 20;
// console.log(a);


/*------- only change the value without let keyword -------*/
// let a = 25;
// a = 20;
// console.log(a);

/*------- only change the value without let keyword -------*/
// let a = 25;
// let a = 20;  //error (because let keyword not declair in same variable name)
// console.log(a);


/*------- var keyword change the value using second time -------*/
// var a = 25;
// var a = 20;
// console.log(a);


/*------- don't change const value & never pre-declair an anyone places in this page -------*/
// const a = 10;
// const a = 10;
// console.log(a);




/*------------------------------------------------------------------------------------
                                    forLoop()
------------------------------------------------------------------------------------*/
// for(let a=0, b=100, c=0; (a<=100 && b>=0) && c<=100; a=a+1, b=b-5, c=c+10){
//     console.log(a,b,c);
// }


//------- print 1 to 50 using for loop -------*/
// for(let a=0; a<=50; a++){
//     console.log(a);
// }

/*------- print reverse 50 to 1 using for loop -------*/
// for(let a=50; a>=0; a--){
//     console.log(a);
// }


// let i = 0;
// let j = ++i;
// let  k = i++;
// let o = k++;
// let l = i++;
// let  u = i++;
// let p = i;

// console.log(j);
// console.log(k);
// console.log(o);
// console.log(l);
// console.log(u);
// console.log(p);


// let i = 300;
// let j = i++;
// let k = j++;
// let o = ++i;
// let p = ++j;

// console.log(j);
// console.log(k);
// console.log(o);
// console.log(p);


// let a = 200; //200
// let b = a--;
// let c = a++;
// let d = b++;
// let e = c--;

// console.log(a); //200  199
// console.log(b); //201  200
// console.log(c); //199  199  201c
// console.log(d); //201  200
// console.log(e); //199  199


//  let a = 'bvc';
// if(a){
//     console.log(a);
// }else{
//     console.log("ppp");
// }

// let a = 'bvc';
// let b = a ? '[pp' : 'fdsfklsdjf';
// console.log(b);


// let a = 22;
// let b = "haresh";
// let c = `My Name is ${b} and My Age is ${a}`;
// console.log(c);


/*------- check the max or min BigInt Value In Number -------*/
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);



/*------------------------------------------------------------------------------------
                                    if & else{} condition
------------------------------------------------------------------------------------*/
// let a = 15;
// let b;
// if(a >= 5){
//     b = "a is greater";
// }
// else{
//     b = "a is small";
// }
// console.log(b);


/*------------------------------------------------------------------------------------
                                   nested if & else {} condition
------------------------------------------------------------------------------------*/
// let winGuest = 19;
// let userGuest = +prompt("select only numbber");

// if(winGuest === userGuest){
//     console.log("number is right!");
// }
// else{
//     if(userGuest < winGuest) {
//         console.log("too low!!");
//     }
//     else{
//         console.log("too high!!!");
//     }
// }


/*------------------------------------------------------------------------------------
                                   if else if{} condition
------------------------------------------------------------------------------------*/
// let a = +prompt("select temprature");
// if(a < 0){
//     console.log("extremely is cold");
// }else if(a < 16){
//     console.log("it is cold outside");
// }else if(a < 25){
//     console.log("weather is okey");
// }else if(a < 35){
//     console.log("let go for swim");
// }else if(a < 45){
//     console.log("turn of AC");
// }else{
//     console.log("too hot!!!");
// }


// let a = +prompt("select day");
// if(a === 0){
//     console.log("sunday");
// }else if(a === 1){
//     console.log("monday");
// }else if(a === 2){
//     console.log("tuesday");
// }else if(a === 3){
//     console.log("wednesday");
// }else if(a === 4){
//     console.log("thursday");
// }else if(a === 5){
//     console.log("friday");
// }else if(a === 6){
//     console.log("saturday");
// }else{
//     console.log(typeof a, "invalid day");
// }


//=========== sort odd or even number using if else condition ===========
// for (let index = 0; index < 100; index++) {
//     if(index % 2 === 0){
//         console.log("even", index);
//     }
//     else{
//         console.log("odd", index);
//     }
// }



/*------------------------------------------------------------------------------------
                                switch case statement
------------------------------------------------------------------------------------*/
// let b = prompt();
// console.log(typeof b);


// let haresh = 2;
// switch(haresh){
//     case 1:
//         console.log("sunday");
//     break;
//     case 2:
//         console.log("monday");
//     break;
//     case 3:
//         console.log("tuesday");
//     break;
//     case 4:
//         console.log("wednesday");
//     break;
//     case 5:
//         console.log("thursday");
//     break;
//     case 6:
//         console.log("friday");
//     break;
//     case 7:
//         console.log("saturday");
//     break;
//     default:
//     console.log("invalid day");
// }




/*------------------------------------------------------------------------------------
                        for loop with declair outside variable
------------------------------------------------------------------------------------*/
// let a = 0;
// for(;a <= 10; a++){
//     console.log(a);
// }




/*------------------------------------------------------------------------------------
                                math formula
------------------------------------------------------------------------------------*/
// let a = 100;
// let b = (a*(a+1))/2;
// console.log(b);







/*------------------------------------------------------------------------------------
                                    &&(ands) operator
------------------------------------------------------------------------------------*/
/*=========== check the starting first character is H & age is 18 using (&) operator ===========*/
// Example - 1 (using (&)operator)
// let firstName = "Haresh";
// let age = 18;
// if(firstName[0] === "H" && age >= 18){
//     console.log("name start with H character & your age are 18 complete");
// }
// else{
//     console.log("name start with not H character & your age are not 18 complete");
// }




/*------------------------------------------------------------------------------------
                                    ||(or) operator
------------------------------------------------------------------------------------*/
/*=========== check the starting first character is H & age is 18 using (&) operator ===========*/
// Example - 1 (using (&)operator)
// let firstName = "Haresh";
// let age = 18;
// if(firstName[0] === "H" || age >= 18){
//     console.log("if part work");
// }
// else{
//     console.log("else part work");
// }




/*------------------------------------------------------------------------------------
                                    ternary operator
------------------------------------------------------------------------------------*/
// let a = 8;
// let b = a >= 5 ? "greater" : "smaller";
// console.log(b);





/*------------------------------------------------------------------------------------
                                break & continue keyword
------------------------------------------------------------------------------------*/
// for(let a = 1; a <= 10; a++){
//     if(a === 4){
//        break;
//     }
//     console.log(a);
// }

// for(let a = 1; a <= 10; a++){
//     if(a === 4){
//        continue;
//     }
//     console.log(a);
// }



/*------------------------------------------------------------------------------------
                                do while loop
------------------------------------------------------------------------------------*/
// let a = 20;
// do {
//     console.log(a);
//     a++;
// }while(a<=19);



/*------------------------------------------------------------------------------------
                                array []
------------------------------------------------------------------------------------*/
// let i = new Array();
// let a = prompt();
// i.push(a);
// console.log(i);


/*=========== change value array ===========*/
// let a = ["haresh", "thumar", "rushabh"];
// a[2] = prompt();
// console.log(a);


/*=========== check the removed value in array ===========*/
// let fruits = ["apple", "mango", "graphes"];
// let poppedFruits = fruits.pop();
// console.log("removed value is : ", poppedFruits);


/*=========== remove last 3 value in array using splice ===========*/
// var array = ['abc', 'def', 'ghi', '123'];
// var removed = array.splice(-2);
// console.log('array:', array);
// console.log('removed:', removed);


/*=========== primitive type VS reference data type ===========*/
// premitive data type
// let num1 = 5;
// let num2 = num1;
// num1++;
// console.log("num1 value is :", num1);
// console.log("num2 value is :", num2);


/*=========== reference data type =========== */
// Array
// let array1 = ["item1", "item2"];
// let array2 = array1;
// console.log("array1 is : ", array1);
// console.log("array2 is : ", array2);
// array1.push("item3");
// console.log("array1 is : ", array1);
// console.log("array2 is : ", array2);


/*=========== clone array example ===========*/
//-----using slice method (faster optimize)------
// let array1 = ["item1", "item2", "item3"];
// let array2 = array1.slice(0);
// console.log(array1);
// console.log(array2);

//-----using concat method------
// let array1 = ["item1", "item2", "item3"];
// let array2 = [].concat(array1);
// console.log(array1);
// console.log(array2);

//-----using spread operator (using many people)------
// let array1 = ["item1", "item2", "item3"];
// let array2 = [...array1];
// console.log(array1);
// console.log(array2);

//-----example : add new item in array2------
// let array1 = ["item1", "item2", "item3"];
// let array2 = array1.slice(0).concat(["item4", "item5"]);
// console.log(array1);
// console.log(array2);

// let array1 = ["item1", "item2", "item3"];
// let array2 = [].concat(array1, "item4", "item5");
// console.log(array1);
// console.log(array2);

// let array1 = ["item1", "item2", "item3"];
// let array2 = [...array1, "item4", "item5"];
// console.log(array1);
// console.log(array2);

// let array1 = ["item1", "item2", "item3"];
// let oneMoreArray = ["item4", "item5"];
// let array2 = [...array1, ...oneMoreArray];
// console.log(array1);
// console.log(array2);


/*=========== print array value in uppercase & lowercase ===========*/
// let item = ["apple", "banana", "grapes", "mango"];
// for(let a = 0; a < item.length; a++){
//     console.log(item[a].toUpperCase());
// }

// let item = ["apple", "banana", "grapes", "mango"];
// let fruits = [];
// for(let a = 0; a < item.length; a++){
//     fruits.push(item[a].toUpperCase());
// }
// console.log(fruits);


// let item = ["APPLE", "BANANA", "GRAPES", "MANGO"];
// for(let a = 0; a < item.length; a++){
//     console.log(item[a].toLowerCase());
// }

// let item = ["APPLE", "BANANA", "GRAPES", "MANGO"];
// let fruits = [];
// for(let a = 0; a < item.length; a++){
//     fruits.push(item[a].toLowerCase());
// }
// console.log(fruits);



/*------------------------------------------------------------------------------------
                            while loop using print array
------------------------------------------------------------------------------------*/
// const item = ["apple", "banana", "grapes", "mango"];
// const fruits = [];
// let i = 0;
// while(i < item.length){
//     fruits.push(item[i].toUpperCase());
//     i++;
// }
// console.log(fruits);



/*------------------------------------------------------------------------------------
                            for of loop using print array
------------------------------------------------------------------------------------*/
// const item = ["apple", "banana", "grapes", "mango"];
// for(let fruit of item){
//     console.log(fruit);
// }

//=========== array value store in variable & print array using for of loop ===========
// const people = ["item1", "item2", "item3", "item4", ];
// for (let index of people) {
//     const var1 = index;
//     console.log(var1);
// }


/*------------------------------------------------------------------------------------
                            for loop using print array
------------------------------------------------------------------------------------*/
// const item = ["apple", "banana", "grapes", "mango"];
// for(let a = 0; a < item.length; a++){
//     console.log(item[a]);
// }


/*------------------------------------------------------------------------------------
                            for in loop using print array
------------------------------------------------------------------------------------*/
// const item = ["apple", "banana", "grapes", "mango"];
// for(let fruit in item){
//     console.log(fruit);
// }

// const item = ["apple", "banana", "grapes", "mango"];
// for(let fruit in item){
//     console.log(item[fruit]);
// }


/*------------------------------------------------------------------------------------
                            array destructuring
------------------------------------------------------------------------------------*/
/*----- print one array value in two variable ------*/
// const item = ["item1", "item2", "item3"];
// let [a, b, c] = item;
// console.log(a);
// console.log(b);
// console.log(c);

// const item = ["item1", "item2", "item3"];
// let a = item[0];
// let b = item[1];
// let c = item[2];
// console.log(a);
// console.log(b);
// console.log(c);

// const haresh = ["value1", "value2", "value3", "value4"];
// let [myVar1, myVar2, ...item] = haresh;
// console.log(myVar1);
// console.log(myVar2);
// console.log(item);



/*------------------------------------------------------------------------------------
                                    Object{}
------------------------------------------------------------------------------------*/
/*=========== access element in object (.) dot ===========*/
// const obj = {name: "haresh", age: 20};
// obj.gender = "male";
// console.log(obj);

/*=========== access element in object ([“ ”]) bracket notation ===========*/
// const obj = {
//     name: "haresh",
//     age: 20,
//     gender : "male"
// };
// console.log(obj["gender"]);

// const obj = {
//     name: "haresh",
//     age: 20,
//     "my hobbies" : ["singing", "dancing", "reading", "swimming"]
// };
// console.log(obj["my hobbies"]);


// let key = "email";
// const obj = {
//     name: "haresh",
//     age: 22,
//     gender: "male",
// }
// obj[key] = "haresh@gmail.com"
// console.log(obj);


/*-------------------- iterate object -------------------*/
//=========== for in loop ===========
// const obj = {
//     name: "haresh",
//     age: 20,
//     "my hobbies" : ["singing", "dancing", "reading", "swimming"]
// };
// for(let haresh in obj){
//     console.log(obj[haresh]);
// }

//=========== object.keys ===========
// Example : 1
// const obj = {
//     name: "haresh",
//     age: 20,
//     "my hobbies": ["singing", "dancing", "reading", "swimming"]
// };
// for (let key in obj) {
//     console.log(`${key} : ${obj[key]}`);
// }

// Example : 2
// const obj = {
//     name: "haresh",
//     age: 20,
//     "my hobbies": ["singing", "dancing", "reading", "swimming"]
// };
// for (let key in obj) {
//     // console.log(key, ":", obj[key]);
// }


/*=========== object to array convert ===========*/
// const obj = {
//     name: "haresh",
//     age: 20,
//     "my hobbies": ["singing", "dancing", "reading", "swimming"]
// };
// console.log(typeof (Object.keys(obj)));
// const itemName = Array.isArray((Object.keys(obj)));
// console.log(itemName);       //return true or false

//=========== only print key name ===========
// const obj = {
//     name: "haresh",
//     age: 20,
//     "my hobbies": ["singing", "dancing", "reading", "swimming"]
// };
// for(let key of Object.keys(obj)){
//     console.log(key);
// }

//=========== only print key value ===========
// const obj = {
//     name: "haresh",
//     age: 20,
//     "my hobbies": ["singing", "dancing", "reading", "swimming"]
// };
// for(let key of Object.keys(obj)){
//     console.log(obj[key]);
// }


/*-------------------- make a object using variable value -------------------*/
////// Example 1 //////
// const key1 = "ovject1";
// const key2 = "ovject2";
// const value1 = "myValue1";
// const value2 = "myValue2";
// const obj = {
//     [key1] : value1,
//     [key2] : value2,
// }
// console.log(obj);

////// Example 2 //////
// const key1 = "ovject1";
// const key2 = "ovject2";
// const value1 = "myValue1";
// const value2 = "myValue2";
// const obj = {};
// obj[key1] = value1;
// obj[key2] = value2;
// console.log(obj);



/*------------------------------------------------------------------------------------
                            object destructuring {}
------------------------------------------------------------------------------------*/
/*========== Object key is ByDefault Variable : ===========*/
// const haresh = {
//     name: "parth",
//     surName: "savaliya",
// }
// const { name, surName } = haresh;
// console.log(name, surName);

/*========== object iterate using fr in loop  ==========*/
// const user = {
//     userId: 1,
//     firstName: "haresh",
//     gender: "male"
// };
// // for (let item in user) {
// //     console.log(user[item]);
// // }

/*========== Extra add Variable Name : ==========*/
// const haresh = {
//     name: "parth",
//     surName: "savaliya",
// }
// const { name: var1, surName: var2 } = haresh;
// console.log(var1, var2);

/*========== Object key is ByDefault Variable with using spread operator: ===========*/
// const haresh = {
//     name: "parth",
//     surName: "savaliya",
//     Year: 1968,
//     place: "kashmir",
// }
// const { name, surName, ...extraKey } = haresh;
// console.log(name, surName);
// console.log(extraKey);

/*========== store multiple object in one array & print multiple & perticular item using for of loop :===========*/
// const user = [
//     { userId: 1, firstName: "haresh", gender: "male" },
//     { userId: 2, firstName: "rushabh", gender: "male" },
//     { userId: 3, firstName: "komal", gender: "female" },
// ];
// for (let item of user) {
//     // console.log(item);
//     // console.log(item.userId);
//     // console.log(item.firstName);
//     // console.log(item.gender);
// };


/*========================= nested destructuring : ===========================*/
//=========== store object value in variable after print all array object ===========
// const user = [
//     { userId: 1, firstName: "haresh", gender: "male" },
//     { userId: 2, firstName: "rushabh", gender: "male" },
//     { userId: 3, firstName: "komal", gender: "female" },
// ];
// const [user1, user2, user3] = user;
// console.log(user1, user2, user3);

//=========== print particular object value ===========
// const user = [
//     { userId: 1, firstName: "haresh", gender: "male" },
//     { userId: 2, firstName: "rushabh", gender: "male" },
//     { userId: 3, firstName: "komal", gender: "female" },
// ];
// const [{ firstName }, , { gender }] = user;
// console.log(firstName, gender);

//=========== store particular object value in variable & print the value using created variable ===========
// const user = [
//     { userId: 1, firstName: "haresh", gender: "male" },
//     { userId: 2, firstName: "rushabh", gender: "male" },
//     { userId: 3, firstName: "komal", gender: "female" },
// ];
// const [{ firstName: item1 }, , { gender: item2 }] = user;
// console.log(item1, item2);






/*------------------------------------------------------------------------------------
                                spread operator{}
------------------------------------------------------------------------------------*/
/*=========== Clone string using spread operator ===========*/
// const str1 = "haresh";
// const str2 = "thumar";
// const newStr = [...str1, ...str2];
// console.log(newStr);

// const newObject = {... "haresh" }
// console.log(newObject);

/*=========== Clone number using spread operator ===========*/
// const str1 = "01234";
// const str2 = "56789";
// const newStr = [...str1, ...str2];
// console.log(newStr);

// const newObject = {... "22446688" }
// console.log(newObject);

/*=========== Clone Array using spread operator ===========*/
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const newArray = [...array1, ...array2];
// console.log(newArray);

// const newObject = {...["item1", "item2"] }
// console.log(newObject);

/*=========== Clone Object using spread operator ===========*/
// const obj1 = {
//     fName: "haresh",
//     hAge: 24,
//     hBirthday: "21 Nov, 1997",
// };
// const obj2 = {
//     lName: "parth",
//     pAge: 22,
//     pBirthday: "i Don't Know"
// };
// const newObj = {...obj1, ...obj2, modal : "car" };
// console.log(newObj);


//**************** clone objet & add key value using spread operator ****************//
// const obj1 = {
//   key1: "value1",
//   key2: "value2",
//   key3: [1,2,3,4],
// }
// const p = {
//   ...obj1,
//   key3: [...obj1.key3]
// }
// p.key3[0] = 100;
// console.log(obj1.key3);
// console.log(p.key3);



// *********** print all object key with pair value ***********
// let obj = {
//     name: 'parth',
//     lname: 'savaliya',
//     age: 22
// }

// let arr = []
// for (let i = 0; i < 5; i++) {    //for of loop print value
//     arr.push(obj)
// }
// for (const iterator of arr) {
//     for (const key in iterator) {   //for in loop print index
//         console.log(key, ":", iterator[key])
//     }
// }


// *********** 5 time run loop & change particular index value ***********
// let obj = {
//     name: 'parth',
//     lname: 'savaliya',
//     age: 22
// }
// let arr = []    // object store in array

// for (let i = 0; i < 5; i++) {    //for loop print 5 time object
//     // let newob = JSON.parse(JSON.stringify(obj))
//     let newob = {...obj };
//     // arr.push(obj)    //object push in array
//     arr.push(newob)
// }
// for (const iterator of arr) {    //for of loop print value
//     let index = arr.indexOf(iterator)
//     if (index == 0) {
//         iterator.name = "hareh"
//         iterator.age = 555
//         iterator.lname = "thummar "
//     }
//     for (const key in iterator) {     //for in loop print index
//         console.log(key, iterator[key])
//     }
// }



/*------------------------------------------------------------------------------------
                                    Function{}
------------------------------------------------------------------------------------*/
/*======================= function declaration ========================*/
/*------- simple function -------*/
// function bday(){
//     console.log("happy birthday to you...");
// }
// bday();

// function sameValue(){
//     console.log(2+2);
// }
// sameValue();

// function returnValue(){
//     return 2 + 5;
// }
// console.log(returnValue());

//------- function value store in variable -------
// function returnValue(){
//     return 2 + 5;
// }
// const a = returnValue()
// console.log(a);

//------- sum number using function parameter & argument -------
// function sumTwoNumber(num1, num2){
//     return num1 + num2;
// }
// const a = sumTwoNumber(5,10);
// console.log(a);

//------- sum number using prompt box in function -------
// let a = +prompt();
// let b = +prompt();

// function sumInput(){
//     return a + b;
// }
// let c = sumInput()
// console.log(c);

//------- check odd or even number using prompt box in function -------
// let num = prompt();
// function isEven(){
//     if(num % 2 === 0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isEven());

//------- sort odd or even number in function -------
// function isEven() {
//     for (let index = 0; index <= 50; index++) {
//         if (index % 2 === 0) {
//             console.log("even", index);
//         }
//         else {
//             console.log("odd", index);
//         }
//     }
// }
// isEven();


/*======================= function expression ==========================*/
/*------- simple function -------*/
// const bday = function(){
//     console.log("happy birthday to you...");
// }
// console.log(bday());

// const sameValue = function(){
//     console.log(2+2);
// }
// console.log(sameValue());

// const returnValue = function(){
//     return 2 + 5;
// }
// console.log(returnValue());

//------- function value store in variable -------
// const returnValue = function(){
//     return 2 + 5;
// }
// const a = returnValue()
// console.log(a);

//------- sum number using function parameter & argument -------
// const sumTwoNumber = function(num1, num2){
//     return num1 + num2;
// }
// const a = sumTwoNumber(5,10);
// console.log(a);

//------- sum number using prompt box in function -------
// let a = +prompt();
// let b = +prompt();

// const sumInput = function(){
//     return a + b;
// }
// let c = sumInput();
// console.log(c);

//------- check odd or even number using prompt box in function -------
// let num = prompt();
// const isEven = function(){
//     if(num % 2 === 0){
//         return true;
//     }else{
//         return false;
//     }
// }
// let a = isEven();
// console.log(a);

//------- sort odd or even number in function -------
// const isEven = function() {
//     for (let index = 0; index <= 50; index++) {
//         if (index % 2 === 0) {
//             console.log("even", index);
//         }
//         else {
//             console.log("odd", index);
//         }
//     }
// }
// console.log(isEven());



/*============================ arrow function ===========================*/
/*------- simple function -------*/
// const bday = () => {
//     console.log("happy birthday to you...");
// }
// console.log(bday());

// const sameValue = () => {
//     console.log(2+2);
// }
// console.log(sameValue());

// const isEven = number => number % 2 ===0;
// console.log(isEven(4));

// const returnValue = () => {
//     return 2 + 5;
// }
// console.log(returnValue());

//------- function value store in variable -------
// const returnValue = () => {
//     return 2 + 5;
// }
// const a = returnValue()
// console.log(a);

//------- sum number using function parameter & argument -------
// const sumTwoNumber = (num1, num2) => {
//     return num1 + num2;
// }
// const a = sumTwoNumber(5,10);
// console.log(a);
//--------- shortcut arrow function ----------
// const sumTwoNumber = (num1, num2) => num1 + num2;
// const a = sumTwoNumber(5, 10);
// console.log(a);

//------- sum number using prompt box in function -------
// let a = +prompt();
// let b = +prompt();

// const sumInput = () => {
//     return a + b;
// }
// let c = sumInput();
// console.log(c);

//------- check odd or even number using prompt box in function -------
// let num = prompt();
// const isEven = () => {
//     if(num % 2 === 0){
//         return true;
//     }else{
//         return false;
//     }
// }
// let a = isEven();
// console.log(a);

//------- sort odd or even number in function -------
// const isEven = () => {
//     for (let index = 0; index <= 50; index++) {
//         if (index % 2 === 0) {
//             console.log("even", index);
//         }
//         else {
//             console.log("odd", index);
//         }
//     }
// }
// console.log(isEven());


/*========================== function hoisting =========================*/
// hello();
// function hello() {
//     console.log("hello haresh");
// }


/*============================ function scope ==========================*/
// function my(){
//     function abc(){
//        {

//        }
//         console.log("from block of code", c);
//     }
//     abc();
//     console.log(c);
// }
// my();


// function abc(){ //var scoping and hoisting
//     console.log(a); //undefined
//     console.log(a); //undefined
//     {
//         var a = 10;
//     }
//     console.log(a); //10
// }
// abc();
// console.log(a); //error


/*=========== var keyword & same variable not access in another function ===========*/
// function abc(){
//     var a = 15;
//     console.log(a);
// }
// abc();

// function xyz(){
//     var a = 25;
//     console.log(a);
// }
// xyz();


// function abc(){ //var scoping and hoisting
//     console.log(a); //undefined
//     console.log(a); //undefined
//     {
//         let a = 10;
//     }
//     console.log(a); //10
// }
// abc();
// console.log(a);//error


// function bc(){ //let and const not hoisted at top of the function
//     console.log(b);
//     let b = 100;
// };


/*========================== Function inside function =========================*/
// const app = () => {
//     const myFunc = () => {
//         console.log("this is first function");
//     }
//     const addTwoValue = (num1, num2) => {
//         return num1 + num2;
//     }
//     const plusValue = (num1, num2) => num1 * num2;

//     myFunc();
//     console.log(addTwoValue(2, 5));
//     console.log(plusValue(5, 5));
// }
// app();


/*========================== lexical scope =========================*/
/*--------- normal function lexical scope --------*/
// const myVar = "normal function out scope call";
// const app = () => {
//     const myVar = "out scope call";

//     function myFunc() {
//         const myVar = "in scope call"
//         console.log("inside myFunc :", myVar);
//     }
//     console.log(myVar);
//     myFunc();
// }
// app();

/*--------- function expression lexical scope --------*/
// const myVar = "function out scope call";
// const app = () => {
//     const myVar = "out scope call";

//     const myFunc = function() {
//         const myVar = "in scope call"
//         console.log("inside myFunc :", myVar);
//     }
//     console.log(myVar);
//     myFunc();
// }
// app();

/*--------- arrow function lexical scope --------*/
// const myVar = "function out scope call";
// const app = () => {
//     const myVar = "out scope call";

//     const myFunc = () => {
//         const myVar = "in scope call"
//         console.log("inside myFunc :", myVar);
//     }
//     console.log(myVar);
//     myFunc();
// }
// app();


/*================= block scope VS function scope ===============*/
/*--------- var scope --------*/
// {
//     var haresh = "var scope";
// }
// console.log(haresh);

/*--------- let scope --------*/
// {
//     let haresh = "let scope";
// }
// console.log(haresh);

/*--------- const scope --------*/
// {
//     const haresh = "const scope";
// }
// console.log(haresh);


/*================= default parameter ===============*/
// function addValue(a, b=0){
//     return a + b;
// }
// let ans = addValue(4);
// console.log(ans);


/*================= rest parameter ===============*/
// function myFunc(a, b, ...c){
//     console.log("first value :", a);
//     console.log("second value :", b);
//     console.log("three value :", c);
// }
// myFunc(1,2,3,4,5,6,7);

/*========== all argument sum using function ==========*/
// function sum(...numbers) {
//     let total = 0;
//     for (let number of numbers) {
//         total = total + number;
//     }
//     return total;
// }
// let ans = sum(1, 2, 3, 4, 5, 6);
// console.log(ans);


/*============= parameter destructuring ==============*/
// const obj = {
//     name: "haresh",
//     gender: "male",
//     age: 24,
// }
// function printObj({ name, gender, age }) {
//     console.log(name, gender, age);
// }
// printObj(obj);


/*============= callback function with two parameter ==============*/
// function myFunc1() {
//     console.log("inside my func 1");
// }
// function myFunc2(callback) {
//     console.log("inside my func 2");
//     callback();
// }
// myFunc2(myFunc1);


// function myFunc1(name) {
//     console.log("inside my func 1");
//     console.log(`your name is ${name}`);
// }

// function myFunc2(callback) {
//     console.log("inside my func 2");
//     callback("haresh");
// }
// myFunc2(myFunc1);


/*============= function returning function ==============*/
// function haresh() {
//     function myFunc() {
//         console.log("hello world");
//     }
//     return myFunc;
// }
// let ans = haresh();
// ans();

// function haresh() {
//     return function myFunc() {
//         console.log("hello world");
//     }
// }
// let ans = haresh();
// ans();




/*===============================================================================
                            Array with function
===============================================================================*/
/*---- first index * 2 multiplication in Array using function ----*/
// const numbers = [4, 3, 5, 6];
// function haresh(number, index) {
//     console.log(`${number}*2 = ${number*2}`);
// }
// haresh(numbers[0]);

//======================== forEach method =========================//
/*------- forEach Loop Using multiplication in array value -------*/
// const numbers = [2, 5, 7, 9, 3];
// numbers.forEach(function(number, index) {
//     console.log(`index is ${index} number is ${number*2}`);
// });

/*------- print first name in array of object using forEach with arrow function -------*/
// const hareshObj = [
//     { firstName: "haresh", age: 20, gender: "male" },
//     { firstName: "mohit", age: 21, gender: "male" },
//     { firstName: "rutvik", age: 22, gender: "male" },
// ];
// hareshObj.forEach(x => {
//     console.log(x.firstName);
// });


//======================== map method =========================//
// const number = [5, 2, 3, 8, 6, 4];
// const square = function(number){
//     return number * number;
// }
// const arrarValue = number.map(square);
// console.log(arrarValue);

/*-------- function expression -------*/
// const number = [5, 2, 3, 8, 6, 4];
// const arrarValue = number.map(function(number){
//     return number * number;
// });
// console.log(arrarValue);

/*-------- arrow function -------*/
// const number = [5, 2, 3, 8, 6, 4];
// const arrarValue = number.map(number =>{
//     return number * number;
// });
// console.log(arrarValue);

/*-------- reslistic Example of arrow function -------*/
// const hareshObj = [
//     { firstName: "haresh", age: 24, gender: "male" },
//     { firstName: "mohit", age: 21, gender: "male" },
//     { firstName: "rutvik", age: 22, gender: "male" },
//     { firstName: "sweta", age: 23, gender: "female" },
// ];
// const total = hareshObj.map((user)=>{
//     return user.firstName + " " + user.age + " " + user.gender;
// });
// console.log(total);


//======================== filter method =========================//
/*----- check even number -----*/
// const isEven = [5, 8, 3, 4, 9, 2, 1, 6];
// const checkEven = isEven.filter((number)=>{
//     return number % 2 === 0;
// });
// console.log(checkEven);

/*----- check odd number -----*/
// const isOdd = [5, 8, 3, 4, 9, 2, 1, 6];
// const checkOdd = isOdd.filter((number)=>{
//     return number % 2 !== 0;
// });
// console.log(checkOdd);


//======================== reduce method =========================//
/*------ sum of all number in array -------*/
// const user = [1, 2, 3, 4, 5, 6, 10];
// const total = user.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// });
// console.log(total);
// accumulator   +   currentValue   +   return  (work flow)
// bydefault 1        bydefault 2       3
// 3                  3                 6
// 6                  4                 10
// 10                 5                 15
// 15                 6                 21
// 21                 10                31


/*------ sum of all number using reduce in array of object -------*/
// const userCart = [
//     {productId: 1, ProductName: "mobile", productPrice: 10000},
//     {productId: 2, ProductName: "mobile", productPrice: 10000},
//     {productId: 3, ProductName: "mobile", productPrice: 10000},
// ];
// const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
//     return totalPrice + currentProduct.productPrice;
// }, 0);
// console.log(totalAmount);


/*------ sum of all number using for loop in array of object -------*/
// const userCart = [
//     {productId: 1, ProductName: "mobile", productPrice: 10000},
//     {productId: 2, ProductName: "mobile", productPrice: 10000},
//     {productId: 3, ProductName: "mobile", productPrice: 10000},
// ];
// let ft = 0;
// for(let total of userCart){
//     ft = total.productPrice + ft;
// }
// console.log(ft);


//======================== sort method =========================//
/*----- ascending order -----*/
// const numbers = [5, 2, 8, 400, 600, 200, 1400, 800, 950];
// const sortNumber = numbers.sort((a, b) => a - b);
// console.log(numbers);                                // [2, 5, 8, 200, 400, 600, 800, 950, 1400] 

/*----- descending order -----*/
// const numbers = [5, 2, 8, 400, 600, 200, 1400, 800, 950];
// const sortNumber = numbers.sort((a, b) => b - a);
// console.log(numbers);                                   //[1400, 950, 800, 600, 400, 200, 8, 5, 2]

/*----- sort product sorting lowToHigh & highToLow (realistic example) -----*/
// const userCart = [
//     { productId: 1, productName: "p1", productPrice: 500 },
//     { productId: 2, productName: "p2", productPrice: 1200 },
//     { productId: 3, productName: "p3", productPrice: 800 },
//     { productId: 4, productName: "p4", productPrice: 200 },
//     { productId: 5, productName: "p5", productPrice: 650 },
//     { productId: 6, productName: "p6", productPrice: 2100 },
//     { productId: 7, productName: "p7", productPrice: 50 },
// ];
// const lowToHigh = userCart.slice().sort((a, b) => {
//     return a.productPrice - b.productPrice;
// })
// console.log(lowToHigh[0].productPrice);

// const highToLow = userCart.slice().sort((a, b) => {
//     return b.productPrice - a.productPrice;
// })
// console.log(highToLow);


//======================== find method =========================//
/*------- find element using arrow function -------*/
// const haresh = ["elephant", "camel", "dog", "cat", "buffalo"];
// const animal = haresh.find(item => item.length === 3);
// console.log(animal);

/*------ find perticular userId using arrow function in find method ------*/
// const user = [
//     { userId: 1, userName: "haresh" },
//     { userId: 2, userName: "parth" },
//     { userId: 3, userName: "rutvik" },
//     { userId: 4, userName: "rushabh" },
//     { userId: 5, userName: "divyesh" },
//     { userId: 6, userName: "gunjan" },
// ];
// const findName = user.find((item) => item.userId === 3);
// console.log(findName.userId);


//======================== every method =========================//
/*----- check even number in array -----*/
// const a = [2, 4, 6, 8, 10];
// const b = a.every((c) => c % 2 === 0);
// console.log(b);

/*----- check odd number in array -----*/
// const a = [1, 3, 5, 7, 9];
// const b = a.every((c) => c % 2 !== 0);
// console.log(b);

/*------ sum of all number using for loop in array of object -------*/
// const userCart = [
//     { productId: 1, ProductName: "mobile", productPrice: 10000 },
//     { productId: 2, ProductName: "mobile", productPrice: 15000 },
//     { productId: 3, ProductName: "mobile", productPrice: 21000 },
// ];
// const checkPrice = userCart.every((cartItem) => cartItem.productPrice < 30000);
// console.log(checkPrice);


//======================== some method =========================//
/*----- check odd number in array -----*/
// const a = [1, 3, 5, 8, 9];
// const b = a.some((c) => c % 2 === 0);
// console.log(b);

/*------ check the value greater than 100000 using some method in array of object -------*/
// const userCart = [
//     { productId: 1, ProductName: "mobile", productPrice: 10000 },
//     { productId: 2, ProductName: "mobile", productPrice: 15000 },
//     { productId: 3, ProductName: "mobile", productPrice: 210000 },
// ];
// const checkPrice = userCart.some((cartItem) => cartItem.productPrice > 100000);
// console.log(checkPrice);


//======================== fill method =========================//
/*----- print the vallue in your choice -----*/
// const myArray = new Array(10).fill("haresh");
// console.log(myArray);

/*----- custom value fill in your existing array -----*/
// argument (value, start, end)
// const haresh = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// haresh.fill(0, 2, 5);
// console.log(haresh);





/*===============================================================================
                            iterables
===============================================================================*/
/*----- string -----*/
// const haresh = "haresh";
// for (let item of haresh) {
//     console.log(item);
// }

/*----- array -----*/
// const haresh = [1, 2, 3, 4, 5];
// for (let item of haresh) {
//     console.log(item);
// }



/*===============================================================================
                            array like object
===============================================================================*/
/*-------- string --------*/
// const firsrName = "haresh";
// console.log(firsrName.length);

/*-------- array --------*/
// const firsrName = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(firsrName.length);



/*===============================================================================
                        set & get key value pair in map
===============================================================================*/
/*------ set & get key value pair in map ------*/
// const person = new Map();
// person.set('firstName', 'haresh');
// person.set('age', 24);
// person.set(123, 'user');
// person.set([1,2,3], 'onetwothree');
// person.set({1:'one'}, 'onetwothree');
// console.log(person);
// console.log(person.get('age'));
// console.log(person.get(123));
// console.log(person.keys());
// for(let item of person.keys()){
//     console.log(item);
// }
// for(let item of person.keys()){
//     console.log(item, typeof item);
// }
// for(let item of person){ 
//     console.log(item);
// }
// for(let [item, value] of person){			
//     console.log(item, value);
// }

/*------ set key value pair in array of array in map ------*/
// const person = new Map([['firstName', 'haresh'], ['age', 24],[[1,2,3], 'onetwothree'], [123, 'user']]);
// console.log(person);

/*------ use object in map-------*/
// const haresh1 = {
//     id: 1,
//     firstName: "harshir",
// }
// console.assert(haresh1);
// console.log(typeof haresh1);
// const extraInfo = new Map();
// extraInfo.set(haresh1, { age: 8, gender: "male" });
// console.log(extraInfo);const

/*------ clone object method-------*/
// const obj = {
//     key1: "value1",
//     key2: "value2",
// };
// const obj2 = {...obj};
// const obj2 = Object.assign({}, obj);
// obj.key3 = "value3";
// console.log(obj);
// console.log(obj2);



/*===============================================================================
                            optional chaining
===============================================================================*/
// const user = {
//     firstName: "haresh",
// }
// console.log(user.firstName);
// console.log(user?.address?.houseNumber);

// const haresh = {
//     key1: "value1",
// }
// const user = haresh?.key2?.age;
// console.log(user);



/*===============================================================================
                                methods
===============================================================================*/
/*---- use this keyword & access object inside property dynamically ----*/
// const user = {
//     firstName: "haresh",
//     age: 24,
//     about: function(){
//         console.log(`user name is ${this.firstName} & user age is ${this.age}`);
//     }
// }
// user.about();

/*---- declair outside function & access outside function in multiple object ----*/
// function personInfo(){
//     console.log(`person name is ${this.firstName} & age is ${this.age}`);
// }
// const user1 = {
//     firstName: "haresh",
//     age: 24,
//     about: personInfo
// }
// const user2 = {
//     firstName: "rutvik",
//     age: 23,
//     about: personInfo
// }
// const user3 = {
//     firstName: "parth",
//     age: 22,
//     about: personInfo
// }
// user1.about();
// user2.about();
// user3.about();

/*------ this keyword ------*/
// function myFunc(){
//     console.log(this);
// }
// myFunc();

/*------ use srtict mode ------*/
// function myFunc(){
//     'use strict'
//     console.log(this);
// }
// myFunc();




/*===============================================================================
                            function
===============================================================================*/
/*------- call function using call method -------*/
// function user(){
//     console.log("hello haresh");
// }
// user.call();

/*------- target second object value using first object with parameter using call method -------*/
// const user1 = {
//     firstName : "haresh",
//     age : 24,
//     about : function(hobby, music){
//         console.log(this.firstName, this.age, hobby, music);
//     },
// }
// const user2 = {
//     firstName : "rutvik",
//     age : 22,
// }
// user1.about.call(user2, "songs", "sonu");

/*------- outside declare function & access object using call method -------*/
// function about (hobby, music){
//     console.log(this.firstName, this.age, hobby, music);
// }
// const user1 = {
//     firstName : "haresh",
//     age : 24,
// }
// const user2 = {
//     firstName : "rutvik",
//     age : 22,
// }
// about.call(user2, "songs", "sonu");


/*------- apply function using call method -------*/
// function user(){
//     console.log("hello haresh");
// }
// user.apply();

/*------- target second object value using first object with parameter using apply method -------*/
// const user1 = {
//     firstName : "haresh",
//     age : 24,
//     about : function(hobby, music){
//         console.log(this.firstName, this.age, hobby, music);
//     },
// }
// const user2 = {
//     firstName : "rutvik",
//     age : 22,
// }
// user1.about.apply(user2, ["songs", "sonu"]);


/*------- bind function using call method -------*/
// function user(){
//     console.log("hello haresh");
// }
// const myFunc = user.bind();
// myFunc();

/*------- target second object value using first object with parameter using bind method -------*/
// const user1 = {
//     firstName : "haresh",
//     age : 24,
//     about : function(hobby, music){
//         console.log(this.firstName, this.age, hobby, music);
//     },
// }
// const user2 = {
//     firstName : "rutvik",
//     age : 22,
// }
// const myfunc = user1.about.bind(user2, "songs", "sonu");
// myfunc();

/*----- inside function call using bind method ------*/
// const user1 = {
//     firstName : "haresh",
//     age : 24,
//     about : function(){
//         console.log(this.firstName, this.age);
//     }
// }
// const myFunc = user1.about.bind(user1);
// myFunc();

/*----- this keyword not use in arrow function inside object ------*/
// const user1 = {
//     firstName: "haresh",
//     age: 20,
//     about: () => {
//         console.log(this.firstName, this.age);
//     }
// }
// user1.about(user1);

/*----- shorthand code function in object ------*/
// const user1 = {
//     firstName: "haresh",
//     age: 20,
//     about(){
//         console.log(this.firstName, this.age);
//     }
// }
// user1.about(user1);


/*===============================================================================
                            Additional Logic
===============================================================================*/
/*======== swap the character in variable ===========*/
// let a = 15;
// let b = 25;
// a = a - b;
// b = a + b;
// a = b - a;
// console.log(a);
// console.log(b);

// let a = 15;
// let b = 25;
// let c = a;
// console.log(a=b);
// console.log(b=c);

//*********** parameter wise pass argument ***********/
// function haresh(obj) {
//     if (obj.name != undefined) {

//         console.log("Name :", obj.name);
//     }
//     if (obj.age != undefined) {

//         console.log("Age :", obj.age);
//     }
//     if (obj.lname != undefined) {

//         console.log("Lname:", obj.lname);
//     }
// }
// haresh({ name: 22 });





/****************************************************************************************************************************************
                                                    OBJECT ORIENTED PROGRAMMING IN JAVASCRIPT
/****************************************************************************************************************************************/
// function 
// 1) that function create object 
// 2) add key value pair
// 3) return of object


//**************** make method inside object & make multiple methode using function (Method-1) ****************//
// const user1 = {
//   firstName: "haresh",
//   lastName: "thumar",
//   email: "hareshthumar@gmail.com",
//   age: 22,
//   address: "hyderabad",
//   about: function(){
//     return `${this.firstName} is ${this.age} year old`;
//   },
//   is18: function(){
//     return this.age >= 18;
//   }
// }
// function createUser(firstName, lastName, email, age, address){
//   const user2 = {};
//   user2.firstName = firstName;
//   user2.lastName = lastName;
//   user2.email = email;
//   user2.age = age;
//   user2.address = address;
//   user2.about = function(){
//     return `${this.firstName} is ${this.age} year old`;
//   },
//   user2.is18 = function(){
//     return this.age >= 18;
//   }
//   return user2;
// }
// const getUser1 = createUser("rushabh", "patel", "rushabh@gmail.com", 18, "gujrat");      // this is output
// const getUser2 = createUser("parth", "savaliya", "parth@gmail.com", 20, "mysoor");       // this is output
// console.log(getUser1);
// console.log(getUser2);
// const is18 = user1.is18();        
// const about = user1.about();      
// console.log(is18);                // true
// console.log(about);               // haresh is 22 year old


//**************** method outside object & make multiple methode using function (Method-2) ****************//
// const user1 = {
//   firstName: "haresh",
//   lastName: "thumar",
//   email: "hareshthumar@gmail.com",
//   age: 22,
//   address: "hyderabad",
//   about: function(){
//     return `${this.firstName} is ${this.age} year old`;
//   },
//   is18: function(){
//     return this.age >= 18;
//   }
// }
// const userMethod = {
//   about: function(){
//     return `${this.firstName} is ${this.age} year old`;
//   },
//   is18: function(){
//     return this.age >= 18;
//   }
// }
// function createUser(firstName, lastName, email, age, address){
//   const user2 = {};
//   user2.firstName = firstName;
//   user2.lastName = lastName;
//   user2.email = email;
//   user2.age = age;
//   user2.address = address;
//   user2.about = userMethod.about;
//   user2.is18 = userMethod.is18;
//   return user2;
// }
// const getUser1 = createUser("rushabh", "patel", "rushabh@gmail.com", 18, "gujrat");      // this is output
// const getUser2 = createUser("parth", "savaliya", "parth@gmail.com", 20, "mysoor");       // this is output
// const getUser3 = createUser("", "savaliya", "parth@gmail.com", 20, "mysoor");       // this is output
// console.log(getUser1.about());              // rushabh is 18 year old
// console.log(getUser2.is18());               // true


//**************** method outside object & make multiple methode using function (Method-2) ****************//
// const user1 = {
//   firstName: "haresh",
//   lastName: "thumar",
//   email: "hareshthumar@gmail.com",
//   age: 22,
//   address: "hyderabad",
//   about: function(){
//     return `${this.firstName} is ${this.age} year old`;
//   },
//   is18: function(){
//     return this.age >= 18;
//   }
// }
// const userMethod = {
//   about: function(){
//     return `${this.firstName} is ${this.age} year old`;
//   },
//   is18: function(){
//     return this.age >= 18;
//   },
//   sing: function(){
//     return "toon na na na la la...";
//   }
// }
// function createUser(firstName, lastName, email, age, address){
//   const user2 = {};
//   user2.firstName = firstName;
//   user2.lastName = lastName;
//   user2.email = email;
//   user2.age = age;
//   user2.address = address;
//   user2.about = userMethod.about;
//   user2.is18 = userMethod.is18;
//   user2.sing = userMethod.sing;
//   return user2;
// }
// const getUser1 = createUser("rushabh", "patel", "rushabh@gmail.com", 18, "gujrat");      // this is output
// const getUser2 = createUser("parth", "savaliya", "parth@gmail.com", 20, "mysoor");       // this is output
// const getUser3 = createUser("", "savaliya", "parth@gmail.com", 20, "mysoor");       // this is output
// console.log(getUser1.about());              // rushabh is 18 year old
// console.log(getUser2.is18());               // true
// console.log(getUser2.sing());               // toon na na na la la...


//**************** print object using function ****************//
// const user1 = {
//   firstName: "haresh",
//   lastName: "thumar",
//   email: "hareshthumar@gmail.com",
//   age: 22,
//   address: "hyderabad",
//   about: function(){
//     return `${this.firstName} is ${this.age} year old`;
//   },
//   is18: function(){
//     return this.age >= 18;
//   }
// }
// function createUser(firstName, lastName, email, age, address, about, is18){
//   const user2 = {};
//   user2.firstName = firstName;
//   user2.lastName = lastName;
//   user2.email = email;
//   user2.age = age;
//   user2.address = address;
//   user2.about = about;
//   user2.is18 = is18;
//   return user2;
// }
// const getUser1 = createUser(user1.firstName, user1.lastName, user1.email, user1.age, user1.address, user1.about, user1.is18);
// user1.about();
// console.log(getUser1.about());
// console.log(getUser1.is18());


//**************** this is one more way to create empty object ****************//
// const obj2 = Object.create(obj1);
// obj2.key2 = "newValue2";
// obj2.key4 = "value4";
// obj2.key3[0] = 10;
// console.log(obj2.key3);
// console.log(obj1.key3);


//**************** proto & prototype chain ****************//
// const obj1 = {
//   key1: "value1",
//   key2: "value2",
//   key3: [1,2,3,4],
// }
// const obj2 = Object.create(obj1);
// obj2.key2 = "newValue2";
// obj2.key3 = "value3";
// obj2.key4 = "value4";
// console.log(obj2.__proto__);        // {key1: 'value1', key2: 'value2', key3: array[4],}


//**************** proto chain Example ****************//
// const userMethod = {
//   about: function(){
//     return `${this.firstName} is ${this.age} year old`;
//   },
//   is18: function(){
//     return this.age >= 18;
//   },
//   sing: function(){
//     return "toon na na na la la...";
//   }
// }
// function createUser(firstName, lastName, email, age, address){
//   const user2 = Object.create(userMethod);
//   user2.firstName = firstName;
//   user2.lastName = lastName;
//   user2.email = email;
//   user2.age = age;
//   user2.address = address;
//   user2.about = userMethod.about;
//   user2.is18 = userMethod.is18;
//   user2.sing = userMethod.sing;
//   return user2;
// }
// const getUser1 = createUser("rushabh", "patel", "rushabh@gmail.com", 18, "gujrat");      // this is output
// const getUser2 = createUser("parth", "savaliya", "parth@gmail.com", 20, "mysoor");       // this is output
// const getUser3 = createUser("", "savaliya", "parth@gmail.com", 20, "mysoor");       // this is output
// console.log(getUser1);
// console.log(getUser2);
// console.log(getUser3);
// console.log(getUser1.about());              // rushabh is 18 year old
// console.log(getUser2.is18());               // true
// console.log(getUser3.sing());               // toon na na na la la...




/********** count first index & last index in array **********/
// let haresh = [10, 20, 30, 40, 50];
// let user = haresh[0] + haresh[haresh.length-1];
// console.log(user); 


/********** check the first index & last index are same in array **********/
// let haresh = [10, 20, 30, 40, 50];
// if(haresh[0] === haresh[haresh.length-1]){
//   console.log("element is same");
// }else{
//   console.log("element is not same");
// }


/********** remove the all element last 4 number in array **********/
// let haresh = [];
// let cutele = [];
// for (let index = 1; index <= 100; index++) {
//   haresh.push(index);
// }
// for (let i = 0; i < haresh.length; i++) {
//   let element = haresh[i].toString();
//   if(element[haresh[i].toString().length-1].includes("4")){
//     haresh.splice(i,1)
//     cutele.push(Number(element))
//   }
// }
// console.log(haresh);
// console.log(cutele);

/*---- short hand -----*/
// haresh.forEach((x, i) => {
//   if (x.toString()[x.toString().length-1].includes(4)) {
//     haresh.splice(i, 1)
//   }
// })
// console.log(haresh);


/********** if condition with add key value in object *********/
let obj = [
  {
    name: "parth",
    age: 22
  },
  {
    name: "haresh",
    age: 24
  },
  {
    name: "rushabh",
    age: 22
  },
  {
    name: "Ravat",
    age: 22
  },
];
let newfinal = obj.map(x => {
  if (x.age === 22) {
    x.education = "10th";
    return x;
  } else {
    x.education = "12th";
    return x;
  }
})
console.log(newfinal);


/******* all value addition in array *******/
// let arr1 = [1, 4, 6, 9, 5]
// // let plus = 0
// // arr1.forEach(x => plus += x)
// console.log(plus);

/*----- short hand code ------*/
// console.log(arr1.reduce((x,i)=>x+i));


/*********** print center value in array *********/
// let arr1 = [0, 1, 1, 1, 0];
// let arr2 = [0, 2, 2, 2, 0];
// let arr3  = [...arr1.slice(1,4), ...arr2.slice(1,4)];
// console.log(arr3);


/******** replace even number ********/
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 10]
// arr.forEach((x, i) => {
//   if (x % 2 == 0) {
//     arr[i]= "beki";
//   }
// })
// console.log(arr);


/********* print object value using inside function ********/
// let obj = {
//   name: "parth",
//   age: 22,
//   getfullname: () => {
//    return  obj.name + " " + obj.age
//   }
// }
// console.log(obj.getfullname());




/************ javascript function ===> function + object *********** */
/*----- print simple function with object type -----*/
// function hello(){
//   console.log("hello world");
// }
// console.log(hello.name);

/*----- you can add your own properties -----*/
// function hello(){
//   console.log("hello world");
// }
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);

/*---- check the prototype in function using if condition ----*/
// function hello(){
//   console.log("hello world");
// }
// if(hello.prototype){
//   console.log("prototype is present");
// }else{
//   console.log("prototype is not present");
// }

/*---- check the prototype in object using if condition ----*/
// const hello = {key1: "value1"};
// if(hello.prototype){
//   console.log("prototype is present");
// }else{
//   console.log("prototype is not present");
// }

/*---- check the prototype in array using if condition ----*/
// const hello = ["value1", "value2"];
// if(hello.prototype){
//   console.log("prototype is present");
// }else{
//   console.log("prototype is not present");
// }



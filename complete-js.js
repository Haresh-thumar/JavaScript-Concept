/*--------- What is the JavaScript ---------*/
// JavaScript is the programming language of HTML and the Web. It is an interpreted programming language with object-oriented MediaCapabilities.


/*--------- JavaScript History ---------*/
// • 1995 by Brendan Eich (NetScape)
// • Mocha
// • LiveScript
// • JavaScript
// • ECMAScript


/*--------- Advantage of JavaScript ---------*/
// • Client Side Execution
// • Validation on Browser
// • Easy Language


/*--------- Disadvantage of JavaScript ---------*/
// • Less Secure
// • No Hardware Access
// • JavaScript Enable Browsers




/********************************************************************************************
                                        Document Write
********************************************************************************************/
// document.write("Hello World" + "<br>");              // Hello World

// var variable1 = "JavaScript";
// document.write(variable1 + "<br>");                  // JavaScript

// document.write("Hello " + variable + "<br>");        // Hello JavaScript

// document.write(4 + 2 + "<br>");                      // 6




/********************************************************************************************
                                        Window Alert
********************************************************************************************/
// window.alert("Hello World");                     // Hello World

// var variable2 = "JavaScript";                    // JavaScript
// window.alert(variable2);

// window.alert("Hello " + variable2);              // Hello JavaScript

// window.alert(4 + 2);                             // 6




/********************************************************************************************
                                        Identifier
********************************************************************************************/
/* An identifier is a name having a few letters, numbers, and special character _(underscore).
   it is used to identify a variable, function, symbolic constant and so on. */

/* • X2
   • PI
   • Sigma
   • matadd





/********************************************************************************************
                                        Variables
********************************************************************************************/
/* a variable is an identifier or a name which is used to refer a value. a varible is written
   with a combination of letters, numbers and special character _(underscore) and $ (dollar)
   with the first letter being an alphabet. {c, fact, b33, total_amount, etc..}

/*----- Rules -----*/
/* • variable can contain combination of letters, digits, underscore(_), & dollor signs($).
   • must begin with a letter A-Z or a-z or underscore or dollar sign.
   • a variable name can not start with a number.
   • must not contain any space characters.
   • javascript is case-sensitive.
   • can't use reserved keywords.




/********************************************************************************************
                                        Data Type
********************************************************************************************/
/* in javascript we do not need to specified type of the variable because it is dynamically
   used by javascript enngine. */
/* we can iuse var Data type. it can hold any type of data like String, Number, Boolean, etc... */

/*----- Primitive Data type -----*/
/* • String
   • Number
   • Boolean
   • Undefined
   • Null

/*----- Non-Primitive Data type -----*/
/* • Object
   • Array
   • RegExp




/********************************************************************************************
                            Declaring & initializing Variable
********************************************************************************************/
/*------------ Declaring Variable ------------*/
// var roll;
// var name;
// var price;

/*------------ initializing Variable ------------*/
// var roll;
// roll = 101;
// document.write(roll);                // 101

// var name;
// name = "hello world";
// document.write(name);                // hello world

// var price;
// price = 125.36;
// document.write(price);               // 125.36

// var x = 10, y = 20, z = 30;
// document.write(x);                   // 10
// document.write(y);                   // 20
// document.write(z);                   // 30

// var fname = "hello", lname = "world";
// document.write(fname);                     // hello
// document.write(lname);                     // world

// var name = "javascript", roll = 101;
// document.write(name);                        // javascript
// document.write(roll);                        // 101




/*****************************************************************************************************
                                        Arithmatic Operators
*****************************************************************************************************/
/*
------------------------------------------------------------------------------------
operators           Meaning                             Example             Result
------------------------------------------------------------------------------------
    +               Addition                            4 + 2                  6
    -               Substraction                        4 - 2                  2
    *               Multiplication                      4 * 2                  8
    /               Division                            4 / 2                  2
    %               Modulus operator to get             5 % 2                  1
                    remainder in integer division
    ++              Increment                           A + 10; A++            11
    --              Decrement                           A - 10; A--            9
-------------------------------------------------------------------------------------*/

/*===== Addition (+) =====*/
// var a = 10;
// var b = 20;
// var c = a + b;
// document.write(c);      // 30

/*===== Substraction (-) =====*/
// var a = 10;
// var b = 20;
// var c = a - b;
// document.write(c);      // 10

/*===== Multiplication (*) =====*/
// var a = 10;
// var b = 20;
// var c = a * b;
// document.write(c);      // 200

/*===== Division (/) =====*/
// var a = 10;
// var b = 20;
// var c = a / b;
// document.write(c);      // 0.5

/*===== Modulus operator to get remainder in integer division (%) =====*/
// var a = 20;
// var b = 10;
// var c = a % b;
// document.write(c);      // 0 (Modulus)

/*===== Increment (++) =====*/
// var a = 10;
// a++;
// document.write(a);      // 11

/*===== Decrement (--) =====*/
// var b = 10;
// b--;
// document.write(b);      // 9

/*===== Addition Variable + value =====*/
// var a = 10;
// var b = 20;
// var c = a + b + 30;
// document.write(c);       // 60




/*****************************************************************************************************
                                Comparison (Relational) Operators
*****************************************************************************************************/
/*
------------------------------------------------------------------------------------
operators           Meaning                               Example             Result
------------------------------------------------------------------------------------
    <               Less Than                             5 < 2               False
    >               Greater Than                          5 > 2               True
    <=              Less than or equal to                 5 <= 2              False
    >=              Greater than or equal to              5 >= 2              True
    ==              Equal to                              5 == 2              False
    !=              Not equal to                          5 != 2              True
    ===             Equal value and same type             5 === 5             True
                                                          5 === "5"           False
    !==             Not equal value and not same type     5 !== 5             False
                                                          5 !== "5"           True
-------------------------------------------------------------------------------------*/

/*===== Less Than (<) =====*/
// var a = 20;
// var b = 10;
// var c = a < b;
// document.write(c);            // false

/*===== Greater Than (>) =====*/
// var a = 20;
// var b = 10;
// var c = a > b;
// document.write(c);            // true

/*===== Less than or equal to  (<=) =====*/
// var a = 20;
// var b = 10;
// var c = a <= b;
// document.write(c);            // false

/*===== Greater than or equal to (>=) =====*/
// var a = 20;
// var b = 10;
// var c = a >= b;
// document.write(c);            // true

/*===== Equal to Number (==) =====*/
// var a = 10;
// var b = 10;
// var c = a == b;
// document.write(c);            // true

// var a = 10;
// var b = "10";
// var c = a == b;
// document.write(c);            // true

/*===== Not equal to (!=) =====*/
// var a = 15;
// var b = 10;
// var c = a != b;
// document.write(c);            // true

/*===== Equal value and same type (===) =====*/
// var a = 10;
// var b = 10;
// var c = a === b;
// document.write(c);            // true

// var a = 10;
// var b = "10";
// var c = a === b;
// document.write(c);            // true

/*===== Not equal value and not same type (!==) =====*/
// var a = 10;
// var b = 10;
// var c = a !== b;
// document.write(c);            // false

// var a = 10;
// var b = "10";
// var c = a !== b;
// document.write(c);            // true




/*****************************************************************************************************
                                       Logical Operators
*****************************************************************************************************/
/*
====================================================================================
operators           Meaning               Example                   Result
====================================================================================
   &&               Logical AND           (5 < 2) && (5 > 3)        False
   ||               Logical OR            (5 < 2) | (5 > 3)         True
   !                Logical NOT           !(5 < 2)                  True
====================================================================================

/*----------------------------------------------------------
(&& Operator)
------------------------------------------------------------
Operand 1               Operand 2              Result
------------------------------------------------------------
True                    True                   True
True                    False                  False
False                   True                   False
False                   False                  False
----------------------------------------------------------*/

// var a = 10 > 5;
// var b = 20 < 8;
// var c = a && b;
// document.write(c);             // true


/*----------------------------------------------------------
(|| Operator)
------------------------------------------------------------
Operand 1               Operand 2              Result
------------------------------------------------------------
True                    True                   True
True                    False                  True
False                   True                   True
False                   False                  False
----------------------------------------------------------*/

// var a = 10 > 5;
// var b = 20 < 8;
// var c = a || b;
// document.write(c);             // true


/*------------------------------------
(! Operator)
--------------------------------------
Operand                 Result
--------------------------------------
False                   True
True                    False
------------------------------------*/

// let x = 6;
// let y = 3;
// let z = !(x === y) + "<br>" + !(x > y);
// document.write(z);                                 // true  or  false




/********************************************************************************************
                                 Bitwise opertors (Binery)
********************************************************************************************/
/*
---------------------------------------------------------
operators           Meaning
---------------------------------------------------------
   <<               Shift the bits to left
   >>               Shifts the bits to right
   ~                Bitwise inversion
   &                Bitwise Logical AND
   |                Bitwise Logical OR
   ^                Bitwise exclusive or
--------------------------------------------------------*/

// var a = 5;                    // 00000101
// var b = 6;                    // 00000110
// var c = a & b;                // 00000100
// document.write(c);            // 4

// var a = 5;                    // 00000101
// var b = 6;                    // 00000110
// var c = a | b;                // 00000111
// document.write(c);            // 7

// var a = 5;
// var b = 6;
// var c = a ^ b;
// document.write(c);            // 3




/********************************************************************************************
                                    Assignment opertors
********************************************************************************************/
/*------------------------------------------------------------------
JavaScript Assignment Operators
--------------------------------------------------------------------
operators           Example          Equivalent Expression
--------------------------------------------------------------------
    =               m = 10           m = 10
    +=              m += 10          m = m + 10
    -=              m -= 10          m = m - 10
    *=              m *= 10          m = m * 10
    /=              m / =            m = m / 10
    %=              m %= 10          m = m % 10
    **=             m **= y          x = x ** y
-------------------------------------------------------------------*/

// let y = 50
// let x = 10 + y;
// document.write(x);            // 60

// let a = 10;
// a += 5;
// document.write(a);            // 15

// let a = 10;
// a -= 5;
// document.write(a);            // 5

// let a = 10;
// a *= 5;
// document.write(a);            // 50

// let a = 10;
// a **= 5;
// document.write(a);            // 100000

// let a = 10;
// a /= 5;
// document.write(a);            // 2

// let a = 10;
// a %= 5;
// document.write(a);            // 0



/*------------------------------------------------------------------
Shift Assignment Operators
--------------------------------------------------------------------
operators           Example          Equivalent Expression
--------------------------------------------------------------------
    <<=             a <<= b          a = a << b
    >>=             a >>= b          a = a >> b
    >>>=            a >>>= b         a = a >>> b
-------------------------------------------------------------------*/

// let x = -100;
// x <<= 5;
// document.write(x);            // -3200

// let x = -100;
// x >>= 5;
// document.write(x);            // -4

// let x = -100;
// x >>>= 5;
// document.write(x);            // 134217724



/*------------------------------------------------------------------
Bitwise Assignment Operators
--------------------------------------------------------------------
operators           Example          Equivalent Expression
--------------------------------------------------------------------
    &=              a &= b           a = a & b
    ^=              a ^= b           a = a | b
    |=              a |= b           a = a ^ b
-------------------------------------------------------------------*/

// let x = 100;
// x &= 5;
// document.write(x);            // 4

// let x = 10;
// x |= 5;
// document.write(x);            // 15

// let x = 100;
// x ^= 5;
// document.write(x);            // 97



/*------------------------------------------------------------------
Bitwise Assignment Operators
--------------------------------------------------------------------
operators           Example          Equivalent Expression
--------------------------------------------------------------------
   &&=              x &&= y          x = x && (x = y)
   ||=              x ||= y          x = x || (x = y)
   ??=              x ??= y          x = x ?? (x = y)
-------------------------------------------------------------------*/

// let x = 10;
// x &&= 5;
// document.write(x);            // 5

// let x = 10;
// x ||= 5;
// document.write(x);            // 10

// let x = 10;
// x ??= 5;
// document.write(x);            // 10



/********************************************************************************************
                                       prompt method
********************************************************************************************/
// var a = prompt("Enter Value : ", "hello world");
// document.write(a);



/********************************************************************************************
                                       if Statement
********************************************************************************************/
// it is used to execute an instruction or block of instructions only if a condition is fulfilled.

// var a = 10;
// if (a == 10){
//    document.write("your entered : " + a);          // your entered : 10
// }

// var a = prompt("Enter Your Roll: ");
// if (a == 10){
//    document.write("Name: JavaScript");
// }

// var a = 10;
// var b = 20;
// if ((a == 10) && (b == 20)){
//    document.write("hello world");                  // hello world
// }



/********************************************************************************************
                                    if else statement
********************************************************************************************/
/* if... else statement is used when a different sequence of instruction is to be executed
   depending on the logical value (True / False) of the conditioon evaluated. */

// var a = 10;
// if ((a == 10)) {
//    document.write("Name : JavaScript");            // Name : JavaScript
// }
// else {
//    document.write("something went wrong");
// }




/********************************************************************************************
                                       Else If condition
********************************************************************************************/
// to showa multi - way decision basedon several conditions, weuse else if statement.

// var result = 37;
// if (result <= 30) {
//    document.write("Fail");
// } else if (result <= 40) {
//    document.write("Pass");
// } else if (result <= 60) {
//    document.write("Good");
// } else {
//    document.write("Very Good");
// }




/********************************************************************************************
                                       switch statement
********************************************************************************************/
// check several possible constant values for an expression.

// var day = 4;
// switch (day) {
//    case 1:
//       document.write("sunday");
//       break;
//    case 2:
//       document.write("monday");
//       break;
//    case 3:
//       document.write("tuesday");
//       break;
//    case 4:
//       document.write("wednesday");
//       break;
//    case 5:
//       document.write("thursday");
//       break;
//    case 6:
//       document.write("friday");
//       break;
//    case 7:
//       document.write("saturday");
//       break;
//    default:
//       document.write("Wrong Day");
// }



/********************************************************************************************
                                    Traditional For Loop
********************************************************************************************/
/* the for loop is frequently used, usually where the loop will be traversed a fixed number
of times. */

/* for (initialization;   test condition;  increment or decrement){
      block of statement
   }
*/

// for (i = 0; i < 5; i++) {
//    document.write(i + "<br>");
// }

// var a = 0;
// for (; ; a++) {
//    if (a == 3) {
//       break;
//    }
//    document.write(a + "<br>");
// }


/********************************************************************************************
                                    Nested For Loop
********************************************************************************************/
// for loop inside for loop.

/* for (initialization;   test condition;  increment or decrement){
      block of statement
      for (initialization;   test condition;  increment or decrement){
         block of statement
      }
   }
*/


// for (i = 0; i < 3; i++) {
//    document.write("<b> Outer Loop </b>");
//    document.write(i);
//    document.write("<br>");
//    for (j = 0; j < 5; j++) {
//       document.write("Inner Loop");
//       document.write(j);
//       document.write("<br>");
//    }
// }




/********************************************************************************************
                                       While Loop
********************************************************************************************/
// the while loop repeating an action until an associated condition returns false.

/*
   while(test condition){
      body of the loop
      increment / decrement
   }
*/

// var i = 0;
// while (i < 5) {
//    document.write(i);
//    i++;
//    document.write("<br>");
// }

// var i = 0;
// while (true) {
//    if (i == 3) {
//       break;
//    }
//    document.write(i);
//    i++;
//    document.write("<br>");
// }




/********************************************************************************************
                                      Nested While Loop
********************************************************************************************/
// while loop inside while loop

// var a = 0;
// while (a < 3) {
//    document.write("<b> Outer Loop </b>");
//    document.write(a);
//    a++;
//    document.write("<br>");
//    var j = 0;
//    while (j < 5) {
//       document.write("Inner Loop");
//       document.write(j);
//       j++;
//       document.write("<br>");
//    }
// }




/********************************************************************************************
                                       Do While Loop
********************************************************************************************/
/* the do while loop is similar to while loop, but the condition is checked after the loop
   body is executed. this ensure that the loop body at run at least once.

/*
do {
   statements;
} while (test condition);
*/

// var i = 0;
// do {
//    document.write(i);
//    i++;
// } while (i < 5);

// var i = 0;
// do {
//    if (i == 3) {
//       break;
//    }
//    document.write(i);
//    i++;
// } while (i < 5);




/********************************************************************************************
                                    Nested Do While Loop
********************************************************************************************/
// do while inside do while

// var i = 0;
// do {
//    document.write("<b>Outer Loop</b>");
//    document.write(i);
//    document.write("<br>");
//    i++;

//    var j = 0;
//    do {
//       document.write("Inner Loop");
//       document.write(j);
//       document.write("<br>");
//       j++;
//    } while (j < 5);
// } while (i < 3);




/********************************************************************************************
                                    Break & Continue
********************************************************************************************/
// for (i = 0; i < 5; i++) {
//    if (i == 3) {
//       break;
//    }
//    document.write(i);
//    document.write("<br>");
// }

// for (i = 0; i < 5; i++) {
//    if (i == 3) {
//       continue;
//    }
//    document.write(i);
//    document.write("<br>");
// }




/********************************************************************************************
                                       Function
********************************************************************************************/
// function are subprograms which re used to compute a value or perform a task.

/* library ofBuilt -in Functions
   • valueOf()
   • write()
   • alert()




/********************************************************************************************
                                 creating & calling a function
********************************************************************************************/
/*
function function_name() {
   block of statement
}
*/

/* Rules
   • function name only start with a letter & underscore(_).
   • function name can not start with a number.
   • do not use reserved keyword (if, else, etc...)
   • function name are case-sensitive in javascript
*/

// function display() {
//    document.write("hello-world");
// }
// display();                                // hello-world




/********************************************************************************************
                                 Function with parameter
********************************************************************************************/
// function display1(name) {
//    document.write(name);
// }
// display1("Hello");


// function display2(name1, name2) {
//    document.write(name1 + " " + name2);
// }
// display2("Hello", "world");                     // Hello world




/********************************************************************************************
                                 Function argument missing
********************************************************************************************/
// if a function is called with missing arguments, the missing values are set to undefined.

// function add(a, b, c) {
//    document.write("A: " + a + "<br>" + "B: " + b + "<br>" + "C: " + c);
// }
// add(10, 20, 30);                                   // A:10, B:20, C:30


// function add(a, b, c) {
//    document.write("A: " + a + "<br>" + "B: " + b + "<br>" + "C: " + c);
// }
// add(10, 20);                                   // A:10, B:20, undefined




/********************************************************************************************
                                    Argument Object
********************************************************************************************/
/*
 • the arguments object contains an array of the arguments used when the function was called.
 • this object contains an entry for each argument passed to the function, the first entry's
   index starting at 0. this argument object is not an Array. It is similar to an Array, but
   does not have any Array properties except length.
*/

// function disp(name1, name2) {
//    document.write(arguments[0] + " ");
//    document.write(arguments[1]);
// }
// disp("hello", "javascript");                 // hello javascript


// function disp(name1, name2) {
//    arguments[1] = "world"
//    document.write(name1 + " ");
//    document.write(name2);
// }
// disp("hello", "javascript");                 // hello javascript


// function disp(name1, name2, name3, name4) {
//    document.write(arguments.length);
// }
// disp("hello", "guys", "like", "javascript");                 // 4


// function disp(name1, name2, name3, name4) {
//    var a = arguments.length;
//    document.write(a);
// }
// disp("hello", "guys", "like", "javascript");                 // 4


// function disp(name1, name2, name3, name4) {
//    for (var i = 0; i < arguments.length; i++) {
//       document.write(arguments[i] + " ");
//    }
// }
// disp("hello", "guys", "like", "javascript");                 // 4


// function disp(name1, name2, name3, name4) {
//    var a = arguments.callee;
//    document.write(a);
// }
// disp("hello", "guys", "like", "javascript");                 // Return Full Function on Display




/********************************************************************************************
                                    Many Function Argument
********************************************************************************************/
/* if a function is called with too many arguments, these arguments can be reached using
   the Arguments object which is a built-in. */

// function add(a, b) {
//    document.write("A: " + a + "B: " + b + "C: " + arguments[2])
// }
// add(10, 20, 30);                                   // A:10, B:20, C:30




/********************************************************************************************
                                    Default Parameter
********************************************************************************************/
// function display(para1, para2, para3 = "50") {
//    document.write("A:" + para1);
//    document.write("B:" + para2);
//    document.write("C:" + para3);
// }
// display(10, 30);                       // A:10, B:30, C:50


// function display(para1, para2="70", para3="90") {
//    document.write("A:" + para1);
//    document.write("B:" + para2);
//    document.write("C:" + para3);
// }
// display(10, 20);                       // A:10, B:20, C:90


// function display(para1, para2="70", para3) {
//    document.write("A:" + para1);
//    document.write("B:" + para2);
//    document.write("C:" + para3);
// }
// display(10, 20);                       // A:10, B:20, C:undefined



/*
 • JavaScript also allows the use of array and null as default values.
*/

// function display(para1, para2="70", para3=null) {     // null is case sensitive
//    document.write("A:" + para1 + "<br>");
//    document.write("B:" + para2 + "<br>");
//    document.write("C:" + para3 + "<br>");
// }
// display(10);                           // A:10, B:undefined, C:null
// display(10, 20);                       // A:10, B:20, C:null
// display(10, 20, 30);                   // A:10, B:20, C:30


// Default Parameter Array
// function add(a=[101]){
//    document.write("A = " + a[0] + "<br>");
// }
// add([10]);                                            // A = 10
 


/********************************************************************************************
                                        write function 
********************************************************************************************/


/********************************************************************************************
                                        write function 
********************************************************************************************/


/********************************************************************************************
                                        write function 
********************************************************************************************/







/* 1. Write the function printInt(n) taking one parameter n and print all natural numbers from 1 to n in console. */

function printInt(n) {
	var n ;
	for(var y= 1; y<=n; y++) {
        console.log(y);
     }
}

//  printInt(9);



/* 2. Write the function printIntRev(n) taking one parameter n and  print all natural numbers in reverse in console (from n to 1). */

function printIntRev(r) {
    var r;
    for(var x=1; x<=r; r--){
        console.log(r);
    }
}

// printIntRev(10);



/* 3. Write the function checkInput(x) taking one parameter x and return the string ‘number’ if x is a number; return the string ‘string’ if x is a string; and return ‘boolean’ if x is a boolean. Otherwise returns -1. 
Examples:
       checkInput(5) ====> ‘number’
       checkInput(‘hello’)======> ‘string’
       checkInput(‘5’) ======> ‘string’
       checkInput(true)=====> boolean
       checkInput([1,2,3,4]) =====> -1 */

function checkInput(k){
	if (typeof k == typeof 5 || typeof k == typeof "String" || typeof k == typeof true){
		console.log(typeof k);
	} else {
		console.log(-1);
	}
}

// checkInput();



/* 4. Write the function simpleEvenAdding(num) taking a number and add up all the even numbers from 1 to num. 
	/*Examples: simpleEvenAdding(5) ======> 6 (because 2+4 = 6)
	       simpleEvenAdding(10) ======> 30 (because 2+4+6+8+10 = 30)
	       simpleEvenAdding(11) ======> 30 (because 2+4+6+8+10 = 30)
                  simpleEvenAdding(1) ======> 0
		   simpleEvenAdding(0) =======> 0 */
		   
function simpleEvenAdding(num){
	var answer=0;
	for (var s=0; s<num; s++){
		if (s % 2 === 0) {
			answer+=s;	
		}
	}
	console.log(answer);
}

// simpleEvenAdding(10);



/* 5. Write the function letterCapitalize(str) taking a string and capitalize the first letter of each word. The given words will be separated by only one space.
	Examples:
		letterCapitalize(“hello world”) ===========> “Hello Word”
letterCapitalize(“you cannot find the answer online”) =====>  “You Cannot Find The Answer Online”
	
Hint: There is a built-in function in javaScript that change string into uppercase. There is also a function to separate string into an array of characters.*/

function letterCapitalize(t){
	var store;
	var place=[];
	store = t.split(" ");

	for (var l=0; l<store.length; l++){
		place.push([store[l][0].toUpperCase() + store[l].slice(1)]);
	}
	console.log(place.join(" "));
}

// letterCapitalize("see it's a couple ppl every generation that wasn't supposed to make it out, but decode the matrix")



 /* 6. Write the function simpleReverse(str) taking a string and return the string in reversed order. 
	Examples:
		// simpleReverse(‘hello’) ======> ‘olleh’
		// simpleReverse(‘I Love Code’) ======> ‘edoC evoL I’

Hint: Think of how you can loop through a string or array of characters backwards to produce a new string */

function simpleReverse(str){
	var store = "";

	for (var i=str.length-1; i>=0; i--){
		store += str[i];
		
	}console.log(store);
}

// simpleReverse("All my life, I been grinding all my life!")



/* 7. Write the function findDiff(arr) taking an array of numbers as parameter and return the difference between the maximum number and the minimum number (max - min). 
	Examples:
	findDiff([1,2,4,6,20, 3]) =======> 19 (Because 20 - 1 = 19)
	findDiff([24, 22, 23, 22, 24]) =======> 2 (Because 24 - 22 = 2)
	findDiff([1, 1, 1, 1, 1]) =======> 0 
	findDiff([1]) ======> 0;
	findDiff([]) =======> 0; */

function findDiff(arr){
	var answer;

	answer = Math.max(...arr) - Math.min(...arr);
	console.log(answer);
}

// findDiff([1,2,3,4,5, 100]);



/* 8. Write the function timeConvert(num) taking a number as parameter and return the number of hours and minutes the parameter converts to. Separate the number of hours and minutes with a colon.
	Example:
		timeConvert(61) ======> 1:1
		timeConvert(63) =======> 1:3
		timeConvert(120)======> 2:0
		timeConvert(59)=======> 0:59
    	Hints: Dividing and modulo the number 60. */

function timeConvert(num){
var hours = 0;
var minutes = 0;

for (var i = 0; i <= num; i++) {
	if (num < 60 && !(num % 60 === 0)){
		minutes = num;	
	} else if (num >= 60) {
		hours = parseInt(num/60);
		minutes = num % 60;
	}
};console.log(hours+ ":" +minutes);

};

// timeConvert(285);



/* 9. Write the function findStr(str, long) taking two strings as parameters and return how many str you can find in long. Assume Str is not empty string.
Example:
	findStr(“hi”, “dasdhidasdahidashi”) =======> 3
	findStr(“o”, “daodo”) =======> 2
	findStr(“ha”,”abcde”)=======> 0
	findStr(“h”, “hihelloho”)======> 3 */

function findStr(str, long){
	var answer = 0;
	var store=[];
	// for (var i =0; i < long.length-str.length; i++){
	// 	if (long.slice(i,i+str.length)===str){
	// 		answer++;
	// 	}
	// }
	// console.log(answer);

	 store=long.split(str);
	 answer = store.length - 1;
	 console.log(answer);

}

// findStr("ow", "oh, how wow double back around bow down to the crown");


	
/* 10. Write the function selfDividingNumbers(left, right) taking two number bound as parameters and returns an array of every possible self dividing number between 
them, including the bounds. 

Hint: A self-dividing number is a number that is divisible by every digit it contains. For example, 128 is a self-dividing number because 128 % 1 ==0, 128 % 2 == 0 and 128 % 8 == 0. 

Examples:
	selfDividingNumbers(1, 22) ========> [1,2,3,4,5,6,7,8,9,11,12,15,22]
	selfDividingNumbers(1, 10) =======> [1,2,3,4,5,6,7,8,9]
	selfDividingNumbers(12, 21) =======> [12, 15] */

function selfDividingNumbers(left, right){
	var answer=[];

	for (var i=left; i<=right; i++){
		if (isSelfDividing(i)){
			answer.push(i);
		}
	}
	console.log(answer);
}

function isSelfDividing(num){
	var digits = num.toString().split("");

	for (var i=0; i<digits.length; i++){
		if (num % digits[i] !== 0){
			return false;
		}		 
	}
	return true;
}

// selfDividingNumbers(15,220);



/* 11. Write the function moveZeros(nums) taking an array of numbers and move all 0’s to the end of it while maintaining the relative order of the non-zero elements.  For example:
moveZeros([0,1,0,3,12]) ======> [1,3,12,0,0]
moveZeros([1,2,0,0,2,312,33,0,0]) ======> [1,2,2,312,33,0,0,0,0]
moveZeros([0,0,0]) ======> [0,0,0]
moveZeros([1,2,312,11,2]) =======> [1,2,312,11,2] */

function moveZeros(nums){
	var counter=0;
	var answer=[];

	for (var i= 0; i < nums.length; i++){
		if (nums[i] === 0){
			counter++;
		} else {
			answer.push(nums[i]);
		}
	}

	for (var i=counter; i > 0; i--){
		answer.push(0);
	}
	console.log(answer);
}

// moveZeros([0,2,5,0,10,84,1,1,0,4]);



/* 12. Create an average() function that calculates the average of an array of numbers.
Examples: 
	average([2, 6]) =====> 4
	average([2, 3, 3, 5, 7, 10]) ======> 5
average([7, 1432, 12, 13, 100]) ======> 312.8
average([]) ======> 0
*/

function average(a){
	var store=0;

	for (var i=0; i < a.length; i++){
		if (a!==[]){
			store+= a[i];
		} else {
			a.length=1;
		}
}console.log(store/a.length);
}

average([]);
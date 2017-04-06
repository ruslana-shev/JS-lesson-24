//1
//function multiplay(a, b, c) {
//	var res = 0;
//	res = a * b * c;
//	return res;
//}
//var res = multiplay(1,2,3);
//console.log(res);

//2
//function factorial(x) {
//	var fac;
//	if (x > 1){
//		fac = x * factorial(x-1);
//	}
//	else{
//		fac = x;
//	}
//
//	return fac;
//}
//var res = factorial (10);
//console.log (res);

//3
//function reverseString(string) {
//	var arr = string.split('');
//	console.log(arr);
//	for (var i = 0; i < arr.length; i++) {
//		newArr = arr.reverse(); break;
//	}
//	return newArr.join(' ');
//}
//var res = reverseString('test');
//console.log(res);

//4
//function getCodeStringFromText(string, func) {
//	var newStr = '';
//	for (var i = 0; i < string.length; i++) {
//		newStr += func (string[i]);
//	}
//	return newStr;
//}
//function func(symbol) {
//	return symbol.charCodeAt() + ' ';
//}
//var res = proccesString('hello', func);
//console.log(res);

//5

//function printChars(string) {
//	var length = string.length;
//	
//	if (!string){
//		console.log("");
//		return;
//	}
//	console.log(string[0]);
//	if (length > 1){
//		printChars(string.substring(1));
//	}
//}
//printChars('test');

//6.1
//var arr = ['my', 'name', 'is', 'Trinity'];
//function firstLetterToUpperCase(arr, func) {
//	var newArr = '';
//	for (var i = 0; i < arr.length; i++) {
//		newArr += func(arr[i]);
//	}
//	return newArr;
//}
//function func(element) {
//	element = element.charAt(0).toUpperCase()+element.slice(1)
//	return element;
//}
//var res = firstLetterToUpperCase(arr, func);
//console.log(`New value: ${res}`);

//6.2
//function numberMultiplication(arr, func) {
//	var newArr = '';
//	for (var i = 0; i < arr.length; i++) {
//		newArr += func(arr[i]) +', ';
//	}
//	return newArr;
//}
//function func(element) {
//	element *= 10;
//	return element;
//}
//var res = summValueArray([10, 20, 30], func);
//console.log(`New value: ${res}`);

//6.3
//function getNameIsAge(arr, func) {
//	var newArr = '';
//	for (var i = 0; i < arr.length; i++) {
//		newArr += func(arr[i])  + ', ';
//	}
//	return newArr;
//}
//function func(element) {
//	return element['name'] + ' is ' + element['age'];
//}
//var res = getNameIsAge([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], func);
//console.log(`New value: ${res}`);


//6.4
//function reverseArray(arr, func) {
//	var newArr = '';
//	for (var i = 0; i < arr.length; i++) {
//		newArr += func(arr[i]).join('') + ', ';
//	}
//	return newArr;
//}
//function func(element) {
//	element = element.split('');
//	console.log(`${element}`);
//	return element.reverse();
//}
//var res = reverseArray(['abc', '123'], func);
//console.log(`New value: ${res}`);

//6.5

//function getSummValueArray(arr, hendler){
//	var newArr = '';
//	for (var i = 0; i < arr.length; i++) {
//		newArr += hendler(arr[i]);
//	}
//	return newArr;
//}
//var res = getSummValueArray([1, 2, 3], function(number){
//	return number + 5 + ', ';
//}) 
//console.log(`New value: ${res}`);

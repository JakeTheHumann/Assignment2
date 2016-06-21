//Assignment 2, Part 1
// 1
var sName = prompt('Please enter your name', 'Linus Torvalds');
alert(sName.length);

// 2
var sName = prompt('Please enter your name', 'Linus Torvalds');
var sNumber = prompt('Please enter number from 0 to ' + (sName.length - 1), '0');
alert(sName.charAt(sNumber));

// 3
var sFirstName = prompt('Please enter your first name', 'Linus');
var sLastName = prompt('Please enter your last name', 'Torvalds');
alert('Your name is: ' + sFirstName + ' ' + sLastName);

// 4
var sBruh = 'The quick brown fox jumps over the lazy dog';
alert(sBruh.indexOf("fox"));

// 5
var sBruh = 'The quick brown fox jumps over the lazy fox';
alert(sBruh.lastIndexOf("fox"));

// 6
var sBruh = 'The quick brown fox jumps over the lazy dog';
var sName = prompt('Please enter your name', 'Linus Torvalds');
alert(sBruh.replace('the lazy dog', sName));

// 7
var sBruh = 'The quick brown fox jumps over the lazy dog';
var sName = prompt('Please enter a word', 'fox');
alert(sBruh.search(sName));

// 8
var old_string = 'The quick brown fox jumps over the lazy dog';
var new_string = old_string.slice(31, 43);
alert(new_string.toUpperCase());

// 9
var sBruh = '            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ';
sBruh = sBruh.trim();
alert(sBruh.toLowerCase());

// 10
var sBruh = 'the quick brown fox jumps over the lazy dog';
sBruh = sBruh.substring(0, 1).toUpperCase() + sBruh.substring(1);
alert(sBruh);




















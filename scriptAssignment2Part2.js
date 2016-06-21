////Assignment 2, Part 2
//
////Part 1 - Math and Math Functions
//// 1
//var iNum1 = prompt('Please enter a number', -15);
//console.log(Math.abs(iNum1));
//
//// 2
//var iNum2 = prompt('Please enter a number with decimal', 1.6458);
//iNum2 = Math.ceil(iNum2);
//console.log(iNum2);
//
//// 3
//var iNum3 = prompt('Please enter a number with decimal', 1.6458);
//iNum3 = Math.floor(iNum3);
//console.log(iNum3);
//
//// 4 this is the only way how it works with math.max and math.min
//var iNum4 = prompt('Please enter five numbers divided by commas', '1,2,3,4,5');
//var aArr4 = iNum4.split(',');
//console.log('The largest number is ' + Math.max(aArr4[0],aArr4[1],aArr4[2],aArr4[3],aArr4[4]),'\n','The smallest number is ' + Math.min(aArr4[0],aArr4[1],aArr4[2],aArr4[3],aArr4[4]));
//
//// 5
//var iNum5 = prompt('Please enter a number', 16);
//console.log(Math.sqrt(iNum5));
//
////Part 2 - Date and Date Functions
//
//// 6
//var d = new Date();
//console.log(d.toDateString());
//
//// 7
//function daysInMonth(month,year) {
//   return new Date(year, month, 0).getDate();
//}
//var iMonth = prompt('Please enter the month number:', '1');
//var iYear = prompt('Please enter the year:', '2016');
//console.log('The number of days in ' + iMonth + '/' + iYear + ' is: ' + daysInMonth(iMonth,iYear));
//
//// 8
//var dDate = new Date();
//var aMonth = new Array();
//aMonth[0] = "January";
//aMonth[1] = "February";
//aMonth[2] = "March";
//aMonth[3] = "April";
//aMonth[4] = "May";
//aMonth[5] = "June";
//aMonth[6] = "July";
//aMonth[7] = "August";
//aMonth[8] = "September";
//aMonth[9] = "October";
//aMonth[10] = "November";
//aMonth[11] = "December";
//var iMonth = aMonth[dDate.getMonth()];
//console.log('Current month is ' + iMonth);
//
//// 9
//var dDate = new Date();
//var w = dDate.getDay();
//if (w==0 || w==6) {
//    console.log('Today is a weekend! You better go to the beach!)');
//} else {
//    console.log('Today is a weekday. You better go to work.');
//}
//
//// 10
//var dDate = new Date();
//var aDay = new Array();
//aDay[0] = "Saturday";
//aDay[1] = "Sunday";
//aDay[2] = "Monday";
//aDay[3] = "Tuesday";
//aDay[4] = "Wednesday";
//aDay[5] = "Thursday";
//aDay[6] = "Friday";
//console.log('Yesterday was ' + aDay[dDate.getDay()]);
//
//// 11
//var dDate = new Date();
//var aDay = new Array();
//aDay[0] = "S";
//aDay[1] = "M";
//aDay[2] = "T";
//aDay[3] = "W";
//aDay[4] = "T";
//aDay[5] = "F";
//aDay[6] = "S";
//console.log(aDay[dDate.getDay()]);
//
////Part 3 - Conditional Logic and Looping Operations 
//
//// 12
//var iNum1 = prompt('Please, enter the first number.', 1);
//var iNum2 = prompt('Please, enter the second number.', 2);
//console.log('The largest number is ' + Math.max(iNum1,iNum2));
//
//// 13
//function gradeCalc(grade) {
//    if (0<=grade && grade<60) {return 'F'}
//    else if (grade<70) {return 'D'}
//    else if (grade<80) {return 'C'}
//    else if (grade<90) {return 'B'}
//    else if (grade<100) {return 'A'}
//    else {return 'input is wrong'}
//}
//var sGrade = prompt('Please, enter Ursula\'s grade', 80);
//console.log('Ursula - ' + gradeCalc(sGrade));
//var sGrade = prompt('Please, enter Paul\'s grade', 77);
//console.log('Paul - ' + gradeCalc(sGrade));
//var sGrade = prompt('Please, enter Herney\'s grade', 88);
//console.log('Herney - ' + gradeCalc(sGrade));
//var sGrade = prompt('Please, enter Tabitha\'s grade', 95);
//console.log('Tabitha - ' + gradeCalc(sGrade));
//var sGrade = prompt('Please, enter Lucy\'s grade', 68);
//console.log('Lucy - ' + gradeCalc(sGrade));
//
//// 14
//function oddoreven(iNum) {
//    if (iNum%2==0) {return 'even'}
//    else {return 'odd'}
//}
//for (var i = 1; i <= 15; i++) {
//	console.log(i + ' i is ' + oddoreven(i));
//}
//
//// 15
//function fizbuz(iNum) {
//    if (iNum%3==0 && iNum%5==0) {return 'FizzBuzz'}
//    else if (iNum%3==0) {return 'Fizz'}
//    else if (iNum%5==0) {return 'Buzz'}
//    else {return iNum}
//}
//for (var i = 1; i <= 100; i++) {
//	console.log(fizbuz(i));
//}
//
////Part 4 - The “Hitchhiker’s Guide to the Galaxy” Game 
//
//// 1
//var sHero;
//var bReady = confirm("Are you ready to play the game?");
//if (bReady == true) {
//    sHero = "Awesome, our hero is waiting!";
//} else {
//    sHero = "Too bad, we’re going to play anyway because our hero desperately needs your help!";
//}
//alert(sHero);
//
//// 2
//alert('You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…');
//
//// 3
//var sDirection = prompt('Which direction would you like to head (please enter forward, left, or right).');
//
//// 4
//switch (sDirection) {
//    case 'forward':
//        alert('You walk about 100 yards and safely make your way out of the cave.');
//        break;
//    case 'left':
//        alert('Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.');
//        break;
//    case 'right':
//        alert('You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.');
//        break;
//    default:
//        alert('The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.')
//}
////
//// 5,6
//var iScore = prompt('Please, rate this game on a scale of 1 to 10');
//var bLegit = iScore % 1 ==0 && iScore >= 1 && iScore <= 10;
//if (bLegit == false) {iScore = 10};
//if (iScore >= 6) {
//    alert('Thank you, we will continue to make improvements to the game!')
//} else {
//    alert('Whatever, you weren’t very good at this game anyway!')
//}
//
//Part 5 - The “Coin Flip” Game
//
//var icoinFlip = Math.round(Math.random());
//var bChoice = prompt('Choose heads or tails', 'heads');
//if (bChoice == 'heads' && icoinFlip == false) {
//    alert('The flip was heads and you chose heads...you win!')
//} else if (bChoice == 'tails' && icoinFlip == false) {
//    alert('The flip was heads but you chose tails...you lose!')
//} else if (bChoice == 'heads' && icoinFlip == true) {
//    alert('The flip was tails but you chose heads...you lose!')
//} else if (bChoice == 'tails' && icoinFlip == true) {
//    alert('The flip was tails and you chose tails...you win!')
//} else {
//    alert ('Wrong input. Please, type in heads or tails next time.')
//}
//
////Part 6 - The “Coin Flip” Game Redux
//var iCoinFlip;
//for (var i = 1; i <= 10; i++) {
//    var iCoinFlip = Math.round(Math.random());
//    if (iCoinFlip == 0) {
//    console.log('Heads');
//    } else if (iCoinFlip == 1) {
//    console.log('Tails');
//    }
//}
//
////Part 7 - The “Coin Flip Streak” Game
//var iCoinFlip;
//var i = 0;
//do { 
//	i += 1;
//    var iCoinFlip = Math.round(Math.random());
//    if (iCoinFlip == 0) {
//    console.log('Heads');
//    } else if (iCoinFlip == 1) {
//    console.log('Tails');
//    }
//} while (iCoinFlip == 0);
//
////Part 8 – Looping a Triangle
//
//var i = 0;
//var sHash = '';
//do { 
//	i += 1;
//    var sHash = sHash + '#';
//    
//    console.log(sHash);
//} while (i < 7);
//
////Part 9 – Odd or Even?
//
//function oddoreven(iNum) {
//    if (iNum%2==0) {return 'even'}
//    else {return 'odd'}
//}
//for (var i = 1; i <= 15; i++) {
//	console.log(i + ' is ' + oddoreven(i));
//}
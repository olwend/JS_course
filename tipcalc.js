

// function to calculate tip

var calcTip = function(bill) {
    var percentage;
    if (bill < 50){
        percentage = .2;
      }
    else if ((bill >= 50) && (bill <= 200)) {
        percentage = 0.15;
      }
    else {
        percentage = 0.1
      }
  tip = bill * percentage;
  return tip;
}

console.log(calcTip(124));
console.log(calcTip(48));
console.log(calcTip(268));

// build 2 arrays
var bills = [124,48,268];
var tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills [2])];

console.log(tips);
// tip array
// final paid amounts array
var finalValues = [bills[0] + tips[0],
                  bills[1] + tips[1],
                  bills[2] + tips[2]];

console.log(tips, finalValues);


// console.log(bills[0]);
// console.log(bills.length);
// console.log(bills[2]);
// console.log(bills.indexOf(124));

var massMark = 78;
var heightMark = 1.69;
var massJohn = 86;
var heightJohn = 1.78

var massOlwen = 73;
var heightOlwen = 1.73;

var BMIMark = massMark/(heightMark * heightMark);
var BMIJohn = massJohn/(heightJohn * heightJohn);
var BMIOlwen = massOlwen/(heightOlwen * heightOlwen);
var markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn);
console.log('Olwen\'s BMI is ' + BMIOlwen);

console.log('Is Mark\'s  BMI higher than John\'s?' + ' '+ markHigherBMI);

// coding challenge 3

var mark = {
  fullName: 'Mark May',
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.bmi = this.mass/(this.height * this.height);
    return this.bmi
  }
}

var john = {
  fullName: 'John Smith',
  mass: 86,
  height: 1.88,
  calcBMI: function() {
    this.bmi = this.mass/(this.height * this.height);
    return this.bmi
  }
}

john.calcBMI();
mark.calcBMI();
console.log(john,mark);

john.bmi > mark.bmi? console.log(john.fullName + ' has highest BMI ' + john.bmi):console.log(mark.fullName + '  has highest BMI ' + mark.bmi);

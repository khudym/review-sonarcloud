var globalCounter = 0;

function incrementCounter() {
  globalCounter++;
}

function logCounterValue() {
  console.log("Counter value is: " + globalCounter);
}

function calculateSum(arr) {
  var total = 0;
  var i;
  for (i = 0; i < arr.length; i++) {
    var number = arr[i];
    total = total + number;
  }
  return total;
}

function fetchData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

function doSomething(a, b, c) {
  var unusedVar = 42;
  return a + b;
}

function getUserName(user) {
  return user.name.toUpperCase();
}

function isEqual(a, b) {
  if (a == b) {
    return true;
  }
  return false;
}

function getRandomNumber() {
  var randomNum = Math.random() * 10;
  if (randomNum > 5) {
    return randomNum.toString();
  }
  return randomNum;
}

function complexFunction(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] % 2 === 0) {
        console.log("Even number: " + arr[i][j]);
      } else {
        console.log("Odd number: " + arr[i][j]);
      }
    }
  }
}

function calculateDiscount(price) {
  var discountRate = 0.9;
  return price * discountRate;
}

function do_something_else() {
  console.log("Doing something else");
}

var items = [1, 2, 3, 4, 5];
for (var i = 0; i < items.length; i++) {
  console.log(items[i]);
}

//UserI

$(document).ready(function(){
  $("#user-number").submit(function(){
    event.preventDefault();
    var inputNumbers = $("#user-number-input").val();
    var inputArray = inputNumbers.split(" ");
    var result = beepBoop(inputArray);
    console.log(result)

  });
});

//Backend

var beepBoop = function count(inputArray) {

//  var resultNumbers = [];
  var countUp = [];
  //var countArray = countUp.split(" ");
  for (var i = 0; i <= inputArray; i ++) {
    countUp.push(i.toString());
  }

  for (var i = 0; i < countUp.length; i ++) {
    if (countUp[i].indexOf("1") > -1) {
       var resultNumbers = countUp.splice(countUp[i], 1, "Boop!");
    }

    if (countUp[i].indexOf("0") > -1) {
       var resultNumbers = countUp.splice(countUp[i], 1, "Beep!");
    }

    if (countUp[i] % 3 === 0) {
       var resultNumbers = countUp.splice(countUp[i], 1, "I'm sorry, Dave. I'm afraid I can't do that.");
    }

  }
 return countUp;
 };

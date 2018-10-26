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
  var resultNumbers = [];
  var countUp = [];
  //var countArray = countUp.split(" ");
  for (var i = 0; i <= inputArray; i ++) {
    countUp.push(i.toString());
  }

  for (var i = 0; i < countUp.length; i ++) {
    if (countUp[i] % 3 == 0) {
     countUp.splice(countUp[i], 1, "I'm sorry, Dave. I'm afraid I can't do that.");
     console.log(countUp)
  }
  // }
  //   } else if (inputArray.indexOf("1") > -1) {
  //     "Boop!"
  //
  //   }  else if (inputArray.indexOf("0") > -1) {
  //    "Beep!"
  //
  //   } else {
  //   number
  //   }
  // }
 }
};



























// $(function() {
//   $("#output-here").hide();
//
//   var userNumbers = [];
//
//   $("#user-number").submit(function(event) {
//
//     event.preventDefault();
//     var groceryList = blanks.map(function(blank) {
//       return $("#input" + blank).val();
//     });
//     $("#grocery-input").hide();
//     $("#append-here").show();
//
//     groceryList.sort();
//     groceryList.forEach(function(each) {
//       if (each !== "") {
//
//         $("#append-here").append("<li>" + each.toUpperCase() + "</li>")
//       }
//     });
//
//   });
//
//
//
//     newCommentArray.reverse();
//     var newCommentString = newCommentArray.join(" ");
//     $("#note-section").text(newCommentString);
//     $("#grocery-output").show();
//     $("#note-form").hide();
//    console.log(newCommentString);
//   });
//
//
// });

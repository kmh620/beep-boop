//UserI

$(document).ready(function(){
  $("#user-number").submit(function(){
    event.preventDefault();
    var inputNumbers = $("#user-number-input").val();
    var inputArray = inputNumbers.split(" ");
    result = beepBoop(inputNumbers);
    console.log(result)

  });
});

//Backend



var beepBoop = function count(inputNumbers) {
  var outputNumbers = [];
  var countUp = [];
  for (var i = 0; i <= inputNumbers; i++) {
    countUp.push(i.toString());
  }

  for (var i = 0; i <= countUp.length; i ++) {
    if ([i] % 3 == 0) {
    var countArray = Array.from(countUp);
   outputNumbers = countArray.splice(i, 1, "I'm sorry, Dave. I'm afraid I can't do that.")
  }
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
  return outputNumbers;
  console.log(outputNumbers)

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

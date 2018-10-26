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



 var beepBoop = function(inputArray) {

  if (inputArray % 3 == 0) {
    return true;

  } else if (inputArray.indexOf("1") > -1) {
    return true;

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

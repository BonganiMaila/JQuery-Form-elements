//Jquery function
$(function () {
  //objects/variables to hold button, item form, text input
  var $newItemButton = $('#newItemButton');
  var $newItemForm = $('#newItemForm');
  var $textInput = $('input:text');
  /* 
    when the page loads, CSS hides the new item button then shows the form, 
    a method to show the new item button and hide the form
    */
  $newItemButton.show();
  $newItemForm.hide();
  /*
    if the user clicks the newItemButton element whose id attribute has a value of showForm, 
    then the new item button is hidden and the form is shown
    */
  $('#showForm').on('click', function () {
    $newItemButton.hide();
    $newItemForm.show();
  });

  /*
when the form is submitted an anonymous function is called. the it passes the event object
*/
  $newItemForm.on('submit', function (e) {
    e.preventDefault(); //stop the form from being submitted
    var newText = $textInput.val(); //this method gets the value that the user has entered and stores it in $textInput
    $('li:last').after('<li>' + newText + ' </li>'); // a new item is added at the end of the list
    $newItemButton.show(); // show the newItemButton
    $newItemForm.hide();//hide the form
    $textInput.val(''); //empty the text input 
  });
});

/*
create card object with front and back
create array full of those card objects
add card
edit card
delete card

*/
$(document).ready( function() {
  
  
  $("#toggle").on("click", function(){
    if ($("#toggle").text("Show Back")){
      $("#toggle").text("Show Front")
    }else if ($('#toggle').text("Show Front"))
    {$("#toggle").text("Show Back")}  
    ;
  })
  var words = [
    {word: "posh", definition: "fancy"}, 
    {word: "chuffed", definition:"happy"}, 
    {word: "brolly", definition: "umbrella"}, 
    {type: "courgette", definition:"cucumber"}
  ];
  
  // function addWord() {
    
  // }
  
  // for (let animal of animals) {
    //   console.log(animal.name);
    // };
    
    // console.log(animals[0].name)

  });
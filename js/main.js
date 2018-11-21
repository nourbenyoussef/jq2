// var name = prompt("your name ");
// alert( "guess who's back , " + name + " is back again " );
// confirm('we use cookies for a better user experience');


//function bold() {
    // document.querySelector(".para").style.fontWeight = "bold"
// }
// function italic(){
//     document.querySelector(".para").style.fontStyle  = "italic"
// }
// function underline () {
//     document.querySelector(".para").style.textDecoration = "underline"
// }

//function colore() {
    
   // document.querySelector(".para").style.color = document.getElementById("color").value
//}
$('#bold').click(function(){
     $(".para").css("font-weight" , "bold")
})
$('#italic').click(function(){
    $(".para").css("font-style" , "italic")
})
$('#underlined').click(function(){
    $(".para").css("text-decoration" , "underline")
})
//   $('#colore').onchange(function(){
//       $(".para").css("color", $("#color".value()))
//   })

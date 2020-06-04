$(document).ready(function(){
  const age = parseInt(prompt("Type in your age"));
  
  if(age >= 18){
    $('#adult').show();
  }else{
    $('#minor').show();
  }
});
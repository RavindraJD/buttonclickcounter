window.onload=function(){

  var button=document.querySelector("button");
  var x=0;
  button.addEventListener("click",function(){
    x++;
    console.log(x);
    var xhttp= new XMLHttpRequest();
    xhttp.open("POST","http://127.0.0.1:3000/click",true);
    xhttp.setRequestHeader("content-type","applicatin/json");
    xhttp.send();

  });

};

function store(){
  localStorage.setItem("fname",fname.value);
}
function check()
{
  var second = document.getElementById("fname1").value;
  if(second =="pratik")
  {
    window.open("home.html");
  }
  else{
    alert("Sign-in Failed");
  }
}
function show(){
  document.getElementById("panda").innerHTML = localStorage.getItem("fname");
}

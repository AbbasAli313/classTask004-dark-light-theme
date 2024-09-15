document.getElementById("colorButton").addEventListener("click", function () {
  var currentColor = document.body.style.backgroundColor;

  if (currentColor === "black") {
    document.body.style.backgroundColor = "white";
    document.getElementById("colorButton").innerText = "NIGHT";
    document.getElementById("colorButton").style.backgroundColor = "black";
    document.getElementById("colorButton").style.color = "white";
  } else {
    document.body.style.backgroundColor = "black";
    document.getElementById("colorButton").innerText = "DAY";
    document.getElementById("colorButton").style.backgroundColor = "white";
    document.getElementById("colorButton").style.color = "black";
  }
});

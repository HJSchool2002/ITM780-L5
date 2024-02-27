// <!-- Function to receive user name through prompt box -->
function myFunction() {
  let person = prompt("Please enter your name", "");
  if (person != null) {
    document.getElementById("demo").innerHTML =
      "Grettings " + person + "! Hope you are doing well today";
  }
}

// Function to increase image size
function imageEnlarge() {
  // Get the img object using its Id
  img = document.getElementById("img1");
  img.style.transform = "scale(1.5)";
  img.style.transition = "transform 0.25s ease";
}
function normal() {
  var something = document.getElementById("something");
  something.style.opacity = "0.5";
}
function hover() {
  var something = document.getElementById("something");
  something.style.opacity = "1";
}

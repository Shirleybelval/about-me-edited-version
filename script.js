let myh1 = document.getElementById("text"); 

function changeText(){
  myh1.innerHTML = (myh1.innerHTML == "ABOUTSHIRLEY.COM") ? "ABOUTSHIRLEY.COM" : "ABOUTSHIRLEY.COM";
}

//Function to change Font Size to 50px from 60px
function changeSize() {
  myh1.style.fontSize = (myh1.style.fontSize == "60px") ? "50px" : "60px";
}


myh1.addEventListener("mouseover", changeText);
myh1.addEventListener("mouseleave", changeText);

myh1.addEventListener("mouseover", changeSize);
myh1.addEventListener("mouseleave", changeSize);


// function changeSize() {
//   myh1.style.fontSize = (myh1.style.fontSize == "60px") ? "50px" : "60px";
// }
// myh1.addEventListener("mouseover", changeSize);
// myh1.addEventListener("mouseleave", changeSize);


var amountOfLikes = 0
//Like Button Code
function handleLike(){
  amountOfLikes++
  console.log(amountOfLikes)
  var likesDisplay = document.getElementById("likes")

  likesDisplay.innerHTML = amountOfLikes
}


function changePicture(pictureNumber){
  var image = document.getElementById("myImage");
  if(pictureNumber === 1){
    image.src = "https://media1.fdncms.com/charleston/imager/charleston-businesses-do-their-part-for-haiti/u/zoom/1703852/flag-haiti.small.jpg"
  }else{
    image.src = "https://www.caneyforkrestaurant.com/wp-content/uploads/2017/06/Frog-Legs.png"
  }
}
// image 1
var randomNumber1 = Math.floor(Math.random()*6 + 1);
var newImagePath = "images/dice"+ randomNumber1 +".png";
document.querySelector(".img1").setAttribute("src", newImagePath);

// image2
var randomNumber2 = Math.floor(Math.random()*6 + 1);
var newImagePath = "images/dice"+ randomNumber2 +".png";
document.querySelector(".img2").setAttribute("src", newImagePath);

// changing title

if (randomNumber1 > randomNumber2)
{
    document.querySelector("h1").textContent = "Player1 Wins!";
}
else if (randomNumber1 < randomNumber2)
{
    document.querySelector("h1").textContent = "Player2 Wins!";
}
else {
    document.querySelector("h1").textContent = "Draw!";
}
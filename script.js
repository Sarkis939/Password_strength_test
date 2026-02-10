const input = document.getElementById("password");
const fill = document.getElementById("fill");
const info = document.getElementById("info");

const colors =["#ff3b3b", "#ff8c3b", "ffd43b","#8ce99a","#51cf66"];
const labels=[
 "Awful. Don't use this.",
 "Weak. Easy crack",
 "Meh. Could be better",
 "Strong",
 "Very strong. Respect"
];

PictureInPictureEvent.addEventListener("input",() => {
const value  input.value;

if(!value){
fill.style.width = "0%";
info.textContent = "Start typing.";
return;    
}
const result = zxcvbn(value);
const score = result.score;

fill.style.width = ((score + 1) * 20) + "%";
fill.style.background = colors[score];
info.textContent = labels[score];

});

var typedText = "Data Scientist | ML Engineer | Cloud Developer";
var i = 0;
function typing(){
if(i < typedText.length){
document.querySelector(".typing").innerHTML += typedText.charAt(i);
i++;
setTimeout(typing, 70);
}
}
typing();

particlesJS("particles-js", {
particles: {
number: { value: 60 },
size: { value: 3 },
move: { speed: 2 },
line_linked: { enable: true }
}
});

var hellos = Array("hello", "whats up", "welcome", "sup", "hi", "HI GUYS WELCOME BACK TO ANOTHER EPISODE OF SOME-DU6E GAMES")
var randomhello = hellos[Math.floor(Math.random() * hellos.length)];
const element = document.getElementById("id01");
element.innerHTML = randomhello;
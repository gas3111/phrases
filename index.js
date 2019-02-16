phrases = [
    "hello",
    "world",
    "new"
]

function displayPhrase() {
    document.getElementById("phrase").innerHTML = phrases[Math.floor(Math.random() * phrases.length)];
}

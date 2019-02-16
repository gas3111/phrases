phrases = [
"Airbnb is the poster child of the 'sharing economy.' (a person or thing that is seen as a typical example of something)",
"Jack is the poster child for wasted talent. (a person or thing that is seen as a typical example of something)",
"More money is needed to get this project off the ground. (to begin to operate or proceed in a successful way)"
]

function displayPhrase() {
    document.getElementById("phrase").innerHTML = phrases[Math.floor(Math.random() * phrases.length)];
}

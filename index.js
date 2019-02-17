phrases = [
"Airbnb is the poster child of the 'sharing economy.' (a person or thing that is seen as a typical example of something)",
"Jack is the poster child for wasted talent. (a person or thing that is seen as a typical example of something)",
"More money is needed to get this project off the ground. (to begin to operate or proceed in a successful way)",
"All those weeks of studying will pay off when you take the exam. (to result in success)",
"Only another six months and the house will be paid off. ( to give someone all the money that you have borrowed from them to buy something)",
"Every day, on my walk home from work, I see a busker who plays the drums with old kitchen utensils. (to busk - to entertain by dancing, singing, or reciting on the street or in a public place)",
"The joke didn't go down very well. (be received)",
"But this is not how it went down. (to be remembered or recorded in a particular place or way)",
"No one expects house prices to go down in the near future. (to become less)",
"How long will it take for the swelling to go down? (to become less)",
"The crime rate shows no signs of going down. (to become less)",
"The ship went down off the coast of Africa. (to sink below the surface of the water)",
"Diagnose why the server went down. (IT term - stop working)",
"I was upset at the time, but I've managed to put it behind me. (to forget something unpleasant that has happened to you, or to stop being affected by it)",
"We pulled out of the parking lot and were on our way. (begin to accelerate from)",
"He pulled in at the side of the road. (If a vehicle pulls in or pulls into somewhere, it moves in that direction and stops there)",
"The policeman signaled me to pull over. (come to a halt at the side of the road; also, 'he pulled me over')",
"We pulled up to the tollbooth to pay our toll. (stop, possibly rapidly)",
"I pulled in to the petrol station. (leave the part of the road that you normally drive on)",
"I stayed off the Internet for a few days.",
"The best advice is to stay off alcohol altogether. (avoid eating a particular food/drinking)",
"She stayed off for another two days (BRITISH to not go to work or school because you are ill).",
"My main concern was to stay off the subject of religion. (to avoid mentioning something)",
"We decided to stay off the motorway. (to avoid going to a particular place)",
"Let's make sure those pounds stay off. (if weight that you have lost from your body stays off, you do not become heavier again)",
"They will headbutt if cornered.",
"His speech was full of digressions about his time in the army. (to deviate or wander away from the main topic or purpose in speaking or writing)",
"Sorry, I've digressed a little to explain the situation so far, so let me now recap. (to deviate or wander away from the main topic or purpose in speaking or writing)",
"Why are make-up sex and breakup sex so good?", 
"No one in the team wants to pick up the slack. (to do the things that someone else is not willing or able to do)", 
"The bus driver swerved to avoid hitting a cyclist. (change or cause to change direction abruptly)"
]

function displayPhrase() {
    document.getElementById("phrase").innerHTML = phrases[Math.floor(Math.random() * phrases.length)];
}

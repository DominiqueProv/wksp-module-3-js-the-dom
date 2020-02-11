console.log('...crickets...');


//Import element 

const title = document.createElement("H1");
const textTitle = document.createTextNode("The best How I Met Your Mother episode (according to fans)");
title.appendChild(textTitle);
document.getElementById("main").appendChild(title);

const paragraph = document.createElement("p");
const text = document.createTextNode("As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…");
paragraph.appendChild(text);
document.getElementById("main").appendChild(paragraph);

const subTitle = document.createElement("H2");
const textSubTitle = document.createTextNode("The Slap Bet (Season 2, Episode 9)");
subTitle.appendChild(textSubTitle);
document.getElementById("main").appendChild(subTitle);

const paragraph = document.createElement("p");
const text = document.createTextNode("IMDB Rating: 9.5");
paragraph.appendChild(text);
document.getElementById("main").appendChild(paragraph);

const tagImg = document.createElement("img");
tagImg.src = "images/robin-sparkles.jpg";
main.appendChild(tagImg);

const paragraph = document.createElement("p");
const text = document.createTextNode("In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.");
paragraph.appendChild(text);
document.getElementById("main").appendChild(paragraph);

const paragraph = document.createElement("p");
const text = document.createTextNode("In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).");
paragraph.appendChild(text);
document.getElementById("main").appendChild(paragraph);

const a = document.createElement("a");
const link = document.createTextNode("Source");
a.appendChild(link);
a.href = "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/"; 
document.getElementById("main").appendChild(a);


// Apply css
document.getElementById("main").classList.add('main');
document.querySelector("body").classList.add('body');

// Add <link> to CSS
const head = document.getElementsByTagName('head');
const stylesheet = document.createElement('link');
stylesheet.rel = 'stylesheet';
stylesheet.href = 'styles.css';
head[0].appendChild(stylesheet);
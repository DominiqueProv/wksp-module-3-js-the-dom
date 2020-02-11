

//Import element 

var title = document.createElement("H1");
var textTitle = document.createTextNode("The best How I Met Your Mother episode (according to fans)");
title.appendChild(textTitle);
document.getElementById("main").appendChild(title);

var paragraph = document.createElement("p");
var text = document.createTextNode("As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…");
paragraph.appendChild(text);
document.getElementById("main").appendChild(paragraph);

var subTitle = document.createElement("H2");
var textSubTitle = document.createTextNode("The Slap Bet (Season 2, Episode 9)");
subTitle.appendChild(textSubTitle);
document.getElementById("main").appendChild(subTitle);

var paragraph = document.createElement("p");
var text = document.createTextNode("IMDB Rating: 9.5");
paragraph.appendChild(text);
document.getElementById("main").appendChild(paragraph);

var tagImg = document.createElement("img");
tagImg.src = "images/robin-sparkles.jpg";
main.appendChild(tagImg);

var paragraph = document.createElement("p");
var text = document.createTextNode("In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.");
paragraph.appendChild(text);
document.getElementById("main").appendChild(paragraph);

var paragraph = document.createElement("p");
var text = document.createTextNode("In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).");
paragraph.appendChild(text);
document.getElementById("main").appendChild(paragraph);

var a = document.createElement("a");
var link = document.createTextNode("Source");
a.appendChild(link);
a.href = "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/"; 
document.getElementById("main").appendChild(a);


// Apply css
// document.getElementById("main").classList.add('main');
// document.querySelector("body").classList.add('body');

Add <link> to CSS
const head = document.getElementsByTagName('head');
const stylesheet = document.createElement('link');
stylesheet.rel = 'stylesheet';
stylesheet.href = 'styles.css';
head[0].appendChild(stylesheet);


const body = document.getElementsByTagName('body');
body[0].style.background = 'rgba(246,187,33, .8) url(./images/yellow-umbrella.jpg) no-repeat';
body[0].style.backgroundSize = '100%';
body[0].style.fontFamily = "'Playfair Display', serif ";

main.style.background = '#fafafa';
main.style.borderRadius = '4px';
main.style.boxShadow = '8px 10px 25px 0 rgba(128, 128, 128, .44)';
main.style.minWidth = '320px';
main.style.maxWidth = '600px';
main.style.margin = '36px';
main.style.padding = '4px 32px 32px';

title.style.fontFamily = "'Open Sans', sans-serif ";
title.style.textAlign = 'center';

subTitle.style.textAlign = 'left';

paragraph.style.fontSize = '17px';
paragraph.style.lineHeight = '1.5em';

tagImg.style.border = '#fafafa';
tagImg.style.borderRadius = '4px';
tagImg.style.boxShadow = '4px 4px 14px rgba(128, 128, 128, .4)';
tagImg.style.width = '100%';

a.style.color = '#174E7C';
a.style.display = 'block';
a.style.fontWeight = '700';
a.style.marginTop = 'auto';
a.style.textAlign = 'right';
a.style.textDecoration = 'none';
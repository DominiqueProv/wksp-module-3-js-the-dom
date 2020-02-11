// Preset values
const frogs = 3;


// extract data from frogStable to array racer
const racer = []
    for( let i = 0 ; i < frogs ; i ++ ){
      racer.push(frogStable[i]);
    }
// declare id track
let track = document.getElementById('track');

    for (let i = 0; i < frogs; i++) {
    // add li element    
    let line = document.createElement('li');                
    track.appendChild(line);
    // add span element    
    let number = document.createElement('span');
    // add string to li
    number.innerText = `Lane ${i}`;
    // add id to li
    line.id = `Lane-${i}`;
    // add id 'frog' to span
    number.classList.add('frog');
    // replace string by "name in the array of racer"
    number.innerText = racer[i].name;
    line.appendChild(number);
    // set bkg color 
    number.style.background = racer[i].color;
    // progress at 0 
    racer[i].progress = 0;
    }

  let ranking = [];

// Exercise 2.4
function racingFrog(racer) {
    let progress = racer.progress;
    const trackWidth = track.offsetWidth;

    // set a random hop length
    const hopLength = (Math.floor(Math.random() * 100) / trackWidth * 100);

    const bounce = setInterval(function() {
        // increase the progress by the random hopLength
        progress += hopLength;
        // Check if progress is more than 100%. If so, set it to 100.1
        if (progress > 100) {
            progress = 100.1;
            console.log(racer.name, ' has finished!');
            clearInterval(bounce);
            
            // (for Exercise 2.5)
            ranking.push(racer);
        }
        
        // Moving the frog on the screen
        document.querySelector(`#${racer.lane} .frog`).style.left = `${progress}%`;
    }, Math.random() * 1000);
}


// startRace
racers.forEach(function(racer) {
  // call this function once for each racer.
  racingFrog(racer);
});

// Exercise 2.5
const endRace = setInterval(function() {
  if (ranking.length === racers.length) {
      console.log(ranking);
      clearInterval(endRace);
  }
}, 500);





// link stylesheet to html
const head = document.getElementsByTagName('head');
const stylesheet = document.createElement('link');
stylesheet.rel = 'stylesheet';
stylesheet.href = '../assets/styles.css';
head[0].appendChild(stylesheet);



  


    
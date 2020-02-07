// Preset values
const frogs = 3;


// extract data from frogStable to array racer
const racer = []
    for( let i = 0 ; i < frogs ; i ++ ){
      racer.push(frogStable[i]);
    }
// declare id track
let track = document.getElementById('track');
const trackLength = track.offsetWidth;
const hopLength = Math.floor(Math.random() *100) /trackLength * 1000;
console.log(hopLength);

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

    // add id to span
    number.id = `frog-${i}`;
    racer[i].progress = 0;
    }



    for (let i = 0; i < racer.length ; i++){
    const position = document.getElementById(`frog-${i}`);
    console.log(position);
    setInterval(function(){
    let currentPosition = position.style.left;
    
    // position.style.left = `${position.style.left + hopLength}%`;
    console.log(position.style.left);
    }, 500);


    };




// link stylesheet to html
const head = document.getElementsByTagName('head');
const stylesheet = document.createElement('link');
stylesheet.rel = 'stylesheet';
stylesheet.href = '../assets/styles.css';
head[0].appendChild(stylesheet);



  


    
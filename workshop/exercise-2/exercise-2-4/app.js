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







// link stylesheet to html
const head = document.getElementsByTagName('head');
const stylesheet = document.createElement('link');
stylesheet.rel = 'stylesheet';
stylesheet.href = '../assets/styles.css';
head[0].appendChild(stylesheet);



  


    
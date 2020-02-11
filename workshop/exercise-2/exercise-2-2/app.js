// Preset values
const frogs = 3;

// 1. Create for loop that makes use of FROGS to know how many lanes to create.

let track = document.getElementById('track');

    for (let i = 0; i < frogs; i++) {
        
      let line = document.createElement('li');                
    track.appendChild(line);

    let number = document.createElement('span');
    line.appendChild(number);

    console.log(frogStable[i]);  

    }


    // 2. Create li    


   
    // 3. Create span and add it to the li

    

    
    // 4. Assign an id to each lane

    document.getElementsByTagName("li")[0].setAttribute("id", "lane1");
    document.getElementsByTagName("span")[0].setAttribute("id", "lane2");


    const racers = [];
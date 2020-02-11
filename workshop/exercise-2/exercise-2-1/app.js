// Preset values
const frogs = 3;

// 1. Create for loop that makes use of FROGS to know how many lanes to create.

    for (let i = 0; i < 3; i++) {
        if (frogs < 3){
          frogs += 1 ;
        }
    }


    // 2. Create li    


   let line = document.createElement('li');                
    track.appendChild(line);

    // 3. Create span and add it to the li

    let number = document.createElement('span');
    line.appendChild(number);

    
    // 4. Assign an id to each lane

    document.getElementsByTagName("li")[0].setAttribute("id", "lane1");
    document.getElementsByTagName("span")[0].setAttribute("id", "lane2");
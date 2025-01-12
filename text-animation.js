const worksArray = ["WEBSITE DEVELOPMENT" ,"HARDWARE DEVELOPMENT", "SOFTWARE DEVELOPMENT"];
let cursorCount = 0;
const words = document.getElementById("works-text");

// setinterval to repeatedly call the function

words.innerText = worksArray[cursorCount];

function textanimation(){
   
        cursorCount++;
        console.log(cursorCount);

        let index = (cursorCount + 1) % worksArray.length;

    
        if (cursorCount % 3 === 1) {  
            console.log(worksArray[index]);
            words.innerText = worksArray[index];
        } else if (cursorCount % 3 === 2) {  
            console.log(worksArray[index]);
            words.innerText = worksArray[index];
        } else if (cursorCount % 3 === 0) {  
            console.log(worksArray[index]);
            words.innerText = worksArray[index];
        }

    
        if (cursorCount === Infinity) {
            clearInterval(intervalId);
        }
}

textanimation(); //function call for executing animation

setInterval(textanimation , 4700);
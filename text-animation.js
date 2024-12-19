
const worksArray = ["SOFTWARE DEVELOPMENT", "WEBSITE DEVELOPMENT", "HARDWARE DEVELOPMENT"];
const words = document.getElementById("works-text");

// this keeps hold of the {motion-preset-typewriter-[} which is from index.html
let cursorMovementCount = Array.from(words.classList).find(cls => cls.startsWith("motion-preset-typewriter-["));
let cursorCount = 0;


words.addEventListener("animationiteration" , ()=>{
    cursorCount++;
    console.log(cursorCount);

    
        for(let i=0; i<3; i++){
            let index = (cursorCount) % worksArray.length;
    
            if(cursorCount === 1){
                console.log(worksArray[index]);
                words.innerText = worksArray[index];
            }
            else if(cursorCount === 8){
                console.log(worksArray[index]);
                words.innerText = worksArray[index];
                // const newCursorMovementCount = cursorMovementCount.replace(/\d+/, "15");
                
            }
            else if(cursorCount === 16){
                console.log(worksArray[index]);
                words.innerText = worksArray[index];
                // const newCursorMovementCount = cursorMovementCount.replace(/\d+/, "20");
                // words.classList.remove(cursorMovementCount);
                // words.classList.add(newCursorMovementCount);
            }
        }   
        
        // try recursion
});
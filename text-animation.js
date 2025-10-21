// this file contains the code for all the animations seen on the website , the logic of the animations has been programmed bellow , linked to the html file as text-animation.js


// the bellow block of code contains an array that holds the skills and a DOM method calling an id from the index.html file
const worksArray = ["APPLICATION DEVELOPMENT" ,"AI / ML DEVELOPMENT", "SOFTWARE DEVELOPMENT"];
let cursorCount = 0;
const words = document.getElementById("works-text");




// the bellow set of code contains the fcuntion that is responsible for the typing animation
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


// 



// function for copying the email id from the header.
const copyButton = document.getElementById("copy_button");

copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText("saifmkpvt@gmail.com")
        .then(() => {
            copyButton.innerText = "Copied";
            // alert("Email copied");
        })
        .catch(err => console.error(err));
});


// trigger for the project section (will open up the projects detail)
function popupOpen(){
    var value = document.getElementById("trig");
    var bgBlur = document.getElementById("blur-on-click");
    value.style.display = "flex";
    value.style.position = "fixed"; // Keeps it in place
    value.style.top = "0"; 
    value.style.left = "375px"; 
    value.style.width = "800px"; 
    value.style.height = "800px"; 
    value.style.justifyContent = "center"; 
    value.style.alignItems = "center"; 
    value.style.zIndex = "9999";  

    bgBlur.style.filter = "blur(10px)";

    document.body.style.overflow = "hidden";
}
function popupClose(){
    var value = document.getElementById("trig");
    var bgBlur = document.getElementById("blur-on-click");

    value.style.display = "none";
    bgBlur.style.filter = "none";

    document.body.style.overflow = "auto";
}
document.addEventListener("keydown" , function(event){

    var value = document.getElementById("trig");
    var bgBlur = document.getElementById("blur-on-click");

    if(event.key === "Escape"){
        value.style.display = "none";
        bgBlur.style.filter = "none";
    }
});





// scroll console log
window.addEventListener("scroll", () => {
    console.log(window.scrollY); // Logs the vertical scroll position
});


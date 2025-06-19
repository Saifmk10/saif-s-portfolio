// this file contains the code for all the animations seen on the website , the logic of the animations has been programmed bellow , linked to the html file as text-animation.js


// the bellow block of code contains an array that holds the skills and a DOM method calling an id from the index.html file
const worksArray = ["WEBSITE DEVELOPMENT" ,"HARDWARE DEVELOPMENT", "SOFTWARE DEVELOPMENT"];
let cursorCount = 0;
const words = document.getElementById("works-text");

// the bellow consts are used to call the classes that associate with the filler for loading array animation (card one under unfinished project)
const fillerOne = document.querySelector(".filler-one");
const fillerTwo = document.querySelector(".filler-two");
const fillerThree = document.querySelector(".filler-three");
const fillerFour = document.querySelector(".filler-four");
const fillerFive = document.querySelector(".filler-five");
const fillerSix = document.querySelector(".filler-six");
const fillerSeven = document.querySelector(".filler-seven");


// the bellow consts are used to call the classes that associate with the filler for loading array animation (card two under unfinished project)
const fillerOneC2 = document.querySelector(".filler-one-c2");
const fillerTwoC2 = document.querySelector(".filler-two-c2");
const fillerThreeC2 = document.querySelector(".filler-three-c2");
const fillerFourC2 = document.querySelector(".filler-four-c2");
const fillerFiveC2 = document.querySelector(".filler-five-c2");
const fillerSixC2 = document.querySelector(".filler-six-c2");
const fillerSevenC2 = document.querySelector(".filler-seven-c2");


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
function loadingAnimationCardOne(){
    fillerOne.style.display = "none";
    fillerTwo.style.display = "none";
    fillerThree.style.display = "none";
    fillerFour.style.display = "none";
    fillerFive.style.display = "none";
    fillerSix.style.display = "none";
    fillerSeven.style.display = "none";
    
    setTimeout(() => {
        fillerOne.style.display = "block"
    }, 500);
    
    setTimeout(() => {
        fillerTwo.style.display = "block"
    }, 1000);

    setTimeout(() => {
        fillerThree.style.display = "block"
    }, 1500);

    setTimeout(() => {
        fillerFour.style.display = "block"
    }, 2000);

    setTimeout(() => {
        fillerFive.style.display = "block"
    }, 2500);

    setTimeout(() => {
        fillerSix.style.display = "block"
    }, 3000);

    setTimeout(() => {
        fillerSeven.style.display = "block"
    }, 3500);


    // 
    setTimeout(() => {
        fillerSeven.style.display = "none"
    }, 4000);

    setTimeout(() => {
        fillerSix.style.display = "none"
    }, 4500);

    setTimeout(() => {
        fillerFive.style.display = "none"
    }, 5000);

    setTimeout(() => {
        fillerFour.style.display = "none"
    }, 5500);

    setTimeout(() => {
        fillerThree.style.display = "none"
    }, 6000);

    setTimeout(() => {
        fillerTwo.style.display = "none"
    }, 6500);

    setTimeout(() => {
        fillerOne.style.display = "none"
    }, 7000);
}

loadingAnimationCardOne();
setInterval(loadingAnimationCardOne , 7000);


// 
function loadingAnimationCardTwo(){
    fillerOneC2.style.display = "none";
    fillerTwoC2.style.display = "none";
    fillerThreeC2.style.display = "none";
    fillerFourC2.style.display = "none";
    fillerFiveC2.style.display = "none";
    fillerSixC2.style.display = "none";
    fillerSevenC2.style.display = "none";
    
    setTimeout(() => {
        fillerOneC2.style.display = "block"
    }, 500);
    
    setTimeout(() => {
        fillerTwoC2.style.display = "block"
    }, 1000);

    setTimeout(() => {
        fillerThreeC2.style.display = "block"
    }, 1500);

    setTimeout(() => {
        fillerFourC2.style.display = "block"
    }, 2000);

    setTimeout(() => {
        fillerFiveC2.style.display = "block"
    }, 2500);

    setTimeout(() => {
        fillerSixC2.style.display = "block"
    }, 3000);

    setTimeout(() => {
        fillerSevenC2.style.display = "block"
    }, 3500);


    // 
    setTimeout(() => {
        fillerSevenC2.style.display = "none"
    }, 4000);

    setTimeout(() => {
        fillerSixC2.style.display = "none"
    }, 4500);

    setTimeout(() => {
        fillerFiveC2.style.display = "none"
    }, 5000);

    setTimeout(() => {
        fillerFourC2.style.display = "none"
    }, 5500);

    setTimeout(() => {
        fillerThreeC2.style.display = "none"
    }, 6000);

    setTimeout(() => {
        fillerTwoC2.style.display = "none"
    }, 6500);

    setTimeout(() => {
        fillerOneC2.style.display = "none"
    }, 7000);
}

loadingAnimationCardTwo();
setInterval(loadingAnimationCardTwo , 7000);


// function for copying the email id from the header.
let copyButton = document.getElementById("copy_button");

function copyToClickBoard(){
    navigator.clipboard.writeText("saifmkpvt@gmail.com");
    console.log(copyButton);
    copyButton.innerText = "Copied";
}


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


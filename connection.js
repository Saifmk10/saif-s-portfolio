

function loadData(){
    fetch('generator.json') .then(response => response.json())
    .then(data =>{
        document.getElementById("title").innerHTML = data[0].ProjectTitle;
        document.getElementById("about").innerHTML = data[0].ProjectDescription;
        console.log(data[0].ProjectTitle);
    })
}

loadData();

// function trigger(){
//     var value = document.getElementById("trig");
//     value.style.display = "flex";
// }
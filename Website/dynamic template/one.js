function createcard(title, cName, views, old, duration, thumbnail) {
    let viewcount;
    if (views >= 1000000) {
        viewcount = views / 1000000 + "M";
    }
    else if (views < 1000000 && views >= 1000) {
        viewcount = views / 1000 + "K";
    }
    else if (views < 1000) {
        viewcount = views;
    }

    
let html = `<div class="card">
<div class="image">
    <img src="${thumbnail}" alt=" xx"></img> 
    <div class="capsule">${duration}</div>
</div>
<div class="text">
    <h2>${title}</h2>
    <p>${cName} . ${viewcount} . ${old} months ago</p>
</div>
</div>`

document.querySelector(".container"). innerHTML = document.querySelector(".container").innerHTML + html

}

createcard("Hooks in react | sigma Web Development #2", " CodeWithDebjeet", 650000, 3, "21:27", "imging.jpg" )
createcard(" API fetch in react | sigma Web Development #3", " CodeWithDebjeet", 21000000, 9, "12:26", "imging.jpg" )

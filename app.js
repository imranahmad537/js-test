
// Code to show Time using JS

let Time = new Date();
let res1 = Time.getHours();
let res2 = Time.getMinutes();
let res3 = Time.getSeconds();
let res4 = Time.getMilliseconds();

document.querySelector(".showTime").textContent = res1;
document.querySelector(".showTime1").textContent = res2;
document.querySelector(".showTime2").textContent = res3;
document.querySelector(".showTime3").textContent = res4;

// Code to get XY Coordinates


document.onclick = (e) =>{

// Code to show Time by Clicking on Screen using JS

    let Time = new Date();
    let res1 = Time.getHours();
    let res2 = Time.getMinutes();
    let res3 = Time.getSeconds();
    let res4 = Time.getMilliseconds();
    
    document.querySelector(".showTime").textContent = res1;
    document.querySelector(".showTime1").textContent = res2;
    document.querySelector(".showTime2").textContent = res3;
    document.querySelector(".showTime3").textContent = res4;




    let xcor = document.querySelector(".x").textContent = e.x + "px";
    let ycor = document.querySelector(".y").textContent = e.y + "px"; 
}

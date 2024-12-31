let btn = document.querySelector(".btn");
let shinchan = document.querySelector(".shinchan");
let doremon = document.querySelector(".doremon");
let spider = document.querySelector(".running");
let year = document.querySelector(".year");

btn.addEventListener("click",()=>{
    shinchan.style.transform="translate(94%)";
    setTimeout(()=>{doremon.style.transform="translatex(-68%)"},1500);
    setTimeout(()=>{spider.style.transform="translate(350%)"},2500);
    setTimeout(()=>{year.style.transform="translate(205%)"},2500);
})

/* Select elements from the HTML file */
const hr = document.querySelector("#hr");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

/* 360/60 = 6
Needle will move 6deg per one minute/second */
const deg = 6;

/* Run the code repeatedly */
setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    console.log(hh);
    console.log(mm);
    console.log(ss)

    hr.style.transform = `rotate(${hh+(mm/12)}deg)`;
    min.style.transform = `rotate(${mm}deg)`;
    sec.style.transform = `rotate(${ss}deg)`;
});

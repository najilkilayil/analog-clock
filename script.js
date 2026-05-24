
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

    // Digital Clock
    
    // const digiTime = document.getElementById("digi-clock-time");
    // digiTime.innerText = `${hr}:${min}:${sec}`;
    // THESE LINES SHOWS THE ANGLE FAILED TRIED
    // SO I DECIDED TO REWRITE THE CODE AGAIN AS BASED ON NASA API DOCS

    let hour = day.getHours();
    let minu = day.getMinutes();
    let seconds = day.getSeconds();

    const digi = document.getElementById("digi-clock-time");

    digi.innerText = `${hour}:${minu}:${seconds}`;


    // Now its perfect
    let date = day.getDate();

});

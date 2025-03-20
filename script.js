let analogClock=()=>{
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    const day = new Date();
    const min = day.getMinutes();
    const sec = day.getSeconds();
    const hr = day.getHours();

    const hrDeg = ((hr/12) * 360) + ((min/60)*6 )+ 90;
    const minDeg = ((min/60) * 360) + ((sec/60)*6 )+ 90;
    const secDeg = ((sec/60) * 360) + 90;

    hours.style.transform = `rotate(${hrDeg}deg)`;
    minutes.style.transform = `rotate(${minDeg}deg)`;
    seconds.style.transform = `rotate(${secDeg}deg)`;
}

setInterval(analogClock, 1000);
analogClock();

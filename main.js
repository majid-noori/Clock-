setInterval(() =>{

    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('second');
    let ampm = document.getElementById('ampm');

    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    let hr_point = document.querySelector('.hr_point');
    let min_point = document.querySelector('.min_point');
    let sec_point = document.querySelector('.sec_point');


    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h >=12 ? "PM" : "AM";

    if(h > 12){
        h = h-12
    }

    h = (h < 10) ? "0" + h : h ;
    m = (m < 10) ? "0" + m : m ;
    s = (s < 10) ? "0" + s : s ;


    hours.innerHTML = h + "<br><span>Hours</span></br>";
    minutes.innerHTML = m + "<br><span>Minutes</span></br>";
    seconds.innerHTML = s + "<br><span>Second</span></br>";
    ampm.innerHTML = am ;

    hh.style.strokeDashoffset = 440 - (440 * h) /12 ;

    mm.style.strokeDashoffset = 440 - (440 * m) /60 ;

    ss.style.strokeDashoffset = 440 - (440 * s) /60 ;

    hr_point.style.transform = `rotate(${h * 30}deg)`;
    min_point.style.transform = `rotate(${m * 6}deg)`;
    sec_point.style.transform = `rotate(${s * 6}deg)`;


    })
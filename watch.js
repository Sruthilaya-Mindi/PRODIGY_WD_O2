let [ms, sec, min, hr] = [0, 0, 0, 0];
let time = document.querySelector('.timer');
let int;
let count = 0; 
let lapsContainer = document.querySelector('.lapse');

document.getElementById('start').addEventListener('click', () => {
    int = setInterval(display, 10);
});
document.getElementById('pause').addEventListener('click', () => {
    clearInterval(int);
});
document.getElementById('reset').addEventListener('click', () => {
    clearInterval(int);
    [ms, sec, min, hr] = [0, 0, 0, 0];
    time.innerHTML = '00 : 00 : 00 : 000';
    lapsContainer.innerHTML = ''; 
    count = 0; 
});

document.getElementById('lapse1').addEventListener('click', () => {
    count++;
    lapsContainer.innerHTML = '';
    let h = hr < 10 ? "0" + hr : hr;
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;
    let mis = ms < 10 ? "00" + ms :
        ms < 100 ? "0" + ms : ms;

    let lapItem = document.createElement('label');
    lapItem.textContent = `#${count} -    ${h} : ${m} : ${s} : ${mis}`;
    lapsContainer.appendChild(lapItem);
    lapsContainer.style.opacity = 1; 
});

function display() {
    ms += 10;
    if (ms == 1000) {
        ms = 0;
        sec++;
        if (sec == 60) {
            sec = 0;
            min++;
            if (min == 60) {
                min = 0;
                hr++;
            }
        }
    }
    let h = hr < 10 ? "0" + hr : hr;
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;
    let mis = ms < 10 ? "00" + ms :
        ms < 100 ? "0" + ms : ms; 
    time.innerHTML = `${h} : ${m} : ${s} : ${mis}`;
}

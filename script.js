const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const info = document.getElementById('info');

let relogio = setInterval(() => {
    const dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();
    let ano = dateToday.getFullYear();
    let dia = dateToday.getDate();

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let mes = months[dateToday.getMonth()];

    if (hr < 10) { hr = '0' + hr;}
    if (min < 10) { min = '0' + min;}
    if (sec < 10) { sec = '0' + sec;}

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;

    let text = document.createElement('h1');
    text.innerHTML = 'Now it\'s ' + dia + ' of ' + mes + ', ' + ano;
    text.classList.add('text');

    info.innerHTML = '';
    info.appendChild(text);

    document.body.classList.remove('manha', 'tarde', 'noite');

    console.log("Hora atual:", hr);
    if (hr >= 4 && hr < 12) {
        document.body.classList.add('manha');

        let c = document.getElementById('footer');
        c.style.color = "black";
        text.style.color = "black";   
    } 
    else if (hr >= 12 && hr < 18) {
        document.body.classList.add('tarde');
    } 
    else if (hr >= 18 && hr < 24) {
        document.body.classList.add('noite');
    } 
    else {
        document.body.classList.add('madrugada');
    }   

}, 1000);


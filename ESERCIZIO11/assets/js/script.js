//1.1/1.2
function succo(mele, arance){
    var succoFrutta = `Succo con ${mele} mele e ${arance} arance`;
    return succoFrutta;
}

document.getElementById('corretta').innerHTML = succo(4,5);
document.getElementById('sbagliata').innerHTML = succo (6);

//2

document.getElementById('eta').innerHTML += `${count()} anni`;
function count(){
    return 2022 - 1992;
}

//3
calcolaEta = (nome, aCorrente, eta1) => {
    var calcEta = `L'anno di nascita di ${nome} è ${aCorrente - eta1}`;
    return calcEta
}
document.getElementById('persona1').innerHTML = calcolaEta('Anna', 2022, 30);
document.getElementById('persona2').innerHTML = calcolaEta('Maria', 2022, 24);

//4

function tagliaFette(torta) {
    return torta * 3;
}

function scegliTorta(mela, arancia) {
    const fetteMela = tagliaFette (mela);
    const fetteArancia = tagliaFette (arancia);

    const torta = `Torta con ${fetteMela} fette mela e ${fetteArancia} fette di arancia.`;
    return torta;
}

document.getElementById('torta').innerHTML = scegliTorta (3,10)


//5
var btncalcola = document.getElementById('calcola');

btncalcola.addEventListener('click', function(){
    document.getElementById('totale').innerHTML += risultato()
});

function risultato() {
    let cibo = document.getElementById('cibo').valueAsNumber;
    let detersivi = document.getElementById('detersivi').valueAsNumber;
    let abiti = document.getElementById('abiti').valueAsNumber;
    var calcolo1 = `${cibo + abiti + detersivi}`;
    return calcolo1;
}








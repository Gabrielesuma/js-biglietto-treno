let km = parseInt(prompt('Quanti chilometri vuoi percorrere?'));
let age = parseInt(prompt('Quanti anni hai?'));

if (isNaN(km) || isNaN(age)){
    document.getElementById('ticket').innerHTML = 'Inserisci dei valori validi';
}else{
    if(age < 18){
        let price = 0.21 * km * 0.8;
        document.getElementById('ticket').innerHTML = price.toFixed(2);
    }else if(age > 65){
        let price = 0.21 * km * 0.6;
        document.getElementById('ticket').innerHTML = price.toFixed(2);
    }else{
        let price = 0.21 * km;
        document.getElementById('ticket').innerHTML = price.toFixed(2);
    }
}
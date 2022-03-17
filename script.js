/*creare una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range compreso tra 1 e 100
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.*/

/*BONUS:
L'utente indica un livello di difficoltà, in base al livello scelto la griglia conterrà un range diverso:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49*/

let richiestaUtente =parseInt(prompt("richiesta difficolta 1,2,3"));
let rows =0;
let colums =0;

if(richiestaUtente == 1){
    rows = 10;
    colums=10;
}else if(richiestaUtente==2){
    rows=9;
    colums=9;
}else{
    rows=7;
    colums=7;
}

//creare in javascript una griglia 10x10

const grid = document.getElementById('grid');

//calcolo il totale delle celle da generare

const totalCells = colums * rows;

//console.log(totalCells);

//creo un ciclo per ogni cella della griglia

for(let i = 0; i<totalCells;i++){

    grid.appendChild(cell);

    if(richiestaUtente==1){
        cell.classList=('cell-100')
    }else if(richiestaUtente==2){
        cell.classList=('cell-81')
    }else{
        cell.classList=('cell-49')
    }

    cell.innerText=i+1;
    cell.addEventListener('click',function(event){
        cell.classList.toggle("bg-cyan")
    })
}
function createCell() {
    const item = document.createElement('div');
    item.classList.add('cell');
    return item;
}
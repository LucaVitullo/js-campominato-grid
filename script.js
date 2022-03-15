/*creare una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range compreso tra 1 e 100
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.*/

//creare in javascript una griglia 10x10

const grid = document.getElementById('grid');

const rows = 10;
const colums = 10;

//calcolo il totale delle celle da generare

const totalCells = colums * rows;

//console.log(totalCells);

//creo un ciclo per ogni cella della griglia

for(let i = 0; i<totalCells;i++){

    const cell = document.createElement('div');
    grid.appendChild(cell);
    cell.classList=('cell');
    cell.innerText=i+1;
    cell.addEventListener('click',function(event){
        cell.classList.toggle("bg-cyan")
    })
}

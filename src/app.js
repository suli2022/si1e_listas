const nevLista = document.querySelector("#nevLista");
var nevTomb = [
    "Pista", 
    "Károly", 
    "Mari", 
    "Peti",
    "Pali",
    "Gabi",
    "Teri"
];

nevTomb.forEach((nev) => {
    var li = document.createElement('li');
    li.textContent = nev;
    li.className = 'list-group-item';
    nevLista.appendChild(li);
});




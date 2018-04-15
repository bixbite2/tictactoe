console.log('main');

const p = document.querySelectorAll('form')[2];
// console.log(p);


let tab = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];

let player = 'x';
let win = '';
p.addEventListener('click', function(e) {
    e.preventDefault();
    let x = '<img src="letter-x.png" alt="X" width="50%" height="50%">';
    let o = '<img src="circle.png" alt="O" width="50%" height="50%">';

    let line = parseInt(e.target.id);

    if (player === 'x') { // podia ter feito um switch, mas não vejo muita necessidade
        if (line === 0 && tab[0][0] !== 'o') {
            tab[0][0] = 'x';
        }
        if (line === 1 && tab[0][1] !== 'o') {
            tab[0][1] = 'x';
        }
        if (line === 2 && tab[0][2] !== 'o') {
            tab[0][2] = 'x';
        }
        if (line === 3 && tab[1][0] !== 'o') {
            tab[1][0] = 'x';
        }
        if (line === 4 && tab[1][1] !== 'o') {
            tab[1][1] = 'x';
        }
        if (line === 5 && tab[1][2] !== 'o') {
            tab[1][2] = 'x';
        }
        if (line === 6 && tab[2][0] !== 'o') {
            tab[2][0] = 'x';
        }
        if (line === 7 && tab[2][1] !== 'o') {
            tab[2][1] = 'x';
        }
        if (line === 8 && tab[2][2] !== 'o') {
            tab[2][2] = 'x';
        }
        if (e.target.tagName === 'BUTTON' && e.target.innerHTML === '') {
            // console.log(parseInt(e.target.id));
            p[parseInt(e.target.id)].innerHTML = x;
            console.table(tab);
            player = 'o';
        }
    } else {
        if (line === 0 && tab[0][0] !== 'x') {
            tab[0][0] = 'o';
        }
        if (line === 1 && tab[0][1] !== 'x') {
            tab[0][1] = 'o';
        }
        if (line === 2 && tab[0][2] !== 'x') {
            tab[0][2] = 'o';
        }
        if (line === 3 && tab[1][0] !== 'x') {
            tab[1][0] = 'o';
        }
        if (line === 4 && tab[1][1] !== 'x') {
            tab[1][1] = 'o';
        }
        if (line === 5 && tab[1][2] !== 'x') {
            tab[1][2] = 'o';
        }
        if (line === 6 && tab[2][0] !== 'x') {
            tab[2][0] = 'o';
        }
        if (line === 7 && tab[2][1] !== 'x') {
            tab[2][1] = 'o';
        }
        if (line === 8 && tab[2][2] !== 'x') {
            tab[2][2] = 'o';
        }
        if (e.target.tagName === 'BUTTON' && e.target.innerHTML === '') {
            // console.log(parseInt(e.target.id));
            p[parseInt(e.target.id)].innerHTML = o;
            console.table(tab);
            player = 'x';
        }
    }
    // console.log(line);
    // console.log(player);
});
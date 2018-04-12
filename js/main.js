console.log('main');

const p = document.querySelector('form');
console.log(p);


let player = 'x';
p.addEventListener('click', function(e) {
    e.preventDefault();
    if (player === 'x') {
        if (e.target.tagName === 'BUTTON') {
            console.log(parseInt(e.target.id));
            p[parseInt(e.target.id)].innerHTML = `<img src ="letter-x.png" alt ="X" width ="50%" height ="50%" >`;
        }
        player = 'o';
    } else {
        if (e.target.tagName === 'BUTTON') {
            console.log(parseInt(e.target.id));
            p[parseInt(e.target.id)].innerHTML = `<img src ="circle.png" alt ="X" width ="50%" height ="50%" >`;
        }
        player = 'x';
    }
    console.log(player);
});
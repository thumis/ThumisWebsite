function counter() {
    i = 0;
    var x = 100;
    var y = x;
    var number = document.getElementById('Snelheid').innerHTML;
    if (i < number) {
        setInterval(function () {
            console.log(
                'i:' + i + '\n' +
                'x:' + x + '\n' +
                'y:' + y + '\n' +
                'number:' + number + '\n');
            document.getElementById('Snelheid').innerHTML = i;
            y += x;
        }, y)
    }
    /*
    while (i < number) {
        x+= 0.35;
         //zodat er bij 1 wordt begonnen en eindigt bij het getal wat in number staat

        setInterval(function() {

        },1000 );
        i=Math.round(i + (1 / x));
        i++;
    }
    function task(i) {
        setTimeout(function() {
            console.log(
                'i:'+i+'\n'+
                'x:'+x+'\n'+
                'number:'+number+'\n');
            document.getElementById('Snelheid').innerHTML = i;
        },100 );
    }*/
}
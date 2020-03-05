
/*window.onload = firstChart;

function firstChart(){
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['2013', '2014', '2015', '2016', '2017'],
            datasets: [{
                label: 'Tesla',
                backgroundColor: '#ffa257',
                borderColor: '#ff7400',
                pointBackgroundColor: '#ffffff',
                pointRadius: 10,
                pointBorderWidth: 0,
                lineTension: 0,
                clip: {top:50},
                data: [39.64, 149.56, 219.31, 161.01, 193.69]
            }]
        },

        // Configuration options go here
        options: {
            showLines: true,
            layout: {
                padding: {
                    top: 50
                }
            },
        }
    });
}

var img = new Image();
img.src = 'https://i.redd.it/fhd06mc02q911.png';

    color1 = color5;
    color2 = color6;
    color3 = color7;
    color4 = color8;

*/
//kleuren
var color1 = '#005288';
var color2 = '#88CBD4';
var color3 = '#1FB7CE';
var color4 = '#545cce';

//old titel color
//var color4 = '#3a3a3a';

//ruimteship
var color5 = '#ff0000';

//light theme colors
var colorlight1 = '#F5F5F6';
var colorlight2 = '#E1E2E1';

//dark theme colors
var colordark1 = '#121212';
var colordark2 = '#1d1d1d';

Chart.defaults.global.legend.display = true;
//Chart.defaults.global.legend.align = 'start' ;
Chart.defaults.global.legend.position = 'bottom';
Chart.defaults.global.legend.labels.fontColor = colordark1;
//Chart.defaults.global.legend.labels.boxWidth = '80';


//Alle titles moeten eruit omdat onder 350 width de charts te klein worden
Chart.defaults.global.title.display = false;
Chart.defaults.global.title.position = 'top';
Chart.defaults.global.title.fontFamily = "'Lalezar', cursive";

Chart.defaults.global.defaultFontFamily = "'Muli', sans-serif";
Chart.defaults.global.title.fontColor = colordark1;
Chart.defaults.global.title.fontStyle = '500';
Chart.defaults.global.title.fontSize = '32';
Chart.defaults.doughnut.borderColor = '#222222';
/*Chart.defaults.doughnut.borderWidth='0';
Chart.defaults.doughnut.hoverBorderWidth='0';*/
Chart.defaults.doughnut.borderAlign = 'inner';


var ctx = document.getElementById('LuchtChart').getContext('2d');
var luchtChart = new Chart(ctx, {
    type: 'doughnut',

    data: {
        datasets: [{
            data: [78.00, 20.00, 1.00, 0.00],
            backgroundColor:[
                color1,
                color2,
                color3,
                color5
            ]
        }],
        labels: [
            'stikstof',
            'zuurstof',
            'koolstofdioixde',
            'onbekende stof'
        ],
    },
    options:{
        title: {
            text: 'Luchtverhouding',
        },
        scales:{
            width: 200,
            height: 200,
        }
    }
});

var attx = document.getElementById('AtmosfeerChart').getContext('2d');
var atmosfeerChart = new Chart(attx, {
    type: 'bubble',
    data: {
        datasets: [{
            label:'Ruimteschip',
            data:[{
                x: 0,
                y: 0,
                r:5}],
            backgroundColor:color5
        }, {
            label:'Meteoriet x1023',
            data:[{
                x: -100,
                y: 20,
                r:5}],
            backgroundColor:color1
        }, {
            label:'Meteoriet 343o',
            data:[{
                x: -55,
                y: -67,
                r:8}],
            backgroundColor:color2
        }, {
            label:'Meteoriet 681g',
            data:[{
                x: 34,
                y: 93,
                r:7}],
            backgroundColor:color3
        }],

    },
    options:{
        legend: {
            display: true,
        },
        title: {
            text: 'Omgeving',
        }
    }
});
/*
var sctx = document.getElementById('SnelheidChart').getContext('2d');
var snelheidChart = new Chart(sctx, {
    type: 'doughnut',

    data: {
        datasets: [{
            labels: 'topspeed',
            data: [50],
            backgroundColor: color3,
        }, {
            labels: 'speed',
            data: [5],
            backgroundColor: color1,
        }],
        labels: [
            'Red',
        ],
    },
    options: {
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,

        title: {
            text: 'Snelheid',
        }
    }
});*/

var tctx = document.getElementById('TankChart').getContext('2d');
var TankChart = new Chart(tctx, {
    type: 'horizontalBar',
    data: {
        datasets: [{
            data: [7500],
            backgroundColor: color1,
            label:'Ruimteschip',
        }],
        labels: [
            '',
        ],
    },
    options: {
        title: {
            text: 'Brandstoftank',
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    max:10000
                }
            }],
            yAxes: [{
                stacked: true,
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        return 'L' + value;
                    }
                }
            }],
            gridLines:{
                zeroLineColor:'#00f010',
                color:'#ff00ff'
            },
            scaleLabel:{
                display:false,
                labelString:'Aantal L brandstof over'
            }

        }
    }
});

var actx = document.getElementById('AfstandChart').getContext('2d');
var AfstandChart = new Chart(actx, {
    type: 'horizontalBar',
    data: {
        datasets: [{
            data: [17280],
            backgroundColor: color2,
            label:'ruimteschip'
        }],
        labels: [
            'gereisd vanaf aarde x1000km',
        ],
    },
    options: {
        title: {
            text: 'Afstand gereisd',
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    max:60000
                }
            }],
            yAxes: [{
                stacked: true
            }]
        }

    }
});
var zctx = document.getElementById('ZuurstofChart').getContext('2d');
var ZuurstofChart = new Chart(zctx, {
    type: 'horizontalBar',
    data: {
        datasets: [{
            data: [150],
            backgroundColor: color3,
            label:'Zuurstof tank 1'
        },
        {

            data: [200],
            backgroundColor: color2,
            label:'Zuurstof tank 2'
        }],
        labels: [
            'bar zuurstof over',
        ],
    },
    options: {
        title: {
            text: 'Zuurstoftanks'
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    max:200
                }
            }],
            yAxes: [{
                stacked: false
            }]
        }
    }
});

//========= dark/light theme switch ==========

var modes = 0;
function colorswitch(){
    const sections = document.getElementsByTagName('section');
    const paragraps = document.getElementsByTagName('p');
    const headlines = document.getElementsByTagName('h2');



    if (modes == 0) { //dark modes aan
        //er moet [0] bij omdat hij anders niet weet welke nav er gebruikt moet worden ook al is er maar eentje
        document.getElementsByTagName('nav')[0].style.backgroundColor = colordark2;
        document.getElementsByTagName('footer')[0].style.backgroundColor = colordark2;

        // document.getElementsByTagName('p')[0].style.color = colorlight1;;
        document.getElementById('Snelheid').style.color = colorlight1;
        document.body.style.backgroundColor = colordark1;

        console.log(sections);
        console.log(paragraps);

        for (let i = 0; i < sections.length; i++) {
            sections[i].style.backgroundColor = colordark2;
        }
        for (let i = 0; i < paragraps.length; i++) {
            paragraps[i].style.color = colorlight1;
        }
        for (let i = 0; i < headlines.length; i++) {
            headlines[i].style.color = colorlight1;
        }
        luchtChart.options = {
            title: {
                fontColor: colorlight1,
                text: 'Luchtverhouding'
            },
            legend:{
                labels:{
                    fontColor:colorlight1
                }
            }
        };
        luchtChart.update();

        atmosfeerChart.options = {
            //gehele options moet gekopieerd worden uit het andere gedeelte omdat deze opties de rest vervangen

            title: {
                fontColor: colorlight1,
                text: 'Atmosfeer'
            },
            legend:{
                labels:{
                    fontColor:colorlight1
                }
            }
        };
        atmosfeerChart.update();

        /*
        snelheidChart.options = {
            //gehele options moet gekopieerd worden uit het andere gedeelte omdat deze opties de rest vervangen
            rotation: 1 * Math.PI,
            circumference: 1 * Math.PI,
            title: {
                fontColor: '#ffffff',
                text: 'Snelheid'
            },
        };
        snelheidChart.update();*/

        TankChart.options = {
            responsive: true,
            title: {
                fontColor: colorlight1,
                text: 'Brandstoftank'
            },
            legend:{
                labels:{
                    fontColor:colorlight1
                }
            },
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max:10000
                    }
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        };
        TankChart.update();

        AfstandChart.options = {
            title: {
                fontColor: colorlight1,
                text: 'afstand gereisd'
            },
            legend:{
                labels:{
                    fontColor:colorlight1
                }
            },
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max:60000
                    }
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        };
        AfstandChart.update();

        ZuurstofChart.options = {

            title: {
                fontColor: colorlight1,
                text: 'Zuurstoftank'
            },
            legend:{
                labels:{
                    fontColor:colorlight1
                }
            },
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max:200
                    }
                }],
                yAxes: [{
                    stacked: false
                }]
            }
        };
        ZuurstofChart.update();

        modes = 1;
        document.getElementById("modesSwitch").src = "img/day.png";
        document.getElementById("logo").src = "img/logo.png";
    }
    else{ //day modes aan
        //er moet [0] bij omdat hij anders niet weet welke nav er gebruikt moet worden ook al is er maar eentje
        document.getElementsByTagName('nav')[0].style.backgroundColor = '#005288';
        document.getElementsByTagName('footer')[0].style.backgroundColor = color1;

        document.getElementById('Snelheid').style.color = colordark1;
        document.body.style.backgroundColor = colorlight1;

        //console.log(sections);
        for (let i = 0; i < sections.length; i++) {
            sections[i].style.backgroundColor = colorlight2;
        }
        for (let i = 0; i < paragraps.length; i++) {
            paragraps[i].style.color = colordark1;
        }
        for (let i = 0; i < headlines.length; i++) {
            headlines[i].style.color = colordark1;
        }
        luchtChart.options = {
            title: {
                fontColor: colordark1,
                text: 'Luchtverhouding'
            },
        };
        luchtChart.update();

        AfstandChart.options = {
            title: {
                fontColor: colordark1,
                text: 'afstand gereisd'
            },
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max:60000
                    }
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        };
        AfstandChart.update();

        TankChart.options = {
            title: {
                fontColor: colordark1,
                text: 'Brandstoftank'
            },
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max:10000
                    }
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        };
        TankChart.update();

        atmosfeerChart.options = {

            title: {
                fontColor: colordark1,
                text: 'Atmosfeer'
            }
        };
        atmosfeerChart.update();

        ZuurstofChart.options = {

            title: {
                fontColor: colordark1,
                text: 'Zuurstoftank'
            },
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max:200
                    }
                }],
                yAxes: [{
                    stacked: false
                }]
            }
        };
        ZuurstofChart.update();


        /*
        snelheidChart.options = {
            rotation: 1 * Math.PI,
            circumference: 1 * Math.PI,
            title: {
                fontColor: color4,
                text: 'Snelheid'
            }
        };
        snelheidChart.update();*/
        modes = 0;
        document.getElementById("modesSwitch").src = "img/night.png";
        document.getElementById("logo").src = "img/logodark.png";
    }
}

window.onload = counter();
function counter() {
    i = 0;
    var x = 0;
    var number = document.getElementById('Snelheid').innerHTML;

    while (i < number) {
        x += 1;
        i++;
        //zodat er bij 1 wordt begonnen en eindigt bij het getal wat in number staat
        task(i, x);
    }

    function task(i, x) {
        setTimeout(function () {
            /*console.log(
                'i:'+i+'\n'+
                'x:'+x+'\n'+
                'number:'+number+'\n'+
                'timeout:'+ 1 * i * x);*/
            document.getElementById('Snelheid').innerHTML = i;

        }, 0.058 * i * x);
    }
}
window.onload = counter2();
function counter2() {
    i = 0;
    var x = 0;
    var number2 = document.getElementById('Veiligheidstouw').innerHTML;
    while (i < number2) {
        x+= 0.014;//start speed
        i++;
        //zodat er bij 1 wordt begonnen en eindigt bij het getal wat in number staat
        task2(i,x);
    }
    function task2(i,x) {
        setTimeout(function() {
            /*console.log(
                'i:'+i+'\n'+
                'x:'+x+'\n'+
                'number:'+number2+'\n'+
                'timeout:'+ 1 * i * x);*/
            document.getElementById('Veiligheidstouw').innerHTML = i;

        },0.08* i * x);//curve speed
    }
}

window.onload = counter3();
function counter3() {
    i = 0;
    var x = 0;
    var number2 = document.getElementById('Versnelling').innerHTML;
    while (i < number2) {
        x+= 14;//start speed
        i++;
        //zodat er bij 1 wordt begonnen en eindigt bij het getal wat in number staat
        task3(i,x);
    }
    function task3(i,x) {
        setTimeout(function() {
            /*console.log(
                'i:'+i+'\n'+
                'x:'+x+'\n'+
                'number:'+number2+'\n'+
                'timeout:'+ 1 * i * x);*/
            document.getElementById('Versnelling').innerHTML = i + " m/s<sup>2</sup>";

        },0.08* i * x);//curve speed
    }
}

var voertuigcheck = 0;
function voertuig() {
    const voertuig = document.getElementsByClassName('voertuig');
    if (voertuigcheck == 0) { //dark modes aan
        //console.log(voertuig);
        for (let i = 0; i < voertuig.length; i++) {
            voertuig[i].style.display = 'none';
        }
        voertuigcheck = 1;
        document.getElementById("VoertuigButton").style.backgroundColor = color1;
    }
    else{
        //console.log(voertuig);
        for (let i = 0; i < voertuig.length; i++) {
            voertuig[i].style.display = 'unset';
        }
        voertuigcheck = 0;
        if (modes == 0){
            document.getElementById("VoertuigButton").style.backgroundColor = colorlight1;
        }
        else {
            document.getElementById("VoertuigButton").style.backgroundColor = colordark1;
        }
    }
}

var omgevingcheck = 0;
function omgeving() {
    const omgeving = document.getElementsByClassName('omgeving');
    if (omgevingcheck == 0) { //dark modes aan
        //console.log(voertuig);
        for (let i = 0; i < omgeving.length; i++) {
            omgeving[i].style.display = 'none';
        }
        omgevingcheck = 1;
        document.getElementById("OmgevingButton").style.backgroundColor = color1;
    }
    else{
        //console.log(voertuig);
        for (let i = 0; i < omgeving.length; i++) {
            omgeving[i].style.display = 'unset';
        }
        omgevingcheck = 0;
        if (modes == 0){
            document.getElementById("OmgevingButton").style.backgroundColor = colorlight1;
        }
        else {
            document.getElementById("OmgevingButton").style.backgroundColor = colordark1;
        }
    }
}

var hulpmiddelencheck = 0;
function hulpmiddelen() {
    const hulpmiddelen = document.getElementsByClassName('hulpmiddelen');
    if (hulpmiddelencheck == 0) { //dark modes aan
        //console.log(voertuig);
        for (let i = 0; i < hulpmiddelen.length; i++) {
            hulpmiddelen[i].style.display = 'none';
        }
        hulpmiddelencheck = 1;
        document.getElementById("HulpmiddelenButton").style.backgroundColor = color1;
    }
    else{
        //console.log(voertuig);
        for (let i = 0; i < hulpmiddelen.length; i++) {
            hulpmiddelen[i].style.display = 'unset';
        }
        hulpmiddelencheck = 0;
        if (modes == 0){
            document.getElementById("hulpmiddelenButton").style.backgroundColor = colorlight1;
        }
        else {
            document.getElementById("hulpmiddelenButton").style.backgroundColor = colordark1;
        }
    }
}

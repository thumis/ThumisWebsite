
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
Chart.defaults.global.legend.position = 'bottom';
Chart.defaults.global.legend.labels.fontColor = colordark1;

Chart.defaults.global.title.display = true;
Chart.defaults.global.title.position = 'top';
Chart.defaults.global.title.fontColor = colordark1;
Chart.defaults.global.title.fontStyle = 'bold';
Chart.defaults.global.title.fontSize = '18';
Chart.defaults.doughnut.borderColor = '#222222';
/*Chart.defaults.doughnut.borderWidth='0';
Chart.defaults.doughnut.hoverBorderWidth='0';*/
Chart.defaults.doughnut.borderAlign = 'inner';

var ctx = document.getElementById('LuchtChart').getContext('2d');
var luchtChart = new Chart(ctx, {
    type: 'doughnut',

    data: {
        datasets: [{
            data: [78, 20, 1],
            backgroundColor:[
                color1,
                color2,
                color3
            ]
        }],
        labels: [
            'stikstof',
            'zuurstof',
            'koolstofdioixde'
        ],
    },
    options:{
        title: {
            text: 'Luchtverhouding',
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
        }],
        labels: [
            'brandstoftank is gevuld voor',
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
                stacked: true
            }],
            gridLines:{
                zeroLineColor:'#00f010',
                color:'#ff00ff'
            }
        }
    }
});

var actx = document.getElementById('AfstandChart').getContext('2d');
var AfstandChart = new Chart(actx, {
    type: 'horizontalBar',
    data: {
        datasets: [{
            data: [172800],
            backgroundColor: color2,
        }],
        labels: [
            'x1000km gereisd vanaf aarde',
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
                    max:400000
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
        }],
        labels: [
            'bar zuurstof over',
        ],
    },
    options: {
        title: {
            text: 'Zuurstoftank',
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    max:200
                }
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }
});


//dark/light theme switch
var modes = 0;
function colorswitch(){
    const sections = document.getElementsByTagName('section');

    if (modes == 0) { //dark modes aan
        //er moet [0] bij omdat hij anders niet weet welke nav er gebruikt moet worden ook al is er maar eentje
        document.getElementsByTagName('nav')[0].style.backgroundColor = colordark2;

        //console.log(sections);
        for (let i = 0; i < sections.length; i++) {
            sections[i].style.backgroundColor = colordark2;
            document.body.style.backgroundColor = colordark1;
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
                text: 'tank'
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
                        max:3000
                    }
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        };
        AfstandChart.update();

        modes = 1;
        document.getElementById("modesSwitch").src = "img/day.png";
    }
    else{ //day modes aan
        //er moet [0] bij omdat hij anders niet weet welke nav er gebruikt moet worden ook al is er maar eentje
        document.getElementsByTagName('nav')[0].style.backgroundColor = '#005288';

        //console.log(sections);
        for (let i = 0; i < sections.length; i++) {
            sections[i].style.backgroundColor = colorlight2;
            document.body.style.backgroundColor = colorlight1;
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
                        max:3000
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
                text: 'tank'
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
    }
}

window.onload = counter();
function counter(){
    i=0;
    var x=0;
    var number = document.getElementById('Snelheid').innerHTML;

    while (i < number) {
        x+= 1;
        i++;
        //zodat er bij 1 wordt begonnen en eindigt bij het getal wat in number staat
        task(i,x);
    }
    function task(i,x) {
        setTimeout(function() {
            console.log(
                'i:'+i+'\n'+
                'x:'+x+'\n'+
                'number:'+number+'\n'+
                'timeout:'+ 1 * i * x);
            document.getElementById('Snelheid').innerHTML = i;

        },0.058* i * x);
    }
}

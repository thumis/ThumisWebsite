
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
}*/
window.onload = mixedChart;
var img = new Image();
img.src = 'https://i.redd.it/fhd06mc02q911.png';

function mixedChart(){
    var ctx = document.getElementById('mixedChart').getContext('2d');
    var fillPattern = ctx.createPattern(img, 'repeat');

    var mixedChart = new Chart(ctx, {
        type: 'bubble',

        data: {
            datasets: [{
                label: 'Earth',
                backgroundColor: '#33ff00',
                borderColor: '#33ff00',
                pointBackgroundColor: '#33ff00',
                pointRadius: 10,
                pointBorderWidth: 0,
                lineTension: 0,
                responsive:true,
                clip: {top:50},
                data: [
                    {
                        x: 0,
                        y: 0,
                        r: 8
                }]
            }, {
                label: 'Spaceship',
                backgroundColor: '#1a1a1a',
                borderColor: '#fff9fc',
                pointBackgroundColor: '#1a1a1a',
                pointRadius: 10,
                pointBorderWidth: 0,
                lineTension: 0,
                clip: {top:50},
                data: [
                    {
                        x: 161.01,
                        y:60,
                        r:20,
                    }]
            }, {
                label: 'Mars',
                backgroundColor: '#ffa257',
                borderColor: '#ff7400',
                pointBackgroundColor: '#ffffff',
                pointRadius: 10,
                pointBorderWidth: 0,
                lineTension: 0,
                clip: {top:50},
                data: [
                    {
                        x: 250,
                        y:100,
                        r: 10
                    }]
            }, {
                label: 'Calculated Route',
                data: [{
                        x: 0,
                        y:0

                    }, {
                        x:250,
                        y:100
                    }],
                backgroundColor: '#fbffff',
                borderColor: '#ff0300',
                pointBackgroundColor: '#ffffff',
                pointRadius: 0,
                pointBorderWidth: 0,
                lineTension: 0,
                fill: false,

                // Changes this dataset to become a line
                type: 'line',
            }],
            options:{
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            display: true,
                            color:'#ff0000'
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            display: true,
                            color:'#ff0000'
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        }
                    }]
                },
                responsive:true,
                maintainAspectRatio:false
            },

            animation: {
                onProgress: function(animation) {
                    progress.value = animation.animationObject.currentStep / animation.animationObject.numSteps;
                }
            }
        },
    });
}

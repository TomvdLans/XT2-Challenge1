window.onload = charts;

function charts(){
    var ctx1 = document.getElementById('hartslag').getContext('2d');
    var line = new Chart(ctx1, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24'],
            datasets: [{
                label: 'Vandaag',
                data: [82, 95, 87, 91, 122, 126, 97, 77, 70, 69, 68, 71],
                borderColor: '#005288',
                pointRadius: 5,
                pointBackgroundColor: '#005288',
                fill: 'false',
                pointBorderColor: '#005288',
                
            }, {
                label: 'Gisteren',
                data: [4, 6, 20, 15, 18, 1, 5, 6, 3, 4, 2, 2, 1],
                borderColor: '#A7A9AC',
                pointRadius: 5,
                pointBackgroundColor: '#A7A9AC',
                fill: 'false',
                pointBorderColor: '#A7A9AC',
            }]
        },

        // Configuration options go here
        options: {
            title: {
                display: true,
                text: 'Hartslag',
                
            },

            legend: {
                display: false
            },

            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Tijd (h)'
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'hartslag (BPM)'
                        
                    },
                    stacked: true,
                }]
            },
            
            //aspectRatio: '1',
            responisve: 'true',
            maintainAspectRatio: 'false',
        }
    });

    var ctx3 = document.getElementById('stress').getContext('2d');
    var bar = new Chart(ctx3, {

        type: 'bar',

        data: {
            datasets: [{
                label: 'Vandaag',
                data: [1, 2, 3, 4, 5, 3, 3, 2, 2, 1, 1, 0],
                backgroundColor: '#005288',
            }],

            labels: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24'],
        },

        options: {
            title: {
                display: true,
                text: 'Stressniveau',
                
            },

            legend: {
                display: false
            },

            //aspectRatio: '1',
            responsive: 'true',
            maintainAspectRatio: 'false',

            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Tijd (h)'
                    },
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max: 10,
                    },

                    scaleLabel: {
                        display: true,
                        labelString: 'Stressniveau'
                        
                    },
                }]
            }
        }
    });

    var ctx2 = document.getElementById('activiteiten').getContext('2d');
    var doughnut = new Chart(ctx2, {

        type: 'doughnut',
        
        data: {
            datasets: [{
                data: [16, 7, 12, 14, 51],
                backgroundColor:['#CE9423', '#3D8544', '#005288', '#A7A9AC', '#3C3C3C',]
            }],
            labels: ['Beweging', 'Eten', 'Drinken', 'Rust', 'Slapen']
        },
            
        options: {
            title: {
                display: true,
                text: 'Activiteiten',
                
            },

            aspectRatio: '1',
            responsive: 'true',
            maintainAspectRatio: 'false',
        }
    });
};

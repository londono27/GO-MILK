let productos__vendidos__grafico = document.getElementById("productos__vendidos__grafico").getContext("2d");
var chart = new Chart(productos__vendidos__grafico, {
    type: "bar",
    data: {
        labels: ['Cortado', 'Ristretto', 'Macchiato', 'Coretto', 'Con Panna', 'Romano','Mead Raf', 'Marocchino', 'Mocha', 'Breve', 'Raf Coffe', 'Chocolate Milk'],
        datasets: [{
            label: 'Ventas para cada Café',
            data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }],
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    }
})



let ventas__totales__grafico = document.getElementById("ventas__totales__grafico").getContext("2d");
var chart = new Chart(ventas__totales__grafico, {
    type: "line",
    data: {
        labels: ['Bogotá', 'Barranquilla', 'Medellín', 'Tunja', 'Sogamoso', 'Cali'],
        datasets: [{
            label: 'Ventas Ciudad',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 4
        }],
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    }
})



let ventas__pago__grafico = document.getElementById("ventas__pago__grafico").getContext("2d");
var chart = new Chart(ventas__pago__grafico, {
    type: "doughnut",
    data: {
        labels: ['Efectivo', 'Tarjeta'],
        datasets: [{

            data: [12, 19],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderColor: [
                'rgb(255, 255, 255)'
            ],
            borderWidth: 8
        }],
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    }
})
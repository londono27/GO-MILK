var productos__vendidos__grafico = document.getElementById("productos__vendidos__grafico").getContext("2d");
var productosChart = new Chart(productos__vendidos__grafico, {
    type: "bar",
    data: {
        // labels: ['Cortado', 'Ristretto', 'Macchiato', 'Coretto', 'Con Panna', 'Romano','Mead Raf', 'Marocchino', 'Mocha', 'Breve', 'Raf Coffe', 'Chocolate Milk'],
        datasets: [{
            label: 'Ventas para cada Café',
            // data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
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

let urlProductos =  'http://localhost/proyectos/GO-MILK/apirest/productos.php'
fetch(urlProductos)
    .then (response => response.json())
    .then (datos => mostrarProductos(datos))
    .catch(error => console.log(error))


const mostrarProductos = (productos) =>{
    productos.forEach(element => {
        productosChart.data['labels'].push(element.titulo)
        productosChart.data['datasets'][0].data.push(element.cantidad)
    });
}



let ventas__totales__grafico = document.getElementById("ventas__totales__grafico").getContext("2d");
var ventasChart = new Chart(ventas__totales__grafico, {
    type: "line",
    data: {
        // labels: ['Bogotá', 'Barranquilla', 'Medellín', 'Tunja', 'Sogamoso', 'Cali'],
        datasets: [{
            label: 'Ventas Ciudad',
            // data: [12, 19, 3, 5, 2, 3],
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


let urlCiudades =  'http://localhost/proyectos/GO-MILK/apirest/ciudades.php'
fetch(urlCiudades)
    .then (response => response.json())
    .then (datos => mostrarCiudades(datos))
    .catch(error => console.log(error))


const mostrarCiudades = (ciudades) =>{
    ciudades.forEach(element => {
        ventasChart.data['labels'].push(element.ciudad)
        ventasChart.data['datasets'][0].data.push(element.cantidad)
    });
}



let ventas__pago__grafico = document.getElementById("ventas__pago__grafico").getContext("2d");
var pagoChart = new Chart(ventas__pago__grafico, {
    type: "doughnut",
    data: {
        // labels: ['Efectivo', 'Tarjeta'],
        datasets: [{

            // data: [12, 19],
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


let urlPagos =  'http://localhost/proyectos/GO-MILK/apirest/pagos.php'
fetch(urlPagos)
    .then (response => response.json())
    .then (datos => mostrarPagos(datos))
    .catch(error => console.log(error))


const mostrarPagos = (pagos) =>{
    pagos.forEach(element => {
        pagoChart.data['labels'].push(element.pago)
        pagoChart.data['datasets'][0].data.push(element.cantidad)
    });
}
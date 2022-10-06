
function seleccionar(select) {
  let lon
  let lat

  let temperaturaValor = document.getElementById('temperatura-valor')
  let temperaturaDescripcion = document.getElementById('temperatura-descripcion')

  let ubicacion = document.getElementById('ubicacion')
  let iconoAnimado = document.getElementById('icono-animado')

  let vientoVelocidad = document.getElementById('viento-velocidad');

  let departamento = document.getElementById("selector").value;

  var url;


  url = `https://api.openweathermap.org/data/2.5/weather?q=${departamento}&lang=es&units=metric&appid=146ee22d857ca40b1b51e905477324ba`

  if (navigator.geolocation) {

    
    fetch(url)
    .then(response => { return response.json() })
    .then(data => {
      //console.log(data)

      let temp = Math.round(data.main.temp)
      //console.log(temp)
      temperaturaValor.textContent = `${temp} ° C`

      //console.log(data.weather[0].description)
      let desc = data.weather[0].description
      temperaturaDescripcion.textContent = desc.toUpperCase()
      ubicacion.textContent = data.name

      vientoVelocidad.textContent = `${data.wind.speed} m/s`

      //para iconos dinámicos
      console.log(data.weather[0].main)
      switch (data.weather[0].main) {
        case 'Thunderstorm':
          iconoAnimado.src = 'animated/thunder.svg'
          console.log('TORMENTA');
          break;
        case 'Drizzle':
          iconoAnimado.src = 'animated/rainy-2.svg'
          console.log('LLOVIZNA');
          break;
        case 'Rain':
          iconoAnimado.src = 'animated/rainy-7.svg'
          console.log('LLUVIA');
          break;
        case 'Snow':
          iconoAnimado.src = 'animated/snowy-6.svg'
          console.log('NIEVE');
          break;
        case 'Clear':
          iconoAnimado.src = 'animated/day.svg'
          console.log('LIMPIO');
          break;
        case 'Atmosphere':
          iconoAnimado.src = 'animated/weather.svg'
          console.log('ATMOSFERA');
          break;
        case 'Clouds':
          iconoAnimado.src = 'animated/cloudy-day-1.svg'
          console.log('NUBES');
          break;
        default:
          iconoAnimado.src = 'animated/cloudy-day-1.svg'
          console.log('por defecto');
      }

    })

    .catch(error => {
      console.log(error)
    })
    

  }

}



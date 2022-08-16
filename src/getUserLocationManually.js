let location
let card = document.querySelector('.card')

function getEnteredLocation() {
  document.body.addEventListener('click', e => {
    if(e.target.classList.contains('fa-magnifying-glass') && document.querySelector('#input-text').value) {
      location = document.querySelector('#input-text').value
      fetchData()

      document.querySelector('#input-text').value = ''
    } else {
      return
    }
  })
}

async function fetchData() {
  let request = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=c945318b5fd7cdff9ae0fe0a1ad3135a&units=imperial`)

  let result = await request.json()
  console.log(result)
  let temp = result.main.temp
  let weather = result.weather[0].main
  let locationName = result.name
  let feelsLike = result.main.feels_like
  let humidity = result.main.humidity

  function makeWeatherCard() {
    card.innerHTML = `<ul>
    <li>${locationName}</li>
    <li>Weather: ${weather}</li>
    <li>Temperature: ${temp} F</li>
    <li>Feels Like: ${feelsLike} F</li>
    </ul> 
    `
  }

  makeWeatherCard()
}

export { getEnteredLocation, fetchData }
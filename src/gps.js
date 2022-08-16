//get lat and long from browser if user agrees
function getPosition() {
  if('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
      let latitude = position.coords.latitude
      let longitude = position.coords.longitude

      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=c945318b5fd7cdff9ae0fe0a1ad3135a&units=imperial`)
        .then(response => response.json())
        .then(response => console.log(response))
       
    })
  } 
}

export { getPosition }
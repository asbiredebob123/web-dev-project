window.addEventListener('load', ()=> {
    let long;  
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureSection = document.querySelector('.temperature-section');
    let temperatureHumidity = document.querySelector('.humidity');
    const temperatureSpan = document.querySelector('.temperature-section span');
    
    
    
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            
            const proxy = 'http://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/60d57ec6628c1f6cba0ecbfb285e85f4/${lat},${long}`;
            
            fetch(api)
            .then(data => {
                return data.json();
            })
            .then(data => {
                
                const {temperature, summary, humidity, icon} = data.currently;
                // set dom elements from the api
                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = summary;
                locationTimezone.textContent = data.timezone;
                temperatureHumidity.textContent = 'Humidity = ' +  humidity;
                console.log(data);
                //formula for celsius
                let celsius = (temperature - 32) * (5 / 9);
                
                //set icon
                setIcons(icon,  document.querySelector('.icon'));
                
                //change temperature to celsius/farenheit
                temperatureSection.addEventListener('click', () =>{
                    if(temperatureSpan.textContent === 'F'){
                        temperatureSpan.textContent = 'C';
                        temperatureDegree.textContent = Math.floor(celsius);
                    }else{
                        temperatureSpan.textContent = 'F';
                        temperatureDegree.textContent = temperature;
                    }
                })
            })
            
        });
        
        
    } else {
        alert('Algo de errado ocorreu. O site não funcionará corretamente.')
    }
    
   function setIcons(icon, iconID){
       const skycons = new Skycons({color:'white'});
       const currentIcon = icon.replace(/-/g, "_").toUpperCase();
       skycons.play();
       return skycons.set(iconID, Skycons[currentIcon]);
   } 
    
});









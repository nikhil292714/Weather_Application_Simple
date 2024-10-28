
let cityInput=document.getElementById("city")
let searchbtn=document.querySelector("#search-btn")
searchbtn.addEventListener("click",()=>{
    let city=cityInput.value.trim()
    if(city){
      
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=404c189e10384002c29f7f759b126ef2&units=metric`)
      .then(response=>response.json())
        .then(data=>{
            if(data.message){
                alert(data.message)
            }
            else{
                
               /* console.log(data.name);
                console.log(data.main.temp);
                console.log(data.main.humidity);
                console.log(data.wind.speed);
                console.log(data.weather[0].main);*/
                document.querySelector(".info").style.display="flex"
                document.getElementById("cityname").innerHTML="Name:- "+data.name
                document.getElementById("wind").innerHTML="Wind:- "+data.wind.speed +" m/s"
                document.getElementById("humidity").innerHTML="Humidity:- "+data.main.humidity+" %"
                document.getElementById("temp").innerHTML="Temp:- "+data.main.temp+" ℃"
                let weatherCondition = data.weather[0].main;
                    let weatherIcon = document.getElementById("weather-icon");

                    
                    if (weatherCondition === "Clear") {
                        weatherIcon.src = "sunny.jpeg";
                    } else if (weatherCondition === "Clouds") {
                        weatherIcon.src = "cloud.jpeg"; 
                    } else if (weatherCondition === "Rain") {
                        weatherIcon.src = "rain.avif";  
                    } 
                    else if (weatherCondition === "Haze") {
                        weatherIcon.src = "haze.jpeg"; 
                    } 
                    
                    
                    else {
                        weatherIcon.src = "default.png"; 
                    }

                    
                    weatherIcon.style.display = "block";
                
            }
            
        })
        .catch(error=>console.log(error))

    }
    else{
        alert("First Write City Name")
    }
})
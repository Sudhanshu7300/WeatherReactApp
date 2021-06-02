import React, {  useState } from 'react'
import  './Test.css';

 const App = () =>{

   let [city,setCity]=useState(" ")
   let [weather,setWeather]=useState(" ")
   let [icon, setIcon] = useState("");

   let AjChange =(evt) =>{
       let city =evt.target.value;
       setCity(city);
   }
   
   const Ajclick=()=>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=fd9f799571dd8b9e79c8def4b86cc29d`)
     .then(response =>response.json())
     .then(data=>{
         setWeather(data.main)
        setIcon(data.weather.icon)
     })
   }



    return(
        <>
              <div class="container-fluid main_header">
                <div class="row">  
             <div class="col-md-12 col-12 mx-auto">
        <div class="main_content">
         <div class="temp_form">

          <input type ="search" 
          placeholder="Enter Your city name" 
          onChange={AjChange}
           />
      
         <input type="button" value="serach" onClick={Ajclick}  />
         </div>   
        </div>
        <div class="TempInfo">
      <div class="Main_layer" >
   
   {!city ? (
       <p> No Data Found</p>
   ) : ( 
       <div>
 
         <p  class="para">Get Output here = {city}</p>
             <p>Temp-{weather.temp}0<sup>o</sup>C</p><br/>
            <p> Feels-like-{weather.feels_like}0<sup>o</sup>C</p><br/>
            <p> Sea-Level-{weather.sea_level}0<sup>o</sup>C</p><br/>
             <p> <i class="fal fa-clouds"></i></p>
        <i> {icon}</i>
        </div>
       

    )} 
    </div>
        </div>
  
</div>
    </div>
    </div>
 
 
        </>
    )
 }
 export default App;
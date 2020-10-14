const express= require("express");
const app = express();
const axios=require("axios")

  const requestOne = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Florida&appid=7895d91901cc6c5acc73c12abd452d39`);
  const requestTwo = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=LasVegas&appid=7895d91901cc6c5acc73c12abd452d39`);
  const requestThree = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=7895d91901cc6c5acc73c12abd452d39`);


  axios
  .all([requestOne, requestTwo, requestThree])
  .then(axios.spread((firstResponse, secondResponse, thirdResponse) => {
      console.log(firstResponse.data,secondResponse.data, thirdResponse.data);
    })
  )
  .catch(errors => {
    console.error(errors);
  });
 
app.listen(3000,()=>{ console.log("the server is running on port 3000")})

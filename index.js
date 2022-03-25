movies =[]

const domSelectors = {
  container: ".container",
}
const fetch_api = ()=>{
fetch('http://localhost:3000/movies')
    // Handle success
    .then(response => response.json())  // convert to json
    .then(json => movies=json)    //print data to console
    .catch(err => console.log('Request Failed', err));
}

const render =()=>{
  return `<div class="card">
  <div class="card-image"></div>
  <div class="card-text">
    <h2>Post One</h2>
    <p>
     
    </p>
  </div>
  </div>`
}
fetch_api()
console.log(movies)
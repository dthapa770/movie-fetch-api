
const sliders = document.querySelector(".container")
var scroll_per_click;
var ImagePadding = 20


const fetch_api = ()=>{
fetch('http://localhost:3000/movies')
    // Handle success
    .then(response => { 
      if (!response.ok){
        throw Error("Error")
      }
      return response.json()
    })  // convert to json
    .then(data =>{
      const html = data.map(
        movies => {
          return `<div class="card-wrapper">
                        <div class = "card-${movies.id}">
                    <div class="card-image"><img src="${movies.imgUrl}"></div>
                    <div class="card-text">
                      <h2>${movies.name}</h2>
                      <p>${movies.outlineInfo}</p>
                    
                    <div>
                    </div>
                  </div>`                
        } 
      ).join("");
      sliders.insertAdjacentHTML("afterbegin",html);
      scroll_per_click = document.querySelector(".card-1").clientWidth+ImagePadding;
      console.log(scroll_per_click)
      
     
    })
    .catch(err => console.log('Request Failed', err));
  }


fetch_api()


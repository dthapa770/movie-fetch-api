async function getMoviesAPI(){

  return fetch('http://localhost:3000/movies').then(response => {
      let jsonData = response.json()
      console.log(jsonData)
      return jsonData
  })
}
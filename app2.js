window.addEventListener("DOMContentLoaded", () => {
    axios 
        .get("https://covidnigeria.herokuapp.com/api")
        .then(res => statesData(res.data.data.states))
  // .then(response => console.log(response.data.data.states))

        .catch(showResponse => console.log('ERROR!!'));
      
 
});


statesData = (res) => {
document.getElementById('states').innerHTML = `

`

}


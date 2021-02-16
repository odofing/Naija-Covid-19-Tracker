const url = 
"https://covidnigeria.herokuapp.com/api"; 

const getApi = async (url) => { 

	// Storing response 
	const res = await fetch(url); 
  
	// Storing data in form of JSON 
	const apiData = await res.json(); 
   console.log(apiData.data); 
	if (res) { 
		hideSpinner(); 
	} 

  // MAP STATES TO UI
  const stateUI = document.getElementById('states')
  const states = apiData.data.states.map(state => {
  //  console.log(state)
    const tr = document.createElement('tr');
    tr.innerHTML =  
`      <tr class="text-center">
        <th scope="row">${state.state}</th>
        <td>${state.casesOnAdmission}</td>
        <td>${state.confirmedCases}</td>
        <td>${state.death}</td>
        <td>${state.discharged}</td>
        </tr>
`
stateUI.appendChild(tr);
})

document.getElementById('container').innerHTML = 
    `
    <main> 
  <div id="container">
  <h3 class="p-3">National Data</h3>
  <div class="row">
    <div class="col-md-6 m-auto">
      <table class="table table-striped">
        <tbody>
          <tr>
           <td>Total Discharged</td>
            <td class="text-success font-weight-bold">${apiData.data.discharged}</td>
          </tr>
          <tr>
            <td>Total Deaths</td>
            <td class="text-danger font-weight-bold">${apiData.data.death}</td>
           
          </tr>

          <tr>
            
            <td>Total Active Cases</td>
            <td class="text-warning font-weight-bold">${apiData.data.totalActiveCases}</td>
            
          </tr>
          <tr>
            
            <td>Total Confirmed Cases</td>
            <td class="text-primary font-weight-bold">${apiData.data.totalConfirmedCases}</td>
           
          </tr>
          <td>Total Samples Tested</td>
          <td class="text-success font-weight-bold">${apiData.data.totalSamplesTested}</td>
        </tbody>
      </table>
    </div>
   
  </div>

 
</div>
</main>
    `
  }

// Calling that async function 
getApi(url); 

// Function to hide the Spinner 
function hideSpinner() { 
	document.getElementById('spinner') 
			.style.display = 'none'; 
} 

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];


// GET REAL DATE
 // let futureDate = new Date(1999, 3, 4, 1, 1, 2);


 let futureDate = new Date();

const realDate = document.getElementById("real-date");
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const seconds = futureDate.getSeconds();
const month = futureDate.getMonth();
const date = futureDate.getDate();
const weekDay = futureDate.getDay();
// console.log(weekdays[weekDay])
// console.log(months[month])


if (seconds < 10) {
  realDate.textContent = `${weekdays[weekDay]} ${date} ${months[month]}, ${year}.  ${hours} : ${minutes}`
} else if ( minutes < 10 ) {
  realDate.textContent = `${weekdays[weekDay]} ${date} ${months[month]}, ${year}.  ${hours} : 0${minutes}`
} else if (seconds < 10 && minutes < 10 ) {
  realDate.textContent = `${weekdays[weekDay]} ${date} ${months[month]}, ${year}.  ${hours} : 0${minutes}`
}  else {
  realDate.textContent = `${weekdays[weekDay]} ${date} ${months[month]}, ${year}.  ${hours} : ${minutes}`
} 


// error message
showError = res => {
  document.getElementById('error').innerHTML = `
  <div id="error">
  <main>
    <div class="container">
      <div class="row">
        <div class="col-md-6 text-center text-danger p-3">
          <h3 class="lead">Network Error, Please refresh your webpage.
          if problem persists, please check back later...</h3>
        </div>
      </div>
     
    </div>
  </main>
  `;
}

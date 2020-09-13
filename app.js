
window.addEventListener("DOMContentLoaded", () => {
 
    axios 
        .get("https://covidnigeria.herokuapp.com/api")
    //  .then(res => console.log(res))
        .then(res => showResp(res))       
        .catch(res => console.log('ERROR!!'));
      
 
});

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
// let futureDate = new Date(1999, 3, 4, 11, 30, 09);
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

realDate.textContent = `${weekdays[weekDay]} ${date} ${months[month]}, ${year}. ${hours} : ${minutes}.`;

 const dates = new Date()
 console.log(dates)
// <p class="p-3">${date}</p>

showResp = (res) => {
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
            <td class="text-success font-weight-bold">${res.data.data.discharged}</td>
          
          </tr>
          <tr>
           
            <td>Total Deaths</td>
            <td class="text-danger font-weight-bold">${res.data.data.death}</td>
           
          </tr>

          <tr>
            
            <td>Total Active Cases</td>
            <td class="text-warning font-weight-bold">${res.data.data.totalActiveCases}</td>
            
          </tr>
          <tr>
            
            <td>Total Confirmed Cases</td>
            <td class="text-primary font-weight-bold">${res.data.data.totalConfirmedCases}</td>
           
          </tr>
          <td>Total Samples Tested</td>
          <td class="text-success font-weight-bold">${res.data.data.totalSamplesTested}</td>
        </tbody>
      </table>
    </div>
   
  </div>
  <table class="table table-striped">
  <h3 class="state-data m-auto p-3">Data by State</h3>
<thead class="thead-dark">
<tr>
  <th scope="col">State</th>
  <th scope="col">Cases On Admission</th>
  <th scope="col">Confirmed Cases</th>
  <th scope="col">Death</th>
  <th scope="col">Discharged</th>
  
</tr>
</thead>
<tbody>
<tr>
  <th scope="row">${res.data.data.states[0].state}</th>
  <td>${res.data.data.states[0].casesOnAdmission}</td>
  <td>${res.data.data.states[0].confirmedCases}</td>
  <td>${res.data.data.states[0].death}</td>
  <td>${res.data.data.states[0].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[1].state}</th>
<td>${res.data.data.states[1].casesOnAdmission}</td>
<td>${res.data.data.states[1].confirmedCases}</td>
<td>${res.data.data.states[1].death}</td>
<td>${res.data.data.states[1].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[2].state}</th>
<td>${res.data.data.states[2].casesOnAdmission}</td>
<td>${res.data.data.states[2].confirmedCases}</td>
<td>${res.data.data.states[2].death}</td>
<td>${res.data.data.states[2].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[3].state}</th>
<td>${res.data.data.states[3].casesOnAdmission}</td>
<td>${res.data.data.states[3].confirmedCases}</td>
<td>${res.data.data.states[3].death}</td>
<td>${res.data.data.states[3].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[4].state}</th>
<td>${res.data.data.states[4].casesOnAdmission}</td>
<td>${res.data.data.states[4].confirmedCases}</td>
<td>${res.data.data.states[4].death}</td>
<td>${res.data.data.states[4].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[5].state}</th>
<td>${res.data.data.states[5].casesOnAdmission}</td>
<td>${res.data.data.states[5].confirmedCases}</td>
<td>${res.data.data.states[5].death}</td>
<td>${res.data.data.states[5].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[6].state}</th>
<td>${res.data.data.states[6].casesOnAdmission}</td>
<td>${res.data.data.states[6].confirmedCases}</td>
<td>${res.data.data.states[6].death}</td>
<td>${res.data.data.states[6].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[7].state}</th>
<td>${res.data.data.states[7].casesOnAdmission}</td>
<td>${res.data.data.states[7].confirmedCases}</td>
<td>${res.data.data.states[7].death}</td>
<td>${res.data.data.states[7].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[8].state}</th>
<td>${res.data.data.states[8].casesOnAdmission}</td>
<td>${res.data.data.states[8].confirmedCases}</td>
<td>${res.data.data.states[8].death}</td>
<td>${res.data.data.states[8].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[9].state}</th>
<td>${res.data.data.states[9].casesOnAdmission}</td>
<td>${res.data.data.states[9].confirmedCases}</td>
<td>${res.data.data.states[9].death}</td>
<td>${res.data.data.states[9].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[10].state}</th>
<td>${res.data.data.states[10].casesOnAdmission}</td>
<td>${res.data.data.states[10].confirmedCases}</td>
<td>${res.data.data.states[10].death}</td>
<td>${res.data.data.states[10].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[11].state}</th>
<td>${res.data.data.states[11].casesOnAdmission}</td>
<td>${res.data.data.states[11].confirmedCases}</td>
<td>${res.data.data.states[11].death}</td>
<td>${res.data.data.states[11].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[12].state}</th>
<td>${res.data.data.states[12].casesOnAdmission}</td>
<td>${res.data.data.states[12].confirmedCases}</td>
<td>${res.data.data.states[12].death}</td>
<td>${res.data.data.states[12].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[13].state}</th>
<td>${res.data.data.states[13].casesOnAdmission}</td>
<td>${res.data.data.states[13].confirmedCases}</td>
<td>${res.data.data.states[13].death}</td>
<td>${res.data.data.states[13].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[14].state}</th>
<td>${res.data.data.states[14].casesOnAdmission}</td>
<td>${res.data.data.states[14].confirmedCases}</td>
<td>${res.data.data.states[14].death}</td>
<td>${res.data.data.states[14].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[15].state}</th>
<td>${res.data.data.states[15].casesOnAdmission}</td>
<td>${res.data.data.states[15].confirmedCases}</td>
<td>${res.data.data.states[15].death}</td>
<td>${res.data.data.states[15].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[16].state}</th>
<td>${res.data.data.states[16].casesOnAdmission}</td>
<td>${res.data.data.states[16].confirmedCases}</td>
<td>${res.data.data.states[16].death}</td>
<td>${res.data.data.states[16].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[17].state}</th>
<td>${res.data.data.states[17].casesOnAdmission}</td>
<td>${res.data.data.states[17].confirmedCases}</td>
<td>${res.data.data.states[17].death}</td>
<td>${res.data.data.states[17].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[18].state}</th>
<td>${res.data.data.states[18].casesOnAdmission}</td>
<td>${res.data.data.states[18].confirmedCases}</td>
<td>${res.data.data.states[18].death}</td>
<td>${res.data.data.states[18].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[19].state}</th>
<td>${res.data.data.states[19].casesOnAdmission}</td>
<td>${res.data.data.states[19].confirmedCases}</td>
<td>${res.data.data.states[19].death}</td>
<td>${res.data.data.states[19].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[20].state}</th>
<td>${res.data.data.states[20].casesOnAdmission}</td>
<td>${res.data.data.states[20].confirmedCases}</td>
<td>${res.data.data.states[20].death}</td>
<td>${res.data.data.states[20].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[21].state}</th>
<td>${res.data.data.states[21].casesOnAdmission}</td>
<td>${res.data.data.states[21].confirmedCases}</td>
<td>${res.data.data.states[21].death}</td>
<td>${res.data.data.states[21].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[22].state}</th>
<td>${res.data.data.states[22].casesOnAdmission}</td>
<td>${res.data.data.states[22].confirmedCases}</td>
<td>${res.data.data.states[22].death}</td>
<td>${res.data.data.states[22].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[23].state}</th>
<td>${res.data.data.states[23].casesOnAdmission}</td>
<td>${res.data.data.states[23].confirmedCases}</td>
<td>${res.data.data.states[23].death}</td>
<td>${res.data.data.states[23].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[24].state}</th>
<td>${res.data.data.states[24].casesOnAdmission}</td>
<td>${res.data.data.states[24].confirmedCases}</td>
<td>${res.data.data.states[24].death}</td>
<td>${res.data.data.states[24].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[25].state}</th>
<td>${res.data.data.states[25].casesOnAdmission}</td>
<td>${res.data.data.states[25].confirmedCases}</td>
<td>${res.data.data.states[25].death}</td>
<td>${res.data.data.states[25].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[26].state}</th>
<td>${res.data.data.states[26].casesOnAdmission}</td>
<td>${res.data.data.states[26].confirmedCases}</td>
<td>${res.data.data.states[26].death}</td>
<td>${res.data.data.states[26].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[27].state}</th>
<td>${res.data.data.states[27].casesOnAdmission}</td>
<td>${res.data.data.states[27].confirmedCases}</td>
<td>${res.data.data.states[27].death}</td>
<td>${res.data.data.states[27].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[28].state}</th>
<td>${res.data.data.states[28].casesOnAdmission}</td>
<td>${res.data.data.states[28].confirmedCases}</td>
<td>${res.data.data.states[28].death}</td>
<td>${res.data.data.states[28].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[28].state}</th>
<td>${res.data.data.states[28].casesOnAdmission}</td>
<td>${res.data.data.states[28].confirmedCases}</td>
<td>${res.data.data.states[28].death}</td>
<td>${res.data.data.states[28].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[29].state}</th>
<td>${res.data.data.states[29].casesOnAdmission}</td>
<td>${res.data.data.states[29].confirmedCases}</td>
<td>${res.data.data.states[29].death}</td>
<td>${res.data.data.states[29].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[30].state}</th>
<td>${res.data.data.states[30].casesOnAdmission}</td>
<td>${res.data.data.states[30].confirmedCases}</td>
<td>${res.data.data.states[30].death}</td>
<td>${res.data.data.states[30].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[31].state}</th>
<td>${res.data.data.states[31].casesOnAdmission}</td>
<td>${res.data.data.states[31].confirmedCases}</td>
<td>${res.data.data.states[31].death}</td>
<td>${res.data.data.states[31].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[32].state}</th>
<td>${res.data.data.states[32].casesOnAdmission}</td>
<td>${res.data.data.states[32].confirmedCases}</td>
<td>${res.data.data.states[32].death}</td>
<td>${res.data.data.states[32].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[33].state}</th>
<td>${res.data.data.states[33].casesOnAdmission}</td>
<td>${res.data.data.states[33].confirmedCases}</td>
<td>${res.data.data.states[33].death}</td>
<td>${res.data.data.states[33].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[34].state}</th>
<td>${res.data.data.states[34].casesOnAdmission}</td>
<td>${res.data.data.states[34].confirmedCases}</td>
<td>${res.data.data.states[34].death}</td>
<td>${res.data.data.states[34].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[35].state}</th>
<td>${res.data.data.states[35].casesOnAdmission}</td>
<td>${res.data.data.states[35].confirmedCases}</td>
<td>${res.data.data.states[35].death}</td>
<td>${res.data.data.states[35].discharged}</td>
</tr>
<tr>
<th scope="row">${res.data.data.states[36].state}</th>
<td>${res.data.data.states[36].casesOnAdmission}</td>
<td>${res.data.data.states[36].confirmedCases}</td>
<td>${res.data.data.states[36].death}</td>
<td>${res.data.data.states[36].discharged}</td>
</tr>
</tbody>
</table>
</div>
</main>
    `
}
 

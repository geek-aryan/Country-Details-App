let xhr
let endPoint="https://restcountries.com/v2/all"
function loadCountries(){
    // console.log('clickd');
    xhr=new XMLHttpRequest()
    xhr.onreadystatechange=processContries
    xhr.open("GET",endPoint,true)
    xhr.send(null)
}
function processContries(){
    if(xhr.readyState===4 && xhr.status===200){
        // console.log('succs');
        const jsonObj=JSON.parse(xhr.responseText)
        // console.log(jsonObj);
        let countryList=document.getElementById("countries")
        let items=""
        jsonObj.forEach(t => {
            items+=`<option value="${t.name}">${t.name}</option>`
        });
        countryList.innerHTML=items 
    }
    else if (xhr.readyState === 4 && xhr.status !== 200) {
        alert("Sorry! The request cannot be fulfilled\nReason:" + xhr.statusText);
      }
}
function showCountryDetails()
{
    xhr=new XMLHttpRequest()
    xhr.onreadystatechange=processDetails
    xhr.open("GET",endPoint,true)
    xhr.send(null)
}
function processDetails(){
    if(xhr.readyState===4 && xhr.status===200)
    {
        const jsonObj=JSON.parse(xhr.responseText)
        let countryName=document.getElementById("countries").value
        jsonObj.forEach(t=>{
            if(countryName===t.name)
            {
                console.log('matched');
                let table=document.getElementById("countrytable")
                table.innerHTML=`
                <tr>
                    <th>Capital City</th>
                    <td>${t.capital}</td>
                </tr>
                <tr>
                    <th>Flag</th>
                    <td><img src="${t.flags.png}"></td>
                </tr>
                <tr>
                    <th>Currency</th>
                    <td>(${t.currencies[0].symbol}) ${t.currencies[0].name}</td>
                </tr>
                `
            }
        })
    }
    else if (xhr.readyState === 4 && xhr.status !== 200) {
    alert("Sorry! The request cannot be fulfilled\nReason:" + xhr.statusText);
  }
}

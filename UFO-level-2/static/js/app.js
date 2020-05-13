// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach((ufoData) => {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});

//helper filtering function
function filterData(){
    d3.event.preventDefault();
    tbody.html("");
    var date = d3.select("#datetime");
    var dateValue = date.property("value");
    var city = d3.select("#city");
    var cityValue = city.property("value");
    console.log(cityValue);
    var state = d3.select("#state");
    var stateValue = state.property("value");
    var country = d3.select("#country");
    var countryValue = country.property("value");
    var shape = d3.select("#shape");
    var shapeValue = shape.property("value");
    var newData = data;
    if(dateValue != "") var newData = newData.filter(elem => elem.datetime === dateValue);
    if(cityValue != "") var newData = newData.filter(elem => elem.city === cityValue);
    if(stateValue != "") var newData = newData.filter(elem => elem.state === stateValue);
    if(countryValue != "") var newData = newData.filter(elem => elem.country === countryValue);
    if(shapeValue != "") var newData = newData.filter(elem => elem.shape === shapeValue);
    newData.forEach((ufoData) => {
        var row = tbody.append("tr");
        Object.entries(ufoData).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });
}

var button = d3.select("#filter-btn");
var form = d3.select("#form");

button.on("click", filterData);
form.on("submit", filterData);
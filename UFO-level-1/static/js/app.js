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
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var newData = tableData.filter(elem => elem.datetime === inputValue);
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
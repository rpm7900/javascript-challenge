// from data.js
var tableData = data;

var tbody = d3.select("tbody");
console.log(tableData);

tableData.forEach(function(UFOdata) {
    console.log(UFOdata);
    var row = tbody.append("tr");

    Object.entries(UFOdata).forEach(function([key, value]) {
        console.log(key, value);

        var cell = row.append("td");
        cell.text(value);
    });
});

var filterButton = d3.select("#filter-btn");

filterButton.on("click", function() {    

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    // console.log(inputValue);
    // console.log(tableData);

    tbody.selectAll('*').remove();

    var dataFilter = tableData.filter(tableData => tableData.datetime === inputValue);
    
    dataFilter.forEach(function(UFOdata) {
        var row = tbody.append("tr");
    
    Object.entries(UFOdata).forEach(function([key, value]) {
    // console.log(key, value);    

    var cell = tbody.append("td");
    cell.text(value);
    });
    });
});
    

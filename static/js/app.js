// from data.js
var tableData = data;

var button = d3.selectAll("#filter-btn");

// Get a reference to the table body
var tbody = d3.select("tbody");

//build function to take input data and clears out existing data loops through objects in data and appends through row into tbody

function popTable (data){
    //clear out anything tbody
    tbody.html("")
    data.forEach((d) =>  {
        console.log(d);
        var row = tbody.append("tr");
        Object.values(d).forEach((val) => {
          console.log(val);
          // Append a cell to the row for each value
          // in the weather report object
          let cell = row.append("td");
          cell.text(val);
        });
      });
}

function filterData () {
    var date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    //check to see if a date was entered and filter the data using that date
    if (date){
        filteredData = filteredData.filter(d => d.datetime === date);


    }

    popTable(filteredData);
}


button.on("click", filterData)
popTable(tableData);
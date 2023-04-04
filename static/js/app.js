// import the data from data.js
// declare a  variable, tableData, using const.
const tableData = data;

// point our data to our HTML page. 
//Specifically, we need to tell JavaScript what type of element the data will be displayed in.
//for this example we know the data will be displayed in a "table"


// Reference the HTML table using d3
// D3 is a JavaScript library that produces sophisticated and highly dynamic graphics in an HTML webpage. 
// often used by data professionals to create dashboards, or a collection of visual data (such as graphs and maps)
var tbody = d3.select("tbody");
//          declare varable tobody
//          Use d3.select to tell JavaScript to look for the <tbody> tags in the HTML


// creating a new function.
//      We're building a table, so we'll name the function "buildTable." We'll also pass in "data" as the argument. 
function buildTable(data) {
      // First, clear out any existing data

    tbody.html("");
}

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
data.forEach((dataRow) => {
 //      argument (dataRow) that will represent each row of the data as we iterate through the array.

    let row = tbody.append("tr");
// Append a row to the table body
// using let instead of var to declare the row variable. 
//      That's because this variable is limited to just this block of code.
//      add a table row ("tr").


    // another new function
    Object.values(dataRow).forEach((val) => {
         // Object.values, we're telling JavaScript to reference one object from the array of UFO sightings. 
         // (dataRow) as the argument, we are saying that we want the values to go into the dataRow. 
      let cell = row.append("td");
        //irst create a variable to append data to a table

      cell.text(val);
        //ext line we'll add the values.
      }
    );
  });


  //fully assembled function:
  //data.forEach((dataRow) => {
    //let row = tbody.append("tr");
    //Object.values(dataRow).forEach((val) => {
      //let cell = row.append("td");
      //cell.text(val);
      //}
    //);
  //});


  //With this function, we have done the following:
//      Looped through each object in the array
//      Appended a row to the HTML table
//      Added each value from the object into a cell
// For example, this is the very first object in our array:
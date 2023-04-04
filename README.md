# UFOs

Module 12
 
## Deliverable 1: Filter UFO sightings on multiple criteria

Using JavaScript and HTML, you’ll modify the code in your index.html file to create more table filters. In addition to the date filter you created in this module, you’ll add filters for the city, state, country, and shape, as shown in the following image:

Using JavaScript, you’ll replace the handleClick() function in your app.js file with a new function that saves the element, value, and id of the filter that was changed. Then, you’ll create a new function to loop through the dataset and keep only the results that match the search criteria. The webpage will be updated with the search criteria after pressing "Enter".
Follow the instructions below and the numbered comments in the starter code to complete Deliverable 1.
1.	Download the ufo_starterCode.js, rename it app.js, and place it in the js folder of your UFOs GitHub repository. The starter code includes the code used to populate the table from this module.

2.	In the index.html file, remove the list (<li></li>) element that creates the button.

3.	Create four more list elements: city, state, country, and shape. These will be similar to the "Enter Date" list element.

      •	Each element should have the same "id" as the object properties in the data.js file.

![image](https://user-images.githubusercontent.com/117233641/229926807-f65c3e96-dd1d-4318-bedb-4f49c476d71d.png)

4.	In Step 1 of the app.js file, create an empty filters variable to keep track of all the elements that change when a search is entered. This variable will be used in Step 5 to store the property “id” and the value that was entered from user input.

![image](https://user-images.githubusercontent.com/117233641/229926933-260bca98-3f96-4fa1-85a3-7217164907a6.png)

5.	Next, you will need to write code for two functions whose names we’ve provided in the starter code, updateFilters() and filterTable().
    o	The updateFilters() function will replace your handleClick() function and update the filters variable you created in Step 1.
    o	The filterTable() function will filter the table data by the value that is entered for the "id" that has changed.
    
6.	For Step 2, located before the buildTable(tableData) function at the end of the starter code, modify the event listener from this module so that it detects a "change" on each input element and calls the updateFilters() function.
7.	In Step 3, we’ve provided the function, updateFilters(). Inside this function, you’ll write code in Steps 4-5 to update the filters based on user input.
8.	In Step 4a, create a variable that saves the element that was changed using d3.select(this).
9.	In Step 4b, create a variable that saves the value of the changed element’s property.
10.	In Step 4c, create a variable that saves the attribute of the changed element’s id.
11.	In Step 5, write an if-else statement that checks if a value was changed by the user (variable from Step 4b). If a value was changed, add the element’s id (variable from Step 4c) as the property and the value that was changed to the filters variable you created in Step 1. If a value was not entered, then clear the element id from the filters variable.

![image](https://user-images.githubusercontent.com/117233641/229927065-34e07c3a-b5e5-47df-a6ca-2e6d28845f7f.png)


12.	In Step 6, inside the updateFilters() function, call the filterTable() function that will be used in Step 7.
13.	In the filterTable() function in Step 7, write code to filter the table based on the user input that is stored in the filters variable.

  ![image](https://user-images.githubusercontent.com/117233641/229927290-292684aa-fd38-49f3-b799-ecc2c5b9ee18.png)


14.	In Step 8, create a variable for the filtered data that is equal to the data that builds the table. This variable will hold the updated table data based on the user input.

![image](https://user-images.githubusercontent.com/117233641/229927464-1814e675-ebaa-4a92-8a19-8dd6b00558eb.png)



15.	In Step 9, loop through the filters object and store the data that matches the filter values in the variable created in Step 8.
   
   ![image](https://user-images.githubusercontent.com/117233641/229927548-035cf345-1991-48b4-8a09-4cc392a4636d.png)

16.	In Step 10, rebuild the table with the filtered data by passing the variable created in Step 8.
  
  ![image](https://user-images.githubusercontent.com/117233641/229927971-25313e55-e7ae-4dc2-a780-4a90aef4d75f.png)

17.	Deploy the web app on your GitHub pages.

 ![image](https://user-images.githubusercontent.com/117233641/229928027-7a31a854-5c13-49ee-9305-effb9248a7da.png)



##Deliverable 2: A written report on the UFO analysis (README.md)

Initialize your repository with a README, and write your analysis of Deliverable 1. For your written analysis, be sure to use complete and coherent sentences. Your written analysis should contain three sections, which cover the following:

1.	Overview of Project: Explain the purpose of this analysis.

##Overview

(As captured from Data Bootcamp Module 12) 

JavaScript is a well-established coding language that was designed to enhance HTML. It's the backbone of many popular visualization libraries, such as Plotly, and is often used to create custom dashboards. JavaScript also provides a high level of customization: the dashboards built to deliver visual data, such as maps or graphs, can be as simple or complex as needed.

In this module, as assigned Data Analyst, I will create a table to organize UFO data that is stored as a JavaScript array, or list. This table will have the ability to filter data based on certain criteria and will be created using JavaScript as the primary coding language.

By the end of this module, as assigned Data Analyst I will be able to: 
  •	Explain the strengths and weaknesses of JavaScript "standard" and JavaScript version ES6+.

  •	Describe JavaScript syntax and ideal use cases.

  •	Build and deploy JavaScript functions, including built-in functions.

  •	Convert JavaScript functions to arrow functions.

  •	Build and deploy forEach (JavaScript for loop).

  •	Create, populate, and dynamically filter a table using JavaScript and HTML



##Purpose

(This module is built around a project that mirrors a real-world scenario that would require data analysis and visualization)

In this module, as assigned Data Analyst, I will work with the client, Danna an experienced Data Journalist to create a table to organize UFO data that is stored as a JavaScript array, or list. This table will have the ability to filter data based on certain criteria and will be created using JavaScript as the primary coding language.

Here's a high-level outline of our Basic Project Plan outlining what we plan to achieve:

    •	Create the index.html file.

    •	Create a subfolder to hold the CSS file (style.css).

    •	Create a subfolder for images.

    •	Create a subfolder to hold JavaScript.


2.	Results: Describe to Dana how someone might use the new webpage by walking her through the process of using the search criteria. Use images of your webpage during the filtering process to support your explanation.

As per one-on-one meeting with the client Dana, we defined project goals and deliverables as the following.

    •	To create a dynamic website where End-Users have the ability to filter the data. 

    •	Create a table using JavaScript, and CSS and Bootstrap 

    •	Display a table organizing UFO data stored as a JavaScript array. 

Initial Web site design
 ![image](https://user-images.githubusercontent.com/117233641/229928331-beabefa5-dae7-4099-b623-cab68fba676f.png)


    •	End-Users have the ability to filter the data by: city, state, country, and shape

    •	Filter selection can be broad such as only selecting a country and state like the United States, California.

    •	End-users can further narrow down the results by adding multiple criteria to our filter, to be displayed.

    •	The displayed results are dynamically filtered as end-users updates the form. 

    •	There is no needed Submit or Refresh button as the tables update in real time. 

![image](https://user-images.githubusercontent.com/117233641/229928360-fe839d41-f3a2-4787-8c67-fa011280b496.png)
 

3.	Summary: In a summary statement, describe one drawback of this new design and two recommendations for further development.

##Drawbacks

  •	The filter method is case sensitive, thus requiring correct lower-case spellings and cannot include spaces at the end. This can affect the returned outcome of end-user request if they utilize the wrong case within their respective searches.

##Recommendations 

  •	The Comments Column shows a few erroneous text/ characters. As such, it indicates that the data could be further cleaned. Cleaning, Verifying and Formatting this data would result is a more end-user friendly interface.

  •	Remove case-sensitivity in all the textbox search fields.

  •	Add a [Clear All] button to reset all values input in the filter search.



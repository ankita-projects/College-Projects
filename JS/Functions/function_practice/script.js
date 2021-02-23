/*
  PART ONE 
  1.Create an index.html, and include a script.js upon pageload
 * 2.Content of the script.js should be wrapped within a self-executed anonymous function to avoid polluting the page global scope
 * 3.Add to the index.html a table element with 3 columns and 2 rows, first row is the header row that contains the table headings (studentNo, name, age), second row contains your own studentNo, name, and age
 * 4.Create a function name executeScript. Function executeScript should add a new row to the table that contains a test user studentNo, name, and age (maybe 123, test user name, 999) when called. Remember to invoke executeScript function
 * 5.Move the script.js injection to the header part of your index.html, is your code still working?
 * 6.Update your code so that executeScript only gets invoked when the DOMContentLoaded event is detected. Is the testUser now getting added to the table? Why?
 * >>>>> The HTML document is loaded from top to bottom. If the script is loaded before the HTML document, the script will not be able to find the table element which is why executeScript needs to happen after the DOMContentLoaded.
 PART TWO 
 * Copy the following function which will always return an array of 5 objects containing information of 5 test users to your code, add more if you wanthttps://gist.github.com/bch-fullstack/7bdc2288e1a1b5c6da0cf1674477eed3
 * 2.Create a new function addUser that expects a single object of userInfo as parameter
 * 3.Iterate through the array of 5 users, call addUser on each iteration
 * 4.Add a new function getOldest() that expects an array of userObject as parameter, when getOldest() is called, it iterates through the array of objects, and return the oldest person in the array according to the age, do NOT use .find() or filter() method or array methods
 * 5.Create a new column to the table name isStaff, update your code so that each row in the table will also display an information if the person is a staff or a student. A student always has a non-negative student number, otherwise it is a staff
 * 6.Create a button that will sort the list of users according to their age descendingly and re-render the table with sorted content upon click. Do NOT use .sort() method
 */

(function () {
    const executeScript = () => {
      let table = document.getElementById("table");
      let row = table.insertRow();               // Create <tr> element
      let StudentNo = row.insertCell();          // Create <td> elements
      let Name = row.insertCell();
      let Age = row.insertCell();
      let Staff = row.insertCell();
      StudentNo.textContent = 44;                // Adding values inside the <td> elements
      Name.textContent = "John";
      Age.textContent = 20;
      Staff.textContent = "No";
       
      const addUser = (obj) => {
        let table = document.getElementById("table");  
        let row = table.insertRow();            // Create a new <tr> element
        let StudentNo = row.insertCell();     // Create new <td> elements
        let Name = row.insertCell();
        let Age = row.insertCell();
        let Staff = row.insertCell();
        StudentNo.textContent = obj.studentNo;   // Adding values inside the <td> elements
        Name.textContent = obj.name;
        Age.textContent = obj.age;
        Staff.textContent = obj.studentNo > 0 ? "No" : "Yes";   // If studentno>0 its a student otherwise staff
      };
        let users = inputUsers();
         users.forEach((user) => addUser(user));   //Iterate through the array users, call addUser on each iteration
          const getOldest = (arr) => {               
          let indexOfOldest = 0;
          for (let i = 1; i < arr.length; i++) {      // Iterate through array and compare person age
          arr[i].age > arr[indexOfOldest].age
            ?                                        // If current person is older, save index
              (indexOfOldest = i)
            : "";
        }
        return arr[indexOfOldest];
      };
        const sortTable = () => {                        // Sort users according to age descendingly 
              
        let sortedUsers = inputUsers();             
        let newUsers = [                              
          {
            studentNo: 684,
            name: "Gem",
            age: 16,
          },
          {
            studentNo: 36,
            name: "Jhon",
            age: 18,
          },
        ];
        sortedUsers = sortedUsers.concat(newUsers); 
        for (let i = 1; i < sortedUsers.length; i++) {
                 for (let j = 0; j < i; j++) {
            if (sortedUsers[i].age > sortedUsers[j].age) {
                          const [user] = sortedUsers.splice(i, 1);
                            sortedUsers.splice(j, 0, user);
            }
          }
        }
          console.table(sortedUsers);
  
            while (table.rows.length > 1) {
          table.deleteRow(table.rows.length - 1);
        }
        sortedUsers.forEach((user) => addUser(user));
      };
      let buttonSort = document.getElementById("sort");
      buttonSort.addEventListener("click", sortTable);
    };
  
    window.addEventListener("DOMContentLoaded", (event) => {
      executeScript();
    });
      // function from https://gist.github.com/bch-fullstack/7bdc2288e1a1b5c6da0cf1674477eed3
      const inputUsers = () => [
      {
        studentNo: 123,
        name: "Harry",
        age: 15,
      },
      {
        studentNo: 234,
        name: "Ron",
        age: 16,
      },
      {
        studentNo: 135,
        name: "Hermione",
        age: 15,
      },
      {
        studentNo: -1,
        name: "Snape",
        age: 55,
      },
      {
        studentNo: -1,
        name: "Hagrid",
        age: 65,
      },
    ];
  })();
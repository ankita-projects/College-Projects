window.addEventListener("DOMContentLoaded", () => {
  let table = document.createElement("table");
  table.setAttribute("id", "table");
  let row1 = document.createElement("tr");
  let col1 = document.createElement("th");
  let col2 = document.createElement("th");
  let col3 = document.createElement("th");
  let col4 = document.createElement("th");
  col1.innerHTML = "studentNo.";
  col2.innerHTML = "name";
  col3.innerHTML = "age";
  col4.innerHTML = "isStaff";
  row1.appendChild(col1);
  row1.appendChild(col2);
  row1.appendChild(col3);
  row1.appendChild(col4);
  table.appendChild(row1);
  document.getElementById("root").appendChild(table);

  const executeScript = (studentNo, Name, Age, isStaff) => {
    let row1 = document.createElement("tr");
    let col1 = document.createElement("td");
    let col2 = document.createElement("td");
    let col3 = document.createElement("td");
    let col4 = document.createElement("td");
    col1.innerHTML = studentNo;
    col2.innerHTML = Name;
    col3.innerHTML = Age;
    col4.innerHTML = isStaff;
    row1.appendChild(col1);
    row1.appendChild(col2);
    row1.appendChild(col3);
    row1.appendChild(col4);
    document.getElementById("table").appendChild(row1);
  };

  const getUsers = () => [
    {
      studentNo: 123,
      name: "harry",
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
      age: 17,
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

  const addUser = (userInfo) => {
    let staff = "staff";
    if (userInfo.studentNo > 0) {
      staff = "Student";
    }
    executeScript(userInfo.studentNo, userInfo.name, userInfo.age, staff); // updating HTML with the user object.
  };
  const userList = getUsers(); //getting user array from getUser function
  userList.forEach((element) => {
    //iterating each element of array and adding it to the table.
    addUser(element);
  });

  const getOldest = (users) => {
    let oldestUser = users[0];
    let oldestUserIndex = users[0]; // lets assume first user as the oldest user
    let oldest = users[0].age;
    for (let index = 0; index < users.length; index++) {
      const element = users[index];
      if (oldest < element.age) {
        oldest = element.age;
        oldestUser = users[index];
        oldestUserIndex = index;
      }
    }

    return oldestUser;
  };
  console.log(getOldest(getUsers()));

  const sortTable = () => {
    const table = document.getElementById("table");

    while (table.childNodes.length > 1) {        //for removing rows of table except header
      table.removeChild(table.lastChild);
    }
    const userList = getUsers();                    
    while (userList.length > 1) {
      const oldest = getOldest(userList);              //finding oldest no.
      addUser(oldest);
      userList.splice(userList.indexOf(oldest), 1);    //it will take out the oldest no. n give second largest no.
    }
    addUser(userList[0]);
  };
  document.getElementById("button").addEventListener("click", sortTable);
});

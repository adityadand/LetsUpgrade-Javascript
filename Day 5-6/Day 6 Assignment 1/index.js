let employees = [
{
	name:"Ritesh",
	age:21,
	city:"pune",
	salary:45000,
},
{
	name:"Yashwant",
	age:25,
	city:"mumbai",
	salary:75000,
},
{
	name:"Yosh",
	age:31,
	city:"banglore",
	salary:40000,
},

{
	name:"Rithik",
	age:31,
	city:"chennai",
	salary:60000,
},

{
	name:"anon",
	age:34,
	city:"delhi",
	salary:90000,
},
];




function display(emp_array) {
  let tabledata = "";

  emp_array.forEach(function (employee, index) {
	let currentrow = `<tr>
	<td>${index + 1}</td>
    <td>${employee.name}</td>
    <td>${employee.age}</td>
    <td>${employee.city}</td>
	<td>${employee.salary}</td>
	<td>
    <button onclick='deleteEmployee(${index})'>delete</button>
    <button onclick='showModal(${index})'>update</button>
    </td>
    </tr>`;

	tabledata += currentrow;
  });

  //document.getElementsByClassName("tdata")[0].innerHtml = tabledata;
    document.getElementById("tdata").innerHTML = tabledata;
}



display(employees);


function addEmployee(e) {
	e.preventDefault();
	let employee = {};
	let name = document.getElementById("name").value;
	let age = document.getElementById("age").value;
	let city = document.getElementById("city").value;
	let salary = document.getElementById("salary").value;
	employee.name = name;
	employee.age = Number(age);
	employee.city = city;
	employee.salary = Number(salary);
  
	employees.push(employee);
  
	display(employees);
  
	document.getElementById("name").value = "";
	document.getElementById("age").value = "";
	document.getElementById("city").value = "";
	document.getElementById("salary").value = "";
  }


  function searchByName() {
	let searchValue = document.getElementById("searchName").value;
  
	let newdata = employees.filter(function (employee) {
	  return (
		employee.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
	  );
	});

	display(newdata);
}


  function searchByCity() {
	let searchValue = document.getElementById("searchCity").value;
  
	let newdata = employees.filter(function (employee) {
	  return (
		employee.city.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
	  );
	});

	display(newdata);
}


function deleteEmployee(index) {
	employees.splice(index, 1);
	display(employees);
  }


let updateIndex;

function copyEmployee(index) {
  updateIndex = index;
  let employee = employees[index];

  document.getElementById("upname").value = employee.name;
  document.getElementById("upage").value = employee.age;
  document.getElementById("upcity").value = employee.city;
  document.getElementById("upsalary").value = employee.height;
}

function updateEmployee(e) {
	e.preventDefault();
	let employee = employees[updateIndex];
	console.log(employee);
	let name = document.getElementById("upname").value;
	let age = document.getElementById("upage").value;
	let city = document.getElementById("upcity").value;
	let salary = document.getElementById("upsalary").value;
	employee.name = name;
	employee.age = Number(age);
	employee.city = city;
	employee.salary = Number(salary);
	console.log(employee);
  
	display(employeees);
  
	// code for hiding from anywhere
	let modal = document.getElementsByClassName("modal")[0];
	modal.style.display = "none";
  }

  
function showModal(index) {
	let modal = document.getElementsByClassName("modal")[0];
	modal.style.display = "block";
  
	copyEmployee(index);
  }
  
  function hideModal(event) {
	if (event.target.className == "modal") {
	  let modal = document.getElementsByClassName("modal")[0];
	  modal.style.display = "none";
	}
  }
/**
 * Java script for the representation of data
 */
 

	const student_id = document.createElement("td");
	student_id.innerText ="0";
	const first_Name = document.createElement("td");
	first_Name.innerText="test";
	const last_Name= document.createElement("td");
	last_Name.innerText="testie";
	const dob = document.createElement("td");
	dob.innerText="3.2.1999";
	const gender = document.createElement("td");
	gender.innerText = "male"; 
	const dep = document.createElement("td");
	dep.innerText="math";
	const email_Id =document.createElement("td");
	email_Id.innerText = "test.testie@htw.berlin"
	const doe = document.createElement("td");
	doe.innerText="3.4.2020";
	const tr = document.createElement("tr");
	tr.appendChild(student_id);
	tr.appendChild(first_Name);
	tr.appendChild(last_Name);
	tr.appendChild(dob);
	tr.appendChild(gender);
	tr.appendChild(dep);
	tr.appendChild(email_Id);
	tr.appendChild(doe);
	
	
    document.getElementById("StudentTable").appendChild(tr);
	


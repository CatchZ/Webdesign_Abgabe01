/**
 * Java script for the representation of data
 */
 
 /**
 test */


const loadJSON =async ()=>
{
    const dataJ = await
        fetch("./student.json")    
    return dataJ.json();
}


function genRow(data) {
	const student_id = document.createElement("td");
	student_id.innerText = data.id;
	const first_Name = document.createElement("td");
	first_Name.innerText = data.first_Name;
	const last_Name = document.createElement("td");
	last_Name.innerText = data.last_Name;
	const dob = document.createElement("td");
	dob.innerText = data.dob;
	const gender = document.createElement("td");
	gender.innerText = data.gender;
	const dep = document.createElement("td");
	dep.innerText = data.department;
	const email_Id = document.createElement("td");
	email_Id.innerText = data.email_Id;
	const doe = document.createElement("td");
	doe.innerText = data.doe;
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
}
/**
takes an array students and genertes a toble out of it
 */
async function getTab() {
	document.getElementById("StudentTable").innerHTML = "";
	const data = await loadJSON();
	data.forEach(function(i) { genRow(i); console.log("hj") });
	}
	
async function genTabDepFilteredIT(filterFunction){
	document.getElementById("StudentTable").innerHTML = "";
	const data = await loadJSON();
	const data2 = data.filter(checkDepIT);
	data2.forEach(function(i) { genRow(i); });
}
async function genTabDepFilteredMath(filterFunction){
	document.getElementById("StudentTable").innerHTML = "";
	const data = await loadJSON();
	const data2 = data.filter(checkDepMath);
	data2.forEach(function(i) { genRow(i); });
}
async function genTabDepFilteredBio(filterFunction){
	document.getElementById("StudentTable").innerHTML = "";
	const data = await loadJSON();
	const data2 = data.filter(checkDepBio);
	data2.forEach(function(i) { genRow(i); });
}

function checkDepIT(element){
	console.log(element);
	return element.department == "IT";
}

function checkDepMath(element){
	console.log(element);
	return element.department == "Math";
}

function checkDepBio(element){
	console.log(element);
	return element.department == "Bio";
}


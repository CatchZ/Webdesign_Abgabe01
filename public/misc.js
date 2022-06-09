/**
 * Utility functions 
 */

/**
 replaces window to students */
function pageToStudents() {
	window.location.replace("./students.html");
}
/**
replaces Window to Admin
 */
function pageToAdmin() {
	window.location.replace("./admin.html");
}

/**
replaces window to Staffs */
function pageToStaffs() {
	window.location.replace("./staffs.html");
}
/**
toggle Form */
function toggleForm() {
	var x = document.querySelector(".form")
	toggle(x);
}
/**
toggle dropdown */
function toggle_dropdown() {
	var x = document.querySelector(".dropdown-content")
	toggle(x);
}

/**
toggle element
x = display element
 */
function toggle(x) {
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

function validateDate() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
function validate() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
function makeDOE() {

}
function isNotToday(Date) {}
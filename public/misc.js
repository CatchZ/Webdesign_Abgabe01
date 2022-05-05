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

function toggleForm(){
	var x = document.querySelector(".form")
if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
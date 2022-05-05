/**
 * administrate login  
 */


/**
accepted username
 */
const username = "Admin";
/**
accepted password */
const password = "Admin";

const login_attemps = null;


if (sessionStorage.getItem(login_attemps) === null) window.sessionStorage.setItem("login_attemps", "0");


/**
checks loggin if for then 3 unsuccesfull diable login
 */
function logincheck() {
	var name = document.getElementById("AdminName").value;
	var pass = document.getElementById("AdminPsw").value;
	var counter = parseInt(sessionStorage.getItem("login_attemps"))

	if (name == username && pass == password) {
		console.log("Bla")
		window.location.replace("./public/admin.html")

	} else {
		if (counter == 3) {
			alert("You exided max login attemps,Login Disabeld");
			document.getElementById("AdminLogin").disabled = true;
			document.getElementById("AdminName").disabled = true;
			document.getElementById("AdminPsw").disabled = true;
		} else {
			counter = counter + 1;
			alert("login failed" + (3-counter)+"attemps left");
			sessionStorage.setItem("login_attemps", counter);
		}
	}

}

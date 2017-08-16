console.log("login.js loaded");

let userLogin = {userName: "Jevell", password: "Rollins"};

let passwordInput;

let  loggedIn = false;
let logger = function () {
while (!loggedIn){
	passwordInput = prompt("Please, enter password for user " + userLogin.userName + ".");
	if (passwordInput === userLogin.password){
		console.log("Passwords match!");
    loggedIn = true;
	} else {
		console.log("Passwords do not match. Try Again! Attempts pass 3 will log your account");
	}
}
};
logger();

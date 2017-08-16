console.log("security_questions.js loaded");
let securityQuestions = [
	{
		question: 'What is the name of the GA instructor',
		expectedAnswer: 'Michelle'
	}, 

	{
		question: ' How many weeks is the course',
		expectedAnswer: 12
	}, 
	{
		question: 'What time does class start',
		expectedAnswer: 9
	},
	{
		question: ' What is the color of the GA logo',
		expectedAnswer: 'red'
	}


];
userInput = '';

let coolQ = function () { 
for ( let i = 0; i < securityQuestions.length; i++ ){
	userInput = prompt(securityQuestions[i].question);
	if ( userInput !== securityQuestions[i].expectedAnswer ) {	
		alert('Wrong answer try again ');	
		}
	}
};

coolQ();
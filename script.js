//JavaScript exercise #1

var stringValue = prompt("Please enter a number between 1 and 100");
var num = parseInt(stringValue);
var total = 0;
document.write("You entered: " + num + "<br/>")

for ( num; num >=0; num--){
	console.log(num)
	total = total + num;
}
document.write("The total is: " + total);
console.log(total);

//JavaScript exercise #2

var totalAnswer = ""; 
var yes = true;
var no = false;
var space = " ";

var initGame = prompt("Do you want to play a game?", "yes or no");
console.log(initGame);

if(initGame == "yes") { 

	do{	
	
	var answer = prompt("Please enter a single word");
	
	totalAnswer = totalAnswer + answer + space ;
	
	var play = prompt("Do you want to play again?", "Enter yes or no");
	
	}while (play == "yes");  
	console.log(totalAnswer); 
	alert("You said: "+ totalAnswer);
	
	}
else {
	alert("Try again later!");
	
}

//JavaScript Exercise #3

var totalName = ""; 
var yes = true;
var no = false;
var i = "!";

var initWhile = confirm("Would you like to print your name?");
console.log(initWhile);

if(initWhile == true) {
	
	var name = prompt("Enter your first name");
	console.log(name);
	document.write(name + "<br/>");
	
	while (initWhile == true)  
	{  
	console.log("Hello, My name is " + name);
	document.write("Hello, My name is " + name + "<br/>");  
	name += i;  
	var initWhile = confirm("Would you like to print this again?");
	} 
	console.log("Hello, My name is " + name);
	document.write("Hello, My name is " + name);
}
else{
	alert("try again later");
	
}

//JavaScript exercise #4

//JavaScript exersise #4

var timeDay = prompt("What time of day will you be eating?", "morning, noon, night"); 

if(timeDay == "morning"){  
console.log (timeDay);  
console.log ("Since it is " +timeDay +" , you should eat eggs and toast" );
}  
else if(timeDay == "noon"){  
	console.log (timeDay);  
	console.log ("Since it is " +timeDay +" , you should eat a salad" );
	}  
	else if(timeDay == "night"){
		console.log("Since it is " +timeDay +" , you should eat chicken and rice" );
		}
		else{
			console.log("Check your spelling, try again")
			alert("Check your spelling, please try again")
			}
 

 

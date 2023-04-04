/**
 * CONTROL FLOW
 * 
 * 0: Control flow is the order in which statements are evaluated and executed. Code would be read from the first 
 * line to the last line, except that there are many structures that tell the computer to read the code in a different order. 
 * Such statements include conditional statements which include if, else-if, else; loops; and switch statements, 
 * 
 * 1: If: if statements introduce a condition that, if met, causes some conditional code to run. If the condition is not 
 * met, then the subsequent conditional code is not read. 
 * 
 * 2: Else-if: If the initial if statement condition is not met, then there can be a subsequent, else-if statement. There can 
 * be mulitple else-if statements. An if statement does not necessarily need an else-if statement. 
 * 
 * 3: Else: An else statement is the final conditional statement. It runs its code if none of the above conditional statements were met.
 * An if statement does not necessarily need an else statement. 
 * 
 * 4: Switch: A switch statement contains multiple code blocks to be run dependent on the case. It is similar to an if statement
 * with else-if statements attached. 
 * 
 */
//1// If
function greeting(name, hour){ //this function takes inputs of a name and an hour and prints one of three different greetings 
//based on time of day, which is represented by the hour input.
if (hour > 3 && hour < 12){ //if the hour passed into hour function is greater than 3 and less than 12, then the function prints a good morning greeting,
    console.log ('Good morning ' + name + '!')
} //if that condition isn't met, then we proceed to a new condition:
//2// Else-if (code continues from above)
else if (hour >= 12 && hour <= 4){ //if the hour is between noon and 4, then we print an afternoon greeting
    console.log ('Good afternoon ' + name + '!')
}
//3// Else (code continues from above)
else{console.log('Good evening ' + name + '!')} //if none of the above conditions are met, then by default we print an evening greeting.
}

//4// Switch 
switch (new Date().getMonth()) {
    case 0: 
        month = "January"; //if getMonth returns 0, this switch statement will return "January." 
        break; //If not, it will go to the next case
    case 1:  
        month = "February"; //if getMonth returns 1, this switch statement will return "February."
        break;
    case 2:
        month = "March";
        break;
    case 3:
        month = "April";
        break;
    case 4:
        month = "May";
        break;
    case 5:
        month = "June";
        break;
    case 6:
        month = "July";
        break;
    case 7:
        month = "August";
        break;
    case 8:
        month = "September";
        break;
    case 9:
        month = "October";
        break;
    case 10:
        month = "November";
        break;
    case 11:
        month = "December";
    default: "That's not a month" //although our getMonth function should only return numbers 0 - 11 and thus a default statement 
    //is not needed, it can optionally be used to tell the computer what to do if none of the conditional cases are met 

}
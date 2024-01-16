// function calendar(firstWeekDay, month, numberOfDays) {
//     const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//     let currentWeekDay = firstWeekDay - 1; 
//     let currentDate = 1;
    
//     for (let day = 1; day <= numberOfDays; day++) {
//         process.stdout.write(weekdays[currentWeekDay] + " " + currentDate + "." + month + ".");
        
//         currentDate++;
//         currentWeekDay = (currentWeekDay + 1) % 7; 
//     }
// }


// calendar(1, 2, 28);

// function calendar(startDay, startDate, endDate) {
//   const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
//   // Adjust the starting index based on the startDay provided (1 for Monday, 7 for Sunday)
//   let dayIndex = startDay - 1; // Since array indices start from 0 in JavaScript
//   let calendarOutput = "";

//   // Generate the dates for the calendar
//   for (let date = startDate; date <= endDate; date++) {
//     calendarOutput += `${days[dayIndex]} ${date}.`;
    
//     // Add a new line if the current day is Sunday, else add a space
//     if (dayIndex === 6) { // Sunday is the last day of the week
//       calendarOutput += "\n";
//       dayIndex = 0; // Reset to Monday
//     } else {
//       calendarOutput += " ";
//       dayIndex++; // Move to the next day
//     }
//   }

//   return calendarOutput.trim();
// }

// console.log(calendar(1, 2, 28));


// function calendar(firstWeekDay, month, numberOfDays) {
//     const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//     let currentWeekDay = firstWeekDay - 1; 
//     let currentDate = 1;
    
//     for (let day = 1; day <= numberOfDays; day++) {
//         process.stdout.write(weekdays[currentWeekDay] + " " + currentDate + "." + month + ".");
        
//         currentDate++;
//         currentWeekDay = (currentWeekDay + 1) % 7; 
//         if (weekdays[currentWeekDay] === "Monday") {
//             process.stdout.write("\n"); // Newline for a new week
//         }
//     }
// }


// calendar(1, 2, 28);



function getImportantInformation(text){
    let start = text.indexOf("*IMPORTANT") + 11;
    let end = text.indexOf("*", start);
    return text.substring(start, end);
}
console.log(getImportantInformation("Lorem ipsum **IMPORTANT This is the important message* dolor sit amet"));

let text = "Lorem ipsum **IMPORTANT This is the important message* dolor sit amet"
console.log(text.indexOf("*IMPORTANT") );
console.log(text.indexOf("*", 24) );
console.log(text.substring(24, 53));

function censorA(text){
    let search = /[aA]/g;
    return text.replace(search, "*");
}
console.log(censorA("Meija"));
console.log(censorA("JavaScript is fun"));



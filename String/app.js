//STRING METHODS//
// Task_1 Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var firstName = prompt("Enter your name ");
// var lastName = prompt("Enter your  last name ");

// var title = firstName + " "+ lastName;
// console.log(title)


///////***************************************** *////////////////////

// Task _2 . Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var mobileModel = prompt("Enter your mobile phone model");
// var len = mobileModel.length;
// console.log("your mobile phone model length is " + len) 


///////***************************************** *////////////////////

// Task _2 . Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// var country = "pakistani";
// console.log(country.indexOf('n'));


///////***************************************** *////////////////////

// Task 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser

// var country = "Hello World";
// console.log(country.lastIndexOf('l'));

///////***************************************** *////////////////////
// Task 5. 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// var country = "pakistani";
// console.log(country.charAt(3));


///////***************************************** *////////////////////
//Task-6. Repeat Q1 using string concat() method.

// var firstName = prompt("Enter your name ");
// var lastName = prompt("Enter your  last name ");

// var title = firstName.concat(lastName);
// console.log(title)

///////***************************************** *////////////////////
//  Task -7 Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var word = "Hyderabad";
// for(var i = 0 ; i < word.length; i++){
//         var myWord = word.slice(i,i+5);
//         if(myWord == "Hyder"){
//             word = "islam" + word.slice(i+5)
//            console.log(word)
//         }
// }


///////***************************************** *////////////////////
//  Task -8 Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

// var message = "Ali and Sami are best friends. They play cricket and football together"
// for(var i= 0; i < message.length; i++){
//     var myWord = message.slice(i,i+3);
//     if(myWord == "and"){
//         message = message.slice(0,i) + "&" + message.slice(i+3);
//         console.log(message)
//     }
// }

///////***************************************** *////////////////////
//  Task -9 Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
// var stringValue = "472";
// var numbertype = Number(stringValue)
// console.log(numbertype);
// console.log(typeof(numbertype))


//  Task -10 Write a program that takes user input. Convert and show the input in capital letters.

// var inputUser = prompt("Enter a Number");
// console.log(inputUser.toUpperCase())

// Task 11. Write a program that takes user input. Convert and show the input in title case.
// var inputUser = prompt("Enter a Number");
// var upperWord = inputUser.charAt(0).toUpperCase() + inputUser.slice(1);   
// console.log(upperWord)

// 12. Write a program that converts the variable num to
// string.

// var numberValue = 35.36;
// var numberStringCon = numberValue.toString()
// var arr = numberStringCon.split(".")
// var removredDotedValue = arr[0] + arr[1];
// console.log(removredDotedValue)

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .


// var userValue = prompt("Enter a number");

// var flag = false;

// while(flag == false){
//     for(var i = 0; i < userValue.length; i++){
//         if(userValue.charAt(i) == "@" || userValue.charAt(i) == "." || userValue.charAt(i) == ","  || userValue.charAt(i) == "!" ){
//             console.log("word Found")
//             userValue = prompt("Kindly Enter a Valid value ")
//             flag = false;
//         }
//         else{
//             flag = true;
//         }  
//     }
// }
// console.log(userValue)

// // 14 A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability

// var food = ["cake","apple pie", "cookie", "chips","patties"];
// var myFood = prompt("Search your food")

// for(var i= 0 ; i < food.length; i++){
//     if(food[i] == myFood){
//         console.log("Word Found at index", i)
//         break
//     }
//      else{
//          if(i == 4){
//             console.log("Try again")

//          }
//     }
// }


// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

//Confusion in Question Number 15


// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;


// var university = "University of Karachi";
// var arr = university.split("");
// console.log(arr)

// var userValue = prompt("Enter yur numner")
// var arr = userValue.split("");
// console.log(arr[arr.length -1])


// 18 You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// var sentence = "the quick brown fox jumps over the lazy dog";
// var count = 0;
// for(var i = 0; i < sentence.length; i++){
//         var occurence = sentence.slice(i,i+3);
//         if(occurence == "the" || occurence == "The" ){
//             count++;
//         }
// }
// console.log("The are ", count)
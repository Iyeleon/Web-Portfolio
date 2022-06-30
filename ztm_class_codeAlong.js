// function checkDriverAge(age){
//     console.log(age)

//     if (Number(age) < 18) {
//         console.log("Sorry, you are too yound to drive this car. Powering off");
//     } else if (Number(age) > 18) {
//         console.log("Powering On. Enjoy the ride!");
//     } else if (Number(age) === 18) {
//         console.log("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// }

// checkDriverAge(25)


// var checkDriverAge2 = function(age){

//     if (Number(age) < 18) {
//         console.log("Sorry, you are too yound to drive this car. Powering off");
//     } else if (Number(age) > 18) {
//         console.log("Powering On. Enjoy the ride!");
//     } else if (Number(age) === 18) {
//         console.log("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// }
// checkDriverAge2(44)

// {
//     username:'dami', 
//     password:'mypassword'
// }
// var database = [
//     {
//         username:'dami',
//         password:'mypassword'
//     }
// ]
// var newsfeed = [
//     {
//         username:"one", 
//         timeline:"I have timeline one"
//     },
//     {
//         username:"two", 
//         timeline:"I have timeline two"
//     },
//     {
//         username:"three", 
//         timeline:"I have timeline three"
//     }
// ]

// //for loop
// var todo = [
//     'clean room',
//     'brush teeth',
//     'exercise',
//     'study javascript', 
//     'eat healthy'
// ]

// //create the forloop
// for (var i=0; i<todo.length; i++){
//     //for to start a loop
//     //first part is starting index
//     //semi colon to end expression
//     //second is to check index against the range or list length
//     //third is to increase the index
//     console.log(i)
// }

// //while loop
// var counter=0
// while(counter<10){
//     console.log(counter);
//     counter++;
// }

// //do loop, also called do-while loop
// var counterTwo=10
// do {
//     console.log(counterTwo)
//     counterTwo--
// } while (counterTwo>0)

// while loop checks the condition first, 
//however, the do-while loop does the action first and checks the condition afterwards.


//forEach is a method you add to an iterable that takes a function as an argument

// function logTodos(item, i){
//     console.log(item, i)
// }

// todo.forEach(logTodos)
// todo.forEach(function(i){
//     console.log(i)
// })

//DOM Manipulation

//DOM Selectors

// var button = document.querySelector('button')
// button.addEventListener('click', function(){
//     console.log('CLICK!!!')
// });
// button.addEventListener('mouseenter', function(){
//     console.log('MOUSEENTER!!!')
// });
// button.addEventListener('mouseout', function(){
//     console.log('MOUSEOUT!!!')
// });
// button.addEventListener('mouseover', function(){
//     console.log('MOUSEOVER!!!')
// });


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
//---------------------------------------------------------------------------------------------//
// Question 1: Clean the room function: 
// given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
// make a function that organizes these into individual array that is ordered. 
// For example answer(ArrayFromAbove) should return: 
// [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
// Bonus: Make it so it organizes strings differently from number types. 
// i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const roomCleaner = (arr) => {
    const sorted = arr.sort((a,b)=>a-b); //sort the array, using a custom sorter function
    const set = new Set(sorted) //create a set of unique elements in the array for comparison to filter
    let collect = []; //create an empty array to receive filtered elements

    //create a nested function that:
    // - takes an arg(element) (from the forEach() method)
    // - passes it into another function(arrElement) that takes an arg(element2) from the filter() method
    //and compares if both elements are same
    // - uses the arrElement function to filter the sorted list using the filter() method...
    //... pushed the resurt of each sorted.filter() call into the global 'collect' array  
    function filter2(element){  
        //create arrElement Function    
        function arrElement(element2){
            return element2 === element
        }
        //push the sorted.filter() calls to the collect list
        //expand lists of length === 1 using ternary expression
        const filt = sorted.filter(arrElement, element)
        collect.push(filt.length>1? filt:filt[0]);//ternary expression
        // console.log(collect)       
        return collect
    }

    //make the forEach call on filter2 function
    set.forEach(filter2);
    return collect
}

let n = [2, 3, 5, 2, 2, 4, 1, 1, 'nn', 9, 'nn', 'br', '5', 6, '5'];

roomCleaner(n)

// Question 2: Write a javascript function 
// that takes an array of numbers and a target number. 
// The function should find two different numbers in the array that, 
// when added together, give the target number. 
// For example: answer([1,2,3], 4)should return [1,3]

const findMyArgs = (a,b)=>{
    let c = [];//initiate an empty list

    //for every num in the array a, make a num pair of every other num...
    //....sort each num pair and add them to the empty array c
    a.forEach(e => {a.forEach(e2 => c.push([e, e2].sort()))})

    //filter the array c to remove any pair that does not add up to b
    s = c.filter((e)=>{return (e[0]+e[1]) === b})

    let n = {} //initiate an empty object

    //add each item into the object n as a key and value....
    //...this allows duplicates overwrite
    s.forEach(e=> n[(JSON.stringify(e))] = e)

    return Object.values(n)//return the values of the object n in an array
}

findMyArgs([1,2,2,3,5],4)

// Question 3: Write a function that converts HEX to RGB. 
// Then Make that function auto-dect the formats so that 
// if you enter HEX color format it returns RGB and 
// if you enter RGB color format it returns HEX.

const rgbhexConverter= (color)=>{

    const rgbHex = color =>{
        let hex='#'
        color.forEach(e =>hex += e.toString(16))
        return hex
    }

    const hexRGB = color=> {
        color = color.slice(1);
        color = color.match(/.{1,2}/g)
        let newColor=[];
        color.forEach(e=> newColor.push(parseInt(e,16)))
        return newColor
    }
    let finalColor;
    typeof(color)==='string'?  finalColor=hexRGB(color) : finalColor=rgbHex(color);
   return finalColor
}

rgbhexConverter([255,200,255])
rgbhexConverter('#6cf542')

//.toUpperCase()


//navbar change
// const nav = document.querySelector('#navbar');
// console.log(nav)


//Landing page animation
//transition 1



// function landingSeries(){
//     let grid = document.querySelector("#lndn-grd")
//     let logo = document.querySelector(".lndn-ctr");
//     let top = document.querySelector(".top")
//     let text = document.querySelector(".mid")
//     // let explore = document.querySelector(".btm")

//     text.style.display = 'none'
//     logo.style.gridTemplateColumns='1fr'
//     logo


    

//     function displayText(){
//         // explore.style.gridColumn= "span 2"
//         logo.style.gridTemplateColumns='1.75fr 1fr'
 
//         logo.style.transition = "all 2s linear 4s"

//         // logo.style.backgroundColor = 'red'
//         setTimeout(()=>{
//             text.style.display = 'flex';
//             // explore.style.display = 'flex'
//         }, 1000)
//         grid.style.maxWidth='75%'
//     }

//     // displayText()

//     setTimeout(displayText, 2000)
    

    
//     console.log(logo)
//     console.log(text)
//     // console.log(explore)

// }

// landingSeries()


let index = 0;
let mtn = document.querySelector('.mid').children
console.log(mtn)
console.log(mtn.length)
// await setTimeout(()=>{
//     console.log('is this executing')
//     mtn[0].setAttribute('class', '')}, 5000)
// // setTimeout(()=>{}, 3000) 
textSlides()

function textSlides(){
    console.log('executing inside function')

    for(i=0; i<mtn.length; i++){
        mtn[i].setAttribute('class', '');
        mtn[i].style.display = 'none'
        }; 
    if (index >= mtn.length){
        index = 0;
    };
    // console.log(index)
    // console.log(mtn[index].innerHTML)
    mtn[index].setAttribute('class', 'is_visible');
    mtn[index].style.display='block'
    index++

    setTimeout(textSlides, 4500)


    // if (index === mtn.length){
    //     setTimeout(textSlides, 4500)
    // }
    // else{
    //     setTimeout(textSlides, 3500)
    // }
    
    
    // console.log('waiting for two seconds')
}





// // function anim(){
// //     let mtn = document.querySelector('#mtn_txt').children
// //     // console.log(mtn)
// //     // console.log(typeof(mtn))
// //     // console.log(mtn.length)
// //     // console.log(mtn[0].classList)

    
// //     function wait(duration) {
// //         new Promise((resolve)=>{
// //             setTimeout(()=>{
// //                 console.log('inner waiting for 2 seconds');
// //                 resolve('yes')}, duration)})
// //     }

//     // async function move(){
//     //     for (i=0; i<mtn.length; i++){
//     //         console.log(`This is iteration ${i}`);
//     //         mtn[i].setAttribute('class','is_visible')
//     //         console.log(mtn[i].className)
//     //         await wait(5000)
//     //         mtn[i].setAttribute('class','is_hidden')
//     //         console.log(mtn[i].className)
//     //         // await setTimeout(toggleAnimation(mtn[i], 'is_hidden'), 2000)
            
//     //         // mtn[i].setAttribute('class','is_hidden')
//     //         // console.log(mtn[i])

//     //         // await setTimeout(toggleAnimation(mtn[i], 'is_visible'), 2000)
//     //         // await setTimeout(toggleAnimation(mtn[i], 'is_hidden'), 1000)
//     //     //     (function(){
//     //     //         toggleAnimation(mtn[i], 'is_hidden')
//     //     //         // mtn[i].setAttribute('class', '')
//     //     //         // console.log(mtn[i].className)
//     //     //     })()

//     //     }
//     // }
//     // move()
//     // setInterval(move, 10000)
    


//     // // let count = 0
//     // function hid_vis(e){
//     //     console.log(e)
//     //     let cls = e.getAttribute('class')
//     //     if(cls.includes('is_hidden')){
//     //         e.setAttribute('class', cls.replace('is_hidden', 'is_visible'))
//     //     }
//     //     else if(cls.includes('is_visible')){
//     //         e.setAttribute('class', cls.replace('is_visible', 'is_hidden'))
//     //     }
//     // }

//     // function doNothing(){
//     //     console.log('waiting')
//     // }

//     // function move() {
//     //     console.log('is this working')
//     //     console.log(typeof(mtn))
//     //     for(i=0; i<mtn.length; i++){
//     //         hid_vis(mtn[i])
//     //         setTimeout(doNothing, 5000)
//     //     }
//     //     // mtn.forEach(hid_vis)
//     //     // elem.style.transform = 'translate(0, -10px)';
//     // }




    
//     // for(i=0; i<mtn.length; i++){
//     //     mtn[i].style.opacity = 0.5
//     //     // mtn[i].style.transition = transform 
//     //     // mtn[i].style.transitionProperty = opacity
//     //     // mtn[i].style.transitionDuration = 2
//     // }
// }
// anim()



// // for(i=0; i<mtn.length; i++){
// //     mtn[i].style.opacity = 0.5
// //     // mtn[i].style.transition = transform 
// //     // mtn[i].style.transitionProperty = opacity
// //     // mtn[i].style.transitionDuration = 2
// // }

//Slideshow
// let slides = document.querySelectorAll('.slide');
// console.log(slides)
// console.log(typeof(slides))

// //1. get slide



//arrow UI functions
const arrowFill = (e)=>{
    e.target.style.backgroundColor= '#ffffff35'
    e.target.children[0].style.stroke = 'black'
    e.target.style.border='none'
    e.target.style.cursor='pointer'
}

const arrowEmpty = (e)=>{
    e.target.style.backgroundColor='black'
    e.target.children[0].style.stroke = 'white'
    e.target.style.border='1px solid #ffffff20'
    e.target.style.cursor='default'
}
//arrow button hover
let arrowLeft = document.querySelector("#left");
let arrowRight = document.querySelector("#right")

//On mouse over/out
arrowLeft.addEventListener('mouseenter', arrowFill, 'False');
arrowLeft.addEventListener('mouseleave', arrowEmpty, 'False');

arrowRight.addEventListener('mouseenter', arrowFill, 'False');
arrowRight.addEventListener('mouseleave', arrowEmpty, 'False');


//on mouseclick


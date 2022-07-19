//navbar change
// const nav = document.querySelector('#navbar');
// console.log(nav)


//Landing page animation
let index = 0;
let mtn = document.querySelector('#mtn_txt').children
console.log(mtn)
// console.log(mtn.length)
textSlides()

function textSlides(){ 
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
    if (index === mtn.length){
        setTimeout(textSlides, 3500)
    }
    else{
        setTimeout(textSlides, 3500)
    }
    
    
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


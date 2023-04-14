const slide=document.querySelectorAll('.slide');
let prev=document.querySelector('.prev')
let next=document.querySelector('.next')
var count=0;

slide.forEach((im,index)=>{
    im.style.left=`${index*100}%`
})

const slideImage=()=>{
    slide.forEach((im)=>{
        if(count<slide.length){
        im.style.transform=`translateX(-${count*100}%)`
        }
        else{
            count=-1;
        }
    })
}

prev.addEventListener('click',()=>{
    count--;
    slideImage()
})

next.addEventListener('click',()=>{
    count++;
    slideImage()
})


const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


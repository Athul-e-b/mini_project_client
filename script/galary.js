import {shuffleArray,imageTags} from "../services/galaryImages.js";
document.querySelectorAll('[image]').forEach((elem,index)=>{
    elem.src = shuffleArray()[index].url
})
function createElement(elem){
  return  document.createElement(elem)
}

// console.log(shuffleArray());

function greateGallery(){
  let counter = 0
  let counter2 = 0
  let innerTag1 = null
  let elem1 = null
  let elem2 = null
  let innerTagArray = []
  let outterTagArray = []
  let containerTag = document.createElement('div')
  containerTag.classList.add('row')
  let outerTag =null
  imageTags(['w-100', 'shadow-1-strong', 'rounded', 'mb-4']).forEach((element,index) => {
    if(counter == 0){  
      elem1 = element
    }else if(counter == 1){
      innerTag1 = document.createElement('div')
      innerTag1.classList.add('col-lg-4', 'mb-4', 'mb-lg-0')
      elem2 = element
      innerTag1.append(elem1,elem2)
      innerTagArray.push(innerTag1)
      counter = 0
    }
    counter++
  });
  let outElem1 = null
  let outElem2 = null
  let outElem3 = null
  innerTagArray.forEach(innerTag=>{
    if(counter2 == 0){
      outElem1 = innerTag
    }else if(counter2 == 1){
      outElem2 = innerTag
    }else if(counter2 == 2){
      outElem3 = innerTag
      outerTag = document.createElement('div')
      outerTag.classList.add('row', 'mx-5', 'mt-4')
      outerTag.append(outElem1,outElem2,outElem3)
      outterTagArray.push(outerTag)
      counter2 = 0
    }
    counter2++
  })
  outterTagArray.forEach(elem =>{
    containerTag.appendChild(elem)
  })
document.getElementById("root").append(containerTag)
console.log(containerTag);
}

 greateGallery()

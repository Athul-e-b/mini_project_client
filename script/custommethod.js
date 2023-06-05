export function removeItems(elem,duration){
    setTimeout(() => {
      elem.innerHTML = ""
    }, duration);
  }

  export function addItems(elem,item){
      elem.innerHTML = item
  }
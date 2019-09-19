
function breakOut(array, changeValue, stopValue){
  array.forEach(element, i => {
    if(element !== stopValue){
      element = changeValue
    }else{
      break;
    }
  })
}
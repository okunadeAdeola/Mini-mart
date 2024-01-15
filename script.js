// var myArray = ['1, 2, 3, 4, 5, 6, 7']
// myArray.pop()
// myArray
// console.log(myArray);
var array = []

function addItems(){
  if(input.value !== "")  {
    array.push(input.value)
    console.log(array);
    shoq.innerHTML = ''
    for(a=0; a < array.length; a++){
     shoq.innerHTML += `<p>${a+1}.${array[a]}</p>`
    }
    document.getElementById('input').value = ''
    
  } else{
    alert('input the item');
  }
}

function button(){
    if(input.value !== "")  {
        array.unshift(input.value)
        console.log(array);
        shoq.innerHTML = ''
        for(a=0; a < array.length; a++){
         shoq.innerHTML += `<p>${a+1}.${array[a]}</p>`
        }
        document.getElementById('input').value = ''
        
      } else{
        alert('Add something to the input and try again')
      }
}
function button2(){
  // if(input.value !== ''){
    array.shift(input.value)
    console.log(array);
    shoq.innerHTML = ''
        for(a=0; a < array.length; a++){
         shoq.innerHTML += `<p>${a+1}.${array[a]}</p>`
        }
  
   

}
function button3(){

    array.pop(input.value)
    console.log(array);
    shoq.innerHTML = ''
        for(a=0; a < array.length; a++){
         shoq.innerHTML += `<p>${a+1}.${array[a]}</p>`
        }
      }


function button4(){
    array.splice(input.value)
    console.log(array);
    shoq.innerHTML = ''
        for(a=0; a < array.length; a++){
         shoq.innerHTML += `<p>${a+1}.${array[a]}</p>`
        }

}
function button6(){
    var numberOne = (prompt('which item did you want to edit'))
    var numberTwo = (prompt('what did you want to change it to'))
    array.splice(numberOne-1, 1, numberTwo)
   displayarray()
  }
  
  
        


function button5(){
  var numberOne = (prompt('which item did you want to delete'))
  
  if(numberOne > array.length){
    alert('the index does not exist')
  }
  array.splice(numberOne-1, 1)
  displayarray()
}
function displayarray(){
  shoq.innerHTML = ''
        for(a=0; a < array.length; a++){
         shoq.innerHTML += `<p>${a+1}.${array[a]}</p>`
        }
}





var cartoon = ['tender', 'elisha', 'Adey square']

cartoon.map((fo,i)=>{
  console.log(fo,i);
})
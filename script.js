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
    displayarray()
  }  if(input.value !== ''){
    shadow2.style.display = 'block'
    displayarray()
  } 
  
  else{
    setTimeout(() => {
      error.style.display = 'block'
    }, 2000);
  }
  document.getElementById('input').value = ''
  shoq.innerHTML = ''

  for(a=0; a < array.length; a++){
   shoq.innerHTML += `<td style="border: 1px solid blue;">${a+1}</td><td style="border: 1px solid blue; width: 62%; justify-content: center; text-align: center;">${array[a]}</td><td style="border: 1px solid blue; width:75%"><button class="btn btn-danger btn-sm w-50" onclick="del(${a})">Delete</button><button class="btn btn-warning btn-sm mx-1" style="width: 50px;" onclick="edit(${a})">Edit</button></td>
   `
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
    displayarray()
        
      }
       else{
        alert('Add something to the input and try again')
      }
      document.getElementById('push').value = ''
}
function button2(){
  // if(input.value !== ''){
    array.shift(input.value)
    console.log(array);
    shoq.innerHTML = ''
        for(a=0; a < array.length; a++){
         shoq.innerHTML += `<p>${a+1}.${array[a]}</p>`
        }
    displayarray()
  
   

}
function button3(){

    array.pop(input.value)
    console.log(array);
    shoq.innerHTML = ''
        for(a=0; a < array.length; a++){
         shoq.innerHTML += `<p>${a+1}.${array[a]}</p>`
        }
    displayarray()
      }


function button4(){
    array.splice(input.value)
    console.log(array);
    shoq.innerHTML = ''
        for(a=0; a < array.length; a++){
         shoq.innerHTML += `<p>${a+1}.${array[a]}</p>`
    displayarray()
        }

}
function button6(){
    var numberOne = (prompt('which index did you want to edit'))
    var numberTwo = (prompt('what did you want to change it to'))
    array.splice(numberOne-1, 1, numberTwo)
   displayarray()
  }
  
  
        


function button5(){
  var numberOne = (prompt('which index did you want to delete'))
  
  if(numberOne > array.length){
    alert('the index does not exist')
  }
  array.splice(numberOne-1, 1)
  displayarray()
}
function displayarray(){
  shoq.innerHTML = ''
        for(a=0; a < array.length; a++){
          shoq.innerHTML += `<td style="border: 1px solid blue;">${a+1}</td><td style="border: 1px solid blue; width: 62%; justify-content: center; text-align: center;">${array[a]}</td><td style="border: 1px solid blue; width:75%"><button class="btn btn-danger btn-sm w-50" onclick="del(${a})">Delete</button><button class="btn btn-warning btn-sm" style="width: 50px;" onclick="edit(${a})">Edit</button></td>
          `
        }
}


function del(index){
  console.log(index);
  array.splice(index,1)
  shoq.innerHTML = ''
  displayarray()
}

function edit(index1){
  var numberTwo = prompt('what did you want to change it to')
  array.splice(index1, 1,numberTwo)
 displayarray()
}





// var cartoon = ['tender', 'elisha', 'Adey square']

// cartoon.map((fo,i)=>{
//   console.log(fo,i);
// })
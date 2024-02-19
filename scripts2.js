var cart = []
function submit(){
    if(inp.value === ''){
        display.style.display = 'block'
    } else{
        cart.push(inp.value)
       show.innerHTML = inp.value
    }

    document.getElementById('inp').value = ''
}
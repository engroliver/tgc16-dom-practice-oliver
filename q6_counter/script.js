let dec = document.querySelector('#decrement');
let inc = document.querySelector('#increment');
let res = document.querySelector('#reset');
let box = document.querySelector('#box');

box.style.backgroundColor="green"

inc.addEventListener('click', function(){
 
if (box.innerHTML < 10){
    box.innerHTML = parseInt(box.innerHTML) + 1;
}
else{
    box.innerHTML.disable = true
}

if (box.innerHTML % 2 == 0){
    box.style.backgroundColor = 'green';
}
else { 
    box.style.backgroundColor = 'red';
}
})

dec.addEventListener('click', function(){
 
    if (box.innerHTML > 0){
        box.innerHTML = parseInt(box.innerHTML) - 1;
    }
    else{
        box.innerHTML.disable = true
    }
    
    if (box.innerHTML % 2 == 0){
        box.style.backgroundColor = 'green';
    }
    else { 
        box.style.backgroundColor = 'red';
    }
    })


res.addEventListener('click', function(){
    box.innerHTML = 0
    box.style.backgroundColor = 'green'
            
})



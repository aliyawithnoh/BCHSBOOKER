const empty = document.querySelector(".empty");
const events = document.querySelector(".events-contain");
const btn = document.querySelector('button');

function test() {
    if (empty.style.display === 'none') {
        empty.style.display = 'block';  
        events.style.display = 'none';  

    } else {
        empty.style.display = 'none';  
        events.style.display = 'flex'; 
    }
} 

btn.addEventListener("click", test);
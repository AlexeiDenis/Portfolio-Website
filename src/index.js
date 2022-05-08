let btn = document.getElementById('toggler')
let col = document.getElementById('decoration')
let c = true;
console.log("working...??")
btn.addEventListener('click', () => {
    if (c) { col.src = "../imagini/moon.svg"; c = false; } else { col.src = "../imagini/sun.svg"; c = true }


})
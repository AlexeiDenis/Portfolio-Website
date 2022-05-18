let btn = document.getElementById('toggler')
let col = document.getElementById('decoration')
let image = document.getElementById('imgdecor')
let c = true;
let y = true;


image.addEventListener('click', () => {
    if (y) { y = false; image.src = "./imagini/sticker.webp" } else { y = true; image.src = "./imagini/avatar.webp" }
})

btn.addEventListener('click', () => {
    if (c) { col.src = "./imagini/moon.svg"; c = false; } else { col.src = "./imagini/sun.svg"; c = true }
})

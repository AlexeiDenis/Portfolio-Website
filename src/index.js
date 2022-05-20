let image = document.getElementById('imgdecor')
let y = true;

image.addEventListener('click', () => {
    if (y) { y = false; image.src = "./imagini/sticker.webp" } else { y = true; image.src = "./imagini/avatar.webp" }
})


const storageKey = 'theme-preference'

const onClick = () => {

    theme.value = theme.value === 'light'
        ? 'dark'
        : 'light'

    setPreference()
}

const getColorPreference = () => {
    if (localStorage.getItem(storageKey))
        return localStorage.getItem(storageKey)
    else
        return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light'
}

const setPreference = () => {
    localStorage.setItem(storageKey, theme.value)
    reflectPreference()
}

const reflectPreference = () => {
    document.firstElementChild
        .setAttribute('data-theme', theme.value)

    document
        .querySelector('#toggler')
        ?.setAttribute('aria-label', theme.value)
}

const theme = {
    value: getColorPreference(),
}


reflectPreference()

window.onload = () => {

    reflectPreference()

    document.getElementById('toggler').addEventListener('click', onClick)
}


window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', ({ matches: isDark }) => {
        theme.value = isDark ? 'dark' : 'light'
        setPreference()
    })

window.addEventListener('DOMContentLoaded', setup);


function setup() {
    const options = {
        rootMargin: '0px 0px -120px 0px'
    }
    const observ = new IntersectionObserver((intrari, obs) => {
        intrari.forEach(entr => {
            if (entr.isIntersecting) {
                entr.target.classList.add('show');
                // obs.unobserve(entr.target);
            }
            else { entr.target.classList.remove('show'); }
        })
    }, options);
    const h1 = document.querySelectorAll('.aboutMe p');
    h1.forEach(p => observ.observe(p));
}



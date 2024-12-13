const bugger = document.getElementById('bugger')
const nav = document.getElementById('navbar')
const close = document.getElementById('close')

if (bugger) {
    bugger.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}


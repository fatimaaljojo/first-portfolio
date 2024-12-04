const barBtn = document.querySelector('.bars')

const list = document.querySelector('.list')

const login = document.querySelector('.login')

barBtn.addEventListener('click', () => {
    list.style.display = (list.style.display == 'flex') ? 'none' : 'flex';
})

barBtn.addEventListener('click', () => {
    login.style.display = (login.style.display == 'block') ? 'none' : 'block';
})

barBtn.addEventListener('click', () => {

    barBtn.innerHTML = `<img src="./assets/img/1200px-Cross_green_icon.svg.png" alt="">`

})


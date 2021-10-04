const themeBtn = document.getElementById('theme__btn')

themeBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const html = document.querySelector('html')
    if (html.classList.contains('light-theme')) {
        html.classList.remove('light-theme')
        html.classList.add('dark-theme')
        e.target.innerHTML = ' Dark '
    } else if (html.classList.contains('dark-theme')) {
        html.classList.remove('dark-theme')
        html.classList.add('light-theme')
        e.target.innerHTML = ' Light '
    }
})

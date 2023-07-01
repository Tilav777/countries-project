const loaderEl = document.querySelector('.loader')

const loaderToggle = (isLoader)=> {
    if(isLoader) {
        loaderEl.classList.remove('hidden')
    }else {
        loaderEl.classList.add('hidden')
    }
}

export default loaderToggle
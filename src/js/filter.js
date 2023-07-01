const searchFormEl = document.querySelector('.search')
const searchInp = searchFormEl.search

searchInp.addEventListener('input', ()=> {
    const searchValue = searchInp.value.toLowerCase()
    const cardsItem = document.querySelectorAll('.cards__item')
    const cardsTitle = document.querySelectorAll('.cards__title')

    cardsTitle.forEach((title, i)=> {
        if(title.textContent.toLowerCase().includes(searchValue)) {
            cardsItem[i].classList.remove('hidden')
        }else {
            cardsItem[i].classList.add('hidden')
        }
    })


})

import request from "./request"
import { createCountries } from "./updateUI"

const searchSelect = document.querySelectorAll('.search__select-list li')
const searchSelectSpan = document.querySelector('.search__select span')

searchSelect.forEach((li)=> {
    li.addEventListener('click', ()=> {
        searchSelectSpan.textContent = li.textContent

        let filterAPI

        if(searchSelectSpan.textContent === "All") {
            filterAPI = 'https://restcountries.com/v3.1/all'
        }else {
            filterAPI = `https://restcountries.com/v3.1/region/${searchSelectSpan.textContent}`
        }
        request(filterAPI).then((data)=> {
            createCountries(data)
        }).catch((err)=> {
            alert(err.message)
        })
    })
})
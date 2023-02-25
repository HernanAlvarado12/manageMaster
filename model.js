'use strict'
import { manage, sayd } from './data.js'

const saidFrament = document.createDocumentFragment()
const manageFragment = document.createDocumentFragment()
const saidTemplate = document.getElementById('saidTemplate').content
const manageTemplate = document.getElementById('manageTemplate').content 


document.addEventListener('click', event => {
    /**
     * @type {Element}
     */
    const target = event.target
    if(target.matches('#iconMenu')) {
        const menu = document.querySelector('menu')
        menu.classList.toggle('hidden')
        target.setAttribute('src', menu.classList.contains('hidden')? './assets/hamburger.svg' : './assets/close.svg')
    }
})


manage.forEach((manage, index) => {
    try {
        const cloneNode = document.importNode(manageTemplate, true)
        cloneNode.querySelector('span').textContent = `0${index}`
        cloneNode.querySelector('div > p').textContent = manage.title
        cloneNode.querySelector('div + p').textContent = manage.content 
        manageFragment.append(cloneNode)
    } catch (error) {
        console.error(error)
    }
})
document.querySelector('main > section section').append(manageFragment)


sayd.forEach(said => {
    try {
        const cloneNode = document.importNode(saidTemplate, true)
        cloneNode.querySelector('img').setAttribute('src', said.path)
        cloneNode.querySelector('h3').textContent = said.username
        cloneNode.querySelector('p').textContent = said.content
        saidFrament.append(cloneNode)
    } catch(error) {
        console.log(error)
    }
})
document.querySelector('main > section.flex section').append(saidFrament)


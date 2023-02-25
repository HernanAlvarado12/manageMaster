'use strict'
import { manage, sayd } from './data.js'
/**
 * @type {Element}
 */
const manageTemplate = document.getElementById('manageTemplate').content 
const manageFragment = document.createDocumentFragment()
/**
 * @type {Element}
 */
const saidTemplate = document.getElementById('saidTemplate').content
const saidFrament = document.createDocumentFragment()

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
document.querySelector('main > article + section.w-90').append(manageFragment)


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
document.querySelector('main > section.w-90 + section > section').append(saidFrament)
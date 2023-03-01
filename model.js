import { manage, sayd } from './data.js'

const saidFrament = document.createDocumentFragment()
const manageFragment = document.createDocumentFragment()
const saidTemplate = document.getElementById('saidTemplate').content
const manageTemplate = document.getElementById('manageTemplate').content 


let currentIndex = 0
document.addEventListener('click', event => {
    /**
     * @type {Element}
     */
    const target = event.target
    if(target.matches('#iconMenu')) {
        const menu = document.querySelector('menu')
        menu.classList.toggle('hidden')
        target.setAttribute('src', menu.classList.contains('hidden')? './assets/hamburger.svg' : './assets/close.svg')
    }else if(target.matches('section.mt-6.mb-10.flex > div.mb-4 > span')) {
        moveCommentaries(target)       
    }
})

matchMedia('(max-width: 899px)').addEventListener('change', () => {
    document.querySelector('menu').classList.add('hidden')
    document.getElementById('iconMenu').setAttribute('src', './assets/hamburger.svg')
})


/**
 * 
 * @param {Element} target 
 */
const moveCommentaries = (target) => {
    document.querySelector('span.w-1.h-1.border-active').classList.remove('border-active')
    target.classList.add('border-active')
    const commentaries = [...document.querySelectorAll('section.flex.flex-col > section.mt-6.mb-4 article')]
    const index = [...target.parentElement.children].findIndex(node => node === target)
    if(index == currentIndex) {
        return
    }else if(index > currentIndex) {
        commentaries.forEach(node => addClassList(node, index))
    }else {
        commentaries.forEach(commentary => {
            const classList = [...commentary.classList].filter(name => name.match('.translate-x-.'))
            removeClassList(commentary, classList, currentIndex, index)
        })
    }
    currentIndex = index
}



/**
 * 
 * @param {Element} currentNode 
 * @param {Array<String>} classList 
 * @param {Number} currentIndex 
 * @param {Number} index 
 */
const removeClassList = (currentNode, classList,  currentIndex, index) => {
    for(let i = currentIndex; i > index; i--) {
        currentNode.classList.remove(classList.pop())
    }
}


/**
 * 
 * @param {Element} currentNode 
 * @param {Number} index 
 */
const addClassList = (currentNode, index) => {
    for(let i = 0; i < index; i++) {
        currentNode.classList.add(classList(i +1))
    }
}


/**
 * 
 * @param {Number} index 
 * @returns {String} classList
 */
const classList = (index) => {
    return ['-translate-x-0', '-translate-x-[105%]', '-translate-x-[210%]', '-translate-x-[315%]'][index]
}


/**
 * 
 * @param {Element} target 
 */
const findIndex = target => {
    return [...target.parentElement.children].findIndex(node => node == target)
}


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


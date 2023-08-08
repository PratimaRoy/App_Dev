console.log('Pratima Roy')
let myText = document.querySelector('#userName p:nth-child(2)')
myText.style.color = 'red'

document.querySelector('.name1').style.backgroundColor = 'magenta'

/* -- querySelectorAll -- */
let myName = document.querySelectorAll('#userName p')
for(let i = 0; i < myName.length;i++){
    myName[i].style.color='green'
    // change the font size of all odd <p>
    if(i % 2 == 0){
        myName[i].style.fontSize='2em'
    }
}

/* --innerHTML */
let myDiv = document.querySelectorAll('p')[1]
myDiv.innerHTML = 'New text content using <em><b>innerHTML</b></em>'

/* -- classList.add() -- */
document.querySelector('h1').classList.add('subtitle')

/* -- testing parent/siblings/child --*/
let listItem = document.querySelector('li:nth-child(2)')

/*-- creating elements and text -- */
// step 1: create an element
let myPara = document.createElement('p')
// step 2: create a content and append it to the new element
let mySentence = document.createTextNode('This is the text of the new paragraph')
// step 3A: append the text node into the new element
myPara.appendChild(mySentence)
myPara.classList.add('subtitle')
// step 3B: append the new element, with text node, to the document
document.querySelector('div').appendChild(myPara)
/* -- REMOVE ELEMENT --*/
let myItem = document.querySelector('ul')
myItem.removeChild(myItem.lastElementChild)
/* -- EVENTS --*/
let btn = document.querySelector('.btn1')
btn.onclick = function(){alert('Hi There!')}
/* -- example guess a number -- */
let randomNum = function(){
    let radNum = Math.ceil(Math.random()*9)
    return radNum
}
let guessNumDiv = document.querySelector('.guessNumber')
let btnGuess = document.querySelector('.btnGuessNum')

btnGuess.addEventListener('click',function(){
    guessNumDiv.innerHTML=randomNum()
})
/* -- mouse events -- */
let bntMouseEvent = document.querySelector('#bntMouseEvent')
let mouseoutDisplay = document.querySelector('.mouseoutDisplay')
let dblclickDisplay = document.querySelector('.dblclickDisplay')
let mouseoutCounter = 0

bntMouseEvent.addEventListener('mouseout',function(){
    mouseoutCounter++
    mouseoutDisplay.innerHTML = mouseoutCounter
})
bntMouseEvent.addEventListener('dblclick',function(){
    dblclickDisplay.innerHTML += 'click '
})

/* -- window event -- */
let topIcon = document.querySelector('.top')
window.addEventListener('scroll',function(){
    let yPosition = this.scrollY
    if(yPosition>100){
        topIcon.style.display='block'
    }else{
        topIcon.style.display='none'
    }
})

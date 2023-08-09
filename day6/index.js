import React from 'react';
import  ReactDOM  from 'react-dom/client';
import goldiebaby from './images/Goldiebaby.jpeg'
//--FUNCTION--
//content in the app
const App = function(){
    // create a constant variable
    const divText= 'I am a text in a variable'
    //create a style variable
    const styleJSX = {color:'purple', fontFamily:'Algerian'}
    return(
        <div>
        <h1 style={{color:"magenta", textAlign:"center"}}>Welcome to ReactJS</h1>
        <p>Let's be familiar with JSX elements</p>
        <h2>Activity: Bucket List</h2>
        <ol>
            <li>Watch Barbie movie</li>
            <li>Go to work</li>
            <li>Pick up medicine</li>
            <li>Do the groceries</li>
            <li>Travel to Manhattan!</li>
        </ol>
        <h2>Inline Styling</h2>
        <label for="email" style={{color:"olive", padding:"0.5em 1em", fontWeight:'bolder'}}>Enter e-mail</label>
        <input id='email' type='text' placeholder='Type your email' style={{backgroundColor:'rgb(230,230,230)', padding:'0.5em', borderRadius:'0.5em'}}/>
        <button style={{marginLeft:'1em', backgroundColor:'magenta', padding:'0,5em 1em', borderRadius:'0.5em', color:'whitesmoke'}}>Submit Form</button>
        <figure>
            <img src={goldiebaby} style={{width: '50%'}}/>
        </figure>
        <p className='title'>Adding a class name to a JSX element</p>
        <p className='txtVar'>{divText}</p>
        <p style={styleJSX}>{divText}</p>

        <h2>Inline Styling 2</h2>
        
        <figure>
            <img src={goldiebaby}  style={{width: '70%'}}/>
        </figure>

        <h2>Inline Styling 3</h2>
        
        <figure>
            <img src={goldiebaby} style={{width: '80%'}}/>
        </figure>

        </div>
    )
}
//rooting the app
const root =ReactDOM.createRoot(document.querySelector('#root'))
root.render(App())
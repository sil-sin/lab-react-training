import React from 'react'

function Greetings(props) {
    let greet = '';
    switch (props.lang) {
        case 'de':
            greet = 'Hallo';
            break;
        case 'fr':
            greet = 'Bonjour';
            break;
        case 'es':
            greet = 'Hola';
            break;
        case 'en':
            greet = 'Hello';
            break;
        default:
            greet = 'Language not defined';
    }
    console.log(props)
    return (
        <div className='box'>
            <p>{greet} {props.children}</p>
        </div >
    )
}

export default Greetings
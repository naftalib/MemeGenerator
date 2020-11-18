import React from "react"
import img from './imgs/head.jpg'

function Header() {
    return (
        <header>
	            <img 
	                src={img} 
	                alt="Problem?"
	            />
	            <p>Meme <br /> Generator</p>
        </header>
    )
}

export default Header
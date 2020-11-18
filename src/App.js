import React from 'react';
import Header from './Header'
import MemeGenerator from './MemeGenerator'

function App() {
  return (
  	<div className='mainContainer'>
		<div className='header'>
          <Header />
        </div>
	    <div className='memeContainer'>
	     <MemeGenerator />
        </div>
    </div>
    )
}

export default App;

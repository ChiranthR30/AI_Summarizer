import React from 'react'
import './App.css'
import Hero from '/src/components/Hero';
import Demo from '/src/components/Demo';

const App = () => {
  return (
<main>
  <div className='main'>
    <div className="gradient">
      <p>hwllo</p>
    </div>
  </div>
  <div className="app">
    <Hero/>
    <Demo/>
  </div>
</main>
  )
}

export default App

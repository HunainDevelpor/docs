import React from 'react'
import Background from './Components/Background'
import Foreground from './Foreground'

function App() {
  return (
    <div className='w-full h-screen bg-zinc-800 text-blue-800 relative'>
      <Background/>
      <Foreground/>
        </div>
  )
}

export default App
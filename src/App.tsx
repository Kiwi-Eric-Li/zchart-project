import {useState, useEffect} from 'react'

import './App.css'
import Head from './components/Head'
import Box1 from './components/Box1/index.js'
import Box2 from './components/Box2/index.js'
import Box3 from './components/Box3/index.js'
import Box4 from './components/Box4/index.js'
import Box5 from './components/Box5/index.js'
import scale from './utils/index.js'

function App() {
  
  const [state, setState] = useState({scale: 1});

  useEffect(() => {
    setState({
      scale: scale()
    });
    window.addEventListener('resize', () => {
      setState({
        scale: scale()
      })
    })

    return () => {
      window.removeEventListener('resize', () => {
        setState({
          scale: scale()
        })
      })
    }
  }, [])

  return (
    <>
      <div className='app' style={{'transform': `scale(${state.scale}) translate(-50%, -50%)`}}>
        <Head />
        <div className='line1'>
          <Box1 />
          <Box2 />
          <Box3 />
        </div>
        <div className='line2'>
          <Box4 />
          <Box5 />
        </div>
      </div>
    </>
  )
}

export default App

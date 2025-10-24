import {useState, useEffect} from 'react'

import './App.css'
import Head from './components/Head'
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
      </div>
    </>
  )
}

export default App

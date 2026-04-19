import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {motion} from "motion/react"
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <motion.div 
      initial={{
        x:0
      }}
      animate={{
        x: [0,800,800,0,0], //1000
        y: [0,0,300,300,0] //1000 

      }}
      transition={{
        duration:3,
        delay:1,
        // repeat:Infinity, // 2
        // ease:"backIn"
      }}
      className="box"></motion.div>

      <motion.div
      whileHover={{
        backgroundColor:'hotpink'
      }}
      whileTap={{
        scale:0.8
      }}
       className="box">

      </motion.div>
      <motion.div
        drag
        whileDrag={{
          scale:0.8
        }}
        dragConstraints={{
          left:0,
          top:0,
          right:1000,
          bottom:500
        }}
        // dragDirectionLock="true" // if we will use it then the element will be drabble in one direction only at a time
       className="box">

      </motion.div>

      
    </>
  )
}

export default App

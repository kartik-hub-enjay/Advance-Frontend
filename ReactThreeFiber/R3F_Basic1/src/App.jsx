import { useState } from 'react'
import {Canvas} from '@react-three/fiber'
import './App.css'

function App() {
  

  return (
    <>
      <Canvas>
        {/* <directionalLight position={[0,0,2]}/> */}
        <ambientLight/>
        <group position={[0,-1,0]}> {/* Groups the meshesh */}
          <mesh position={[0,1,0]}>
          <boxGeometry args={[1,1,1]}/>
          {/* <meshBasicMaterial/> */}
          <meshStandardMaterial color={"orange"}/>
        </mesh>
        <mesh position={[-2,1,0]}>
          <boxGeometry args={[1,1,1]}/>
          {/* <meshBasicMaterial/> */}
          <meshStandardMaterial color={"orange"}/>
        </mesh>
        </group>
      </Canvas>
    </>
  )
}

export default App

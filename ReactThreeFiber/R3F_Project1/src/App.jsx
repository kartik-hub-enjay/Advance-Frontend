import { useState } from 'react'
import {Canvas} from '@react-three/fiber'
import * as THREE from "three"
import { OrbitControls , useTexture } from '@react-three/drei'
import Scene from './Scene'

function App() {
  

  return (
    <>
      <Canvas camera={{fov:35}}>
        <OrbitControls/>
        <ambientLight/>
        <Scene/>
      </Canvas>
    </>
  )
}

export default App

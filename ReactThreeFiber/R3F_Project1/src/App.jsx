import { useState } from 'react'
import {Canvas} from '@react-three/fiber'
import * as THREE from "three"
import { OrbitControls , useTexture } from '@react-three/drei'
import {Bloom,EffectComposer} from "@react-three/postprocessing"
import Scene from './Scene'

function App() {
  

  return (
    <>
      <Canvas flat camera={{fov:35}}>
        <OrbitControls/>
        <ambientLight/>
        <Scene/>
        <EffectComposer>
          <Bloom
          minmapBlur
          intensity={5.0}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.2}
          />
        </EffectComposer>
      </Canvas>
    </>
  )
}

export default App

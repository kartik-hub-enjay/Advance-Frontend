import { Canvas, useFrame } from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import './App.css'
import { useRef } from 'react'
import { useState } from 'react'

function Box() {
  const boxRef = useRef(null)
  const [isHovered , setIsHovered] =useState(false)
  useFrame((state, delta) => {
    if (boxRef.current) {
      boxRef.current.rotation.x += delta
      boxRef.current.rotation.y += delta
    }
  })

  return (
    <mesh ref={boxRef} onPointerEnter={(e)=>{
      setIsHovered(true)
    }}
    onPointerLeave={(e)=>{
      setIsHovered(false)
    }}>
      <boxGeometry />
      <meshBasicMaterial color={isHovered ? "orange" : "pink"} />
      <OrbitControls enableDamping={true}/>
    </mesh>
  )
}

function App() {
  return (
    <>
      <Canvas>
        <Box />
      </Canvas>
    </>
  )
}

export default App

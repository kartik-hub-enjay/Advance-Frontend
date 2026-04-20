import { Canvas, useFrame } from '@react-three/fiber'
import './App.css'
import { useRef } from 'react'

function Box() {
  const boxRef = useRef(null)
  useFrame((state, delta) => {
    if (boxRef.current) {
      boxRef.current.rotation.x += delta
      boxRef.current.rotation.y += delta
    }
  })

  return (
    <mesh ref={boxRef}>
      <boxGeometry />
      <meshBasicMaterial color="orange" />
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

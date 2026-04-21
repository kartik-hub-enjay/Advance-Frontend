import React, { useRef } from "react";
import {Canvas, useFrame} from '@react-three/fiber'
import { OrbitControls , useTexture } from '@react-three/drei'
import image from "../src/image.png"
import * as THREE from "three"
const Scene = () => {
    let tex = useTexture(image)
    let cylRef = useRef(null)
    useFrame((state,delta)=>{
      cylRef.current.rotation.y += delta
    })
  return (

      <group rotation={[0,1.5,0.5]}>
        <mesh ref={cylRef}>
        <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
        <meshStandardMaterial map={tex} side={THREE.DoubleSide} />
      </mesh>
      </group>
   
  );
};

export default Scene;

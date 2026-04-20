import React from "react";
import {Canvas} from '@react-three/fiber'
import { OrbitControls , useTexture } from '@react-three/drei'
import nike from "../src/nike.png"
import * as THREE from "three"
const Scene = () => {
    let tex = useTexture(nike)
  return (
    
      <mesh rotation={ro}>
        <cylinderGeometry args={[1, 1, 1, 30, 30, true]} />
        <meshStandardMaterial map={tex} side={THREE.DoubleSide} />
      </mesh>
   
  );
};

export default Scene;

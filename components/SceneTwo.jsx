import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Hallway(props) {
  const { nodes, materials } = useGLTF('/model/Pillar2-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Plane.geometry} material={materials['Round Square Floor Tiles']} scale={1.049} />
      <mesh castShadow receiveShadow geometry={nodes.Sphere.geometry} material={materials.Material} />
      <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials.wall} />
      <mesh castShadow receiveShadow geometry={nodes.Cube001.geometry} material={materials['Force ceiling']} />
      <mesh castShadow receiveShadow geometry={nodes.Cube004.geometry} material={materials.Column} />
    </group>
  )
}

useGLTF.preload('/model/Pillar2-transformed.glb')

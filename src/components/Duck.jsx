/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 public/models/duck-duck.glb -o src/components/Duck.jsx -r public 
Author: td991 (https://sketchfab.com/td991)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/duck-duck-98604d4f895b4fc79d880dd427bf3a01
Title: Duck-Duck 🦆
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Duck(props) {
  const { nodes, materials } = useGLTF('/models/duck-duck.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.duckduck2} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.duckduck} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.light} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.water} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.blackedge} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.blackedge} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.blackedge} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.blackedge} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.blackedge} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.lotus} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.lotus} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.lotus} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.lotus} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.lotus_leaf} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.lotus_leaf} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.lotus_leaf} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/duck-duck.glb')

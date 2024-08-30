import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Roman(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/model/scene1-transformed.glb')
  const { actions } = useAnimations(animations, group)

  React.useEffect(() => {
    console.log('Loaded animations:', animations)
  
    const planeAnimation = Object.keys(actions).find(action => action.includes('Plane008'))
  
    if (planeAnimation) {
      console.log('Playing animation:', planeAnimation)
      actions[planeAnimation].play()
    } else {
      console.warn('No animation found for Plane008')
    }
  }, [actions, animations])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh castShadow receiveShadow name="defaultMaterial005" geometry={nodes.defaultMaterial005.geometry} material={materials.assetwin} position={[32.144, 1.785, -69.076]} rotation={[Math.PI, -0.83, Math.PI]} scale={[156.903, 73.806, 73.806]} />
        <mesh castShadow receiveShadow name="Artemis" geometry={nodes.Artemis.geometry} material={materials['AssetRoman2.002']} position={[1.669, -5.949, 3.899]} rotation={[Math.PI / 2, 0, 0.594]} scale={2.289} />
        <mesh castShadow receiveShadow name="ClassicColumnCapC_LOD_0006" geometry={nodes.ClassicColumnCapC_LOD_0006.geometry} material={materials['pillarOne.001']} position={[-19.244, 12.14, -60.597]} rotation={[Math.PI / 2, 0, 1.48]} scale={1.999} />
        <mesh castShadow receiveShadow name="Cube003" geometry={nodes.Cube003.geometry} material={materials.Stair} position={[-0.259, -11.522, -44.439]} scale={[7.322, 4.736, 10.605]} />
        <mesh castShadow receiveShadow name="Cube006" geometry={nodes.Cube006.geometry} material={materials['sandstone_cracks.002']} position={[34.8, 16.002, -72.477]} rotation={[0, -0.743, 0]} scale={4.381} />
        <mesh castShadow receiveShadow name="Sphere002" geometry={nodes.Sphere002.geometry} material={materials['assetwin.001']} position={[19.517, 4.816, -74.519]} rotation={[0, -0.462, 0]} scale={0.862} />
        <mesh castShadow receiveShadow name="Wall_Lion001" geometry={nodes.Wall_Lion001.geometry} material={materials.lio} position={[0.328, 13.74, -78.187]} scale={[5.672, 5.345, 5.345]} />
        <mesh castShadow receiveShadow name="Cube007" geometry={nodes.Cube007.geometry} material={materials['sandstone_cracks.004']} position={[0.411, -12.165, -70.349]} scale={[24.464, 14.153, 3.481]} />
        <mesh castShadow receiveShadow name="Plane005" geometry={nodes.Plane005.geometry} material={materials.Assets} position={[1.33, 5.167, -79.182]} rotation={[Math.PI / 2, 0, 0]} scale={12.861} />
        <mesh castShadow receiveShadow name="Plane006" geometry={nodes.Plane006.geometry} material={materials['sandstone_cracks.003']} position={[20.751, 15.562, -77.139]} rotation={[Math.PI / 2, 0, 0.46]} scale={[9.713, 9.713, 17.57]} />
        <mesh castShadow receiveShadow name="Cube008" geometry={nodes.Cube008.geometry} material={materials['AssetRoman2.001']} position={[0.972, -8.701, -73.16]} rotation={[0, 0.015, 0]} scale={[-3.167, -3.6, -3.6]} />
        <mesh castShadow receiveShadow name="Plane004" geometry={nodes.Plane004.geometry} material={materials.Ground} position={[1.669, -14.213, 3.674]} scale={47.718} />
        <mesh castShadow receiveShadow name="wall" geometry={nodes.wall.geometry} material={materials.AssetRoman2} rotation={[Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow name="Sphere003" geometry={nodes.Sphere003.geometry} material={materials['assetwin.002']} position={[-16.473, 4.816, -76.102]} rotation={[0, 0.46, 0]} scale={0.862} />
        <mesh castShadow receiveShadow name="Wall_Lion003" geometry={nodes.Wall_Lion003.geometry} material={materials['assetwin.003']} position={[0.328, 13.74, -78.187]} scale={[5.672, 5.345, 5.345]} />
        <mesh castShadow receiveShadow name="Pillar002" geometry={nodes.Pillar002.geometry} material={materials.pillarTwo} position={[42.138, 6.095, -7.882]} rotation={[0, 0, Math.PI]} scale={0.074} />
        <mesh castShadow receiveShadow name="Pillar004" geometry={nodes.Pillar004.geometry} material={materials.M_Leaf} position={[41.558, 6.486, -7.104]} rotation={[0, 0, Math.PI]} scale={0.074} />
        <mesh castShadow receiveShadow name="Cube" geometry={nodes.Cube.geometry} material={materials.sandstone_blocks_04} position={[-0.853, -34.782, -60.015]} scale={10.605} />
        <mesh castShadow receiveShadow name="Plane008" geometry={nodes.Plane008.geometry} material={materials['Water 09']} morphTargetDictionary={nodes.Plane008.morphTargetDictionary} morphTargetInfluences={nodes.Plane008.morphTargetInfluences} position={[-0.389, 0.135, 0.756]} scale={0.985} />
      </group>
    </group>
  )
}

useGLTF.preload('/model/scene1-transformed.glb')

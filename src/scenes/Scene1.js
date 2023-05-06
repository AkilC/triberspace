import React, { useRef, useState, useContext } from 'react';
import { Stars } from '@react-three/drei';
import { useThree, useLoader} from '@react-three/fiber';
import Model from '../assets/EnterPortal';
import V2Portal from '../portals/V2Portal';
import BelovedPortal from '../portals/BelovedPortal';
import { WorldContext } from '../contexts/WorldContext';
import { useNavigate} from 'react-router-dom';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {DoubleSide} from 'three';

const Background = () => {
  const { gl } = useThree();
  
  React.useEffect(() => {
    gl.setClearColor('black');
  }, [gl]);
  
  return null;
};

const Scene1 = ({ characterRef }) => {
  const navigate = useNavigate();
  /* const [world, setWorld] = useState(null); */
  const world = useContext(WorldContext);
  const { scene } = useThree();


  const pavillion = useLoader(GLTFLoader, process.env.PUBLIC_URL + '/assets/pavillion.gltf');
  const pavillionMesh = pavillion.nodes.Cube001;
  pavillionMesh.material.side = DoubleSide;
  pavillionMesh.scale.setX(pavillionMesh.scale.x);
  pavillionMesh.scale.setY(pavillionMesh.scale.y);
  pavillionMesh.scale.setZ(pavillionMesh.scale.z);
  /* console.log(pavillionMesh); */


  return (
    <>
      <V2Portal
        world={world}
        characterRef={characterRef}
        position={[-3, 0, 25]}
        size={[3, 3, 3]}
        rotation = {[0, 0, 0]}
        destination="v2.triber.space"
        onCharacterEnter={(destination) => {
          if (destination) {
            window.location.href = `https://${destination}`;
          } else {
            console.error('Destination not found:', destination);
          }
        }}
      />
      <BelovedPortal
        world={world}
        characterRef={characterRef}
        position={[3, 0, 25]}
        size={[3, 3, 3]}
        destination="v2.triber.space"
        onCharacterEnter={(destination) => {
          if (destination) {
            window.location.href = `https://${destination}`;
          } else {
            console.error('Destination not found:', destination);
          }
        }}
      />
        <Stars/>
        <ambientLight intensity={1} />
        <directionalLight
          castShadow
          position={[0, 10, -5]}
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <directionalLight
          castShadow
          position={[0, 2, 50]}
          intensity={1}
        />
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 100]}>
          <planeBufferGeometry attach="geometry" args={[300, 300]} />
          <meshStandardMaterial attach="material" color={'#808080'} />
      </mesh>
      {/* <Model
          receiveShadow
          position={[0, -1, 10]}
          rotation={[0, Math.PI, 0]}
      /> */}
      <primitive
        object={pavillion.scene}
        receiveShadow
        position={[0, 0, 15]}
        rotation={[0, 0, 0]}
        scale={[2, 2, 2]}
      />
      <Background/>
    </>
  );
};

export default Scene1;

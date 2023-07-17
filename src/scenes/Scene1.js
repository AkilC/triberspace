import React, { useRef, useState, useContext, useMemo, useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import {  useLod, useGLTF } from '@react-three/drei';
import { Stars } from '@react-three/drei';
import { useThree} from '@react-three/fiber';
import Model from '../assets/EnterPortal';
import V2Portal from '../tspace_components/portals/V2Portal';
import BelovedPortal from '../portals/BelovedPortal';
import { WorldContext } from '../tspace_components/contexts/WorldContext';
import { useNavigate} from 'react-router-dom';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {DoubleSide} from 'three';
import * as THREE from 'three'
import {WaveTextureMaterial} from '../shaders/WaveTextureMaterial'
import seedrandom from 'seedrandom';
import Mountains from '../components/Mountains';

const Background = () => {
  const { gl } = useThree();
  
  React.useEffect(() => {
    gl.setClearColor(0x000000);
  }, [gl]);
  
  return null;
};


  function PlaneWaveTexture() {
    const materialRef = useRef();

    useFrame(({ clock }) => {
      if (materialRef.current) {
        materialRef.current.uniforms.time.value = clock.getElapsedTime();
      }
    });

    return (
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 100]}>
        <planeBufferGeometry args={[800, 800]} />
        <waveTextureMaterial ref={materialRef} />
      </mesh>
    );
  }


  /* function useBuildingInstances(buildingModels, numInstances) {
    const dummy = useMemo(() => new THREE.Object3D(), []);
    const [instancedMeshRef] = useInstancedMesh(() => {
      const geometry = new THREE.BufferGeometry();
      const material = new THREE.MeshStandardMaterial();
  
      return new THREE.InstancedMesh(geometry, material, numInstances);
    });
  
    useMemo(() => {
      for (let i = 0; i < numInstances; i++) {
        const model = buildingModels[Math.floor(Math.random() * buildingModels.length)].scene.clone();
        const x = Math.random() * 200 - 100;
        const z = Math.random() * 200 - 100;
  
        dummy.position.set(x, 0, z);
        dummy.rotation.set(0, Math.random() * Math.PI * 2, 0);
        dummy.scale.setScalar(Math.random() * 1 + 0.5);
        dummy.updateMatrix();
  
        instancedMeshRef.current.setMatrixAt(i, dummy.matrix);
      }
  
      instancedMeshRef.current.instanceMatrix.needsUpdate = true;
    }, [instancedMeshRef, buildingModels]);
  
    return instancedMeshRef;
  } */

  function findMesh(object) {
    if (object.type === 'Mesh') {
      return object;
    }
    for (const child of object.children) {
      const mesh = findMesh(child);
      if (mesh) {
        return mesh;
      }
    }
    return null;
  }

  const rng = seedrandom('your-seed-string');

  function getRandomBuildingModel(buildingModels, probabilities) {
    const totalProbability = probabilities.reduce((a, b) => a + b, 0);
    const randomValue = rng() * totalProbability;

    let sum = 0;
    for (let i = 0; i < buildingModels.length; i++) {
      sum += probabilities[i];
      if (randomValue <= sum) {
        return buildingModels[i];
      }
    }

    return buildingModels[buildingModels.length - 1];
  }

  /* const City = React.memo(function City() {
    console.log("City component rendered");
    const numInstances = 70;
    const openSpaceSize = 85; // Adjust the size of the open space
    const buildingSpacing = 50; // Adjust the spacing between buildings
  
    const { scene } = useThree();
    const buildingModels = useLoader(GLTFLoader, [
      process.env.PUBLIC_URL + "/assets/buildings/build1.gltf",
      process.env.PUBLIC_URL + "/assets/buildings/build12.glb",
      process.env.PUBLIC_URL + "/assets/buildings/build8.gltf",
      process.env.PUBLIC_URL + "/assets/buildings/build6.gltf",
      process.env.PUBLIC_URL + "/assets/buildings/build13.gltf"
    ]);
  
    const buildingProbabilities = [0.8, 1, 0.5, 0.2, 0.1];
  
    useEffect(() => {
      const instancedMeshes = [];
      if (buildingModels && buildingModels.length) {
        const dummy = new THREE.Object3D();
  
        // Array of colors that range from black to gray
        const colors = [
          new THREE.Color("black"),
          new THREE.Color("#333"),
          new THREE.Color("#666"),
          new THREE.Color("#999")
        ];
  
        buildingModels.forEach(buildingModel => {
          const mesh = findMesh(buildingModel.scene);
          const geometry = mesh.geometry;
          const material = mesh.material;
  
          const instancedMesh = new THREE.InstancedMesh(
            geometry,
            material.clone(), // Clone the material to allow color variation
            numInstances
          );
  
          for (let i = 0; i < numInstances; i++) {
            let x, z;
  
            // Loop until a position is found that's not in the center area
            do {
              x =
                (rng() * 200 - 100) *
                (Math.abs(x) < openSpaceSize ? (openSpaceSize * 2) / 3 : 1); // Exclude central square area
              z =
                (rng() * 200 - 100) *
                (Math.abs(z) < openSpaceSize ? (openSpaceSize * 2) / 3 : 1);
            } while (Math.abs(x) < openSpaceSize && Math.abs(z) < openSpaceSize);
  
            dummy.position.set(x, 0, z);
            dummy.rotation.set(0, rng() * Math.PI * 2, 0);
            dummy.scale.setScalar(rng() * 1.2 + 1.25); // Change the scale factor here (2.5 times bigger)
            dummy.updateMatrix();
  
            // Set a random color and shininess value for each instance
            instancedMesh.setMatrixAt(i, dummy.matrix);
            instancedMesh.material.color =
              colors[Math.floor(rng() * colors.length)];
            instancedMesh.material.shininess = rng() * 40 + 10; // Random value between 10 and 50
          } 
  
          instancedMesh.instanceMatrix.needsUpdate = true;
          scene.add(instancedMesh);
          instancedMeshes.push(instancedMesh);
        });
  
        return () => {
          instancedMeshes.forEach(instancedMesh => {
            scene.remove(instancedMesh);
          });

          buildingModels.forEach(buildingModel => {
            const mesh = findMesh(buildingModel.scene);
            if (mesh) {
              const { geometry, material } = mesh;
              if (material.map) {
                // Dispose cloned materials only
                material.dispose();
              }
              geometry.dispose();
            }
          });
        };
      }
    }, [buildingModels, scene, buildingProbabilities]);
  
    return null;
  }); */
  
  

const Scene1 = React.memo(({ characterRef }) => {
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

  /* const buildings = useLoader(GLTFLoader, process.env.PUBLIC_URL + '/assets/buildings/buildings.gltf');
  console.log(buildings); */
  


  return (
    <>
      <V2Portal
        world={world}
        characterRef={characterRef}
        position={[0, 0, 25]}
        size={[3, 3, 3]}
        rotation = {[0, 0, 0]}
        destination="v2.triber.space"
        onCharacterEnter={(destination) => {
          if (destination) {
            window.location.href = `http://${destination}`;
          } else {
            console.error('Destination not found:', destination);
          }
        }}
      />
        <Stars 
          depth={100}
          /* count={5000} */
          /* factor={4} */
        />
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
          position={[0, 2, 0]}
          intensity={1}
        />
       <directionalLight
         castShadow
         position={[0, 2, 0]}
         intensity={1}
         shadow-mapSize-width={1024}
         shadow-mapSize-height={1024}
         shadow-camera-far={50}
         shadow-camera-left={-10}
         shadow-camera-right={10}
         shadow-camera-top={10}
         shadow-camera-bottom={-10}
       />
       
      {/* <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 100]}>
          <planeBufferGeometry attach="geometry" args={[300, 300]} />
          <meshStandardMaterial attach="material" color={'#808080'} />
      </mesh> */}
      <PlaneWaveTexture/>
      {/* <Plane/> */}
      {/* <Model
          receiveShadow
          position={[0, -1, 10]}
          rotation={[0, Math.PI, 0]}
      /> */}
      {/* <City/> */}
      <primitive
        object={pavillion.scene}
        receiveShadow
        position={[0, 0, 15]}
        rotation={[0, 0, 0]}
        scale={[2, 2, 2]}
      />
      {/* <primitive
        object={buildings.scene}
        receiveShadow
        position={[0, 0, 15]}
        rotation={[0, 0, 0]}
        scale={[2, 2, 2]}
      /> */}
      <Background/>
    </>
  );
});

export default Scene1;

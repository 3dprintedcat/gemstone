import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const GLBViewer = ({ glbPath }) => {
  const glb = useLoader(GLTFLoader, glbPath);

  return (
    <Canvas style={{height:'65vh',position: 'relative', top:'-30px'}}>
      <Suspense fallback={null}>
        <Stage>
          <primitive object={glb.scene} rotation={[Math.PI / 4, Math.PI / 4, 0]} scale={0.9} />
        </Stage>
      </Suspense>
      <OrbitControls  />
   
</Canvas>
  );
};
export default GLBViewer;
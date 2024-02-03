// import { Suspense} from "react";
// import { Canvas } from "react-three-fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from '../Loader';
// // import { Mesh } from "three";

// const Computers = () => {
//   const Computer = useGLTF('./public/desktop_pc/scene.gltf')

//   return(
//     <mesh>
//     <hemisphereLight intensity={0.15}
//     groundColor="black" />
//     <pointLight intensity={1} />
//     <primitive object={Computer.scene} />
//     </mesh>
//   )
// }

// const ComputersCanvas = () => {
//   <Canvas
//     frameloop="demand"
//     shadows
//     camera={{position: [20, 3, 5], fov: 25 }}
//     gl={{ preserveDrawingBuffer: true}}
//   >
//     <Suspense fallback={<CanvasLoader />}>
//       <OrbitControls
//        enableZoom={false} 
//        maxPolarAngle={Math.PI / 2}
//        minPolarAngle={Math.PI / 2}
//        />
//        <computers />

//     </Suspense>
//     <Preload all/>
//   </Canvas>
// }


// export default Computers;
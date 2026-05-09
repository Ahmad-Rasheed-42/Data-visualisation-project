import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Wand2, Sparkles, Feather } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Environment, Float, ContactShadows } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three-stdlib';
import * as THREE from 'three';

// 3D Title Component
const TitleModel = () => {
  const { scene } = useGLTF('/models/hp_title.glb');
  
  // Optional: Enhance the material of the title to make it pop
  React.useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        // Ensure it's shiny and magical
        if (child.material) {
          child.material.metalness = 0.8;
          child.material.roughness = 0.2;
          child.material.envMapIntensity = 1.5;
        }
      }
    });
  }, [scene]);

  return <primitive object={scene} scale={0.8} rotation={[0, 0, 0]} />;
};

// 3D Golden Snitch Component
const SnitchModel = () => {
  const obj = useLoader(OBJLoader, '/models/snitch.obj');
  
  // Apply a beautiful, highly reflective golden material since it lacks a .mtl file
  React.useEffect(() => {
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: '#ffcc00', // Bright gold
      metalness: 1.0,   // Fully metallic
      roughness: 0.1,   // Very smooth/reflective
      envMapIntensity: 2.0 // High environment reflection
    });

    obj.traverse((child) => {
      if (child.isMesh) {
        child.material = goldMaterial;
      }
    });
  }, [obj]);

  return <primitive object={obj} scale={0.05} rotation={[0, Math.PI / 4, 0]} />;
};

const IntroSection = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center parchment-bg relative z-10 px-8 overflow-hidden">
      
      {/* 3D Canvas Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
          <directionalLight position={[-10, -10, 10]} intensity={0.5} color="#d4af37" />
          <spotLight position={[0, 10, 0]} intensity={1} angle={0.5} penumbra={1} color="#d4af37" />
          
          {/* Beautiful environment map for the metallic reflections */}
          <Environment preset="city" />

          <Suspense fallback={null}>
            {/* The Floating Harry Potter Title */}
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
              <group position={[0, 1, 0]}>
                <TitleModel />
              </group>
            </Float>

            {/* The Floating Golden Snitch */}
            <Float speed={4} rotationIntensity={2} floatIntensity={1.5}>
              <group position={[3, 1.5, 2]}>
                <SnitchModel />
              </group>
            </Float>
            
            <Float speed={3} rotationIntensity={1} floatIntensity={1}>
              <group position={[-4, 2, -1]}>
                <SnitchModel />
              </group>
            </Float>
          </Suspense>
        </Canvas>
      </div>

      {/* Floating Icons */}
      <motion.div 
        className="absolute bottom-32 left-32 text-magical-gold/30 z-0"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Wand2 size={48} />
      </motion.div>
      <motion.div 
        className="absolute top-40 left-1/4 text-magical-slytherin/40 z-0"
        animate={{ y: [0, -15, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Sparkles size={32} />
      </motion.div>
      <motion.div 
        className="absolute bottom-40 right-1/4 text-magical-gold/20 z-0"
        animate={{ y: [0, 20, 0], rotate: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Feather size={40} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center max-w-4xl relative z-20 mt-40" // pushed down to make room for 3D title
      >
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="text-xl md:text-3xl font-sans text-gray-400 font-light"
        >
          A data-driven journey into the <span className="text-magical-gold hover:text-glow-hover transition-all cursor-default relative group">blueprint
            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-magical-gold opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </span> of the modern blockbuster.
        </motion.p>
      </motion.div>

      {/* Decorative magic dust */}
      <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-magical-gold"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              boxShadow: '0 0 10px #d4af37'
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 1, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default IntroSection;

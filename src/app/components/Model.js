'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

const Model = () => {
    const { scene, animations } = useGLTF('/scene.gltf');
    const mixerRef = useRef();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (animations && animations.length) {
            const mixer = new THREE.AnimationMixer(scene);
            animations.forEach((clip) => {
                mixer.clipAction(clip).play();
            });
            mixerRef.current = mixer;
        }

        scene.traverse((child) => {
            if (child.isMesh) {
                const material = child.material;
                if (material) {
                    material.emissiveIntensity = material.emissiveIntensity || 1;
                    material.roughness = material.roughness !== undefined ? material.roughness : 0.2;
                    material.metalness = material.metalness !== undefined ? material.metalness : 0.1;

                    // Ensure textures are applied correctly
                    material.needsUpdate = true;
                }
            }
        });

        setLoading(false); // Set loading to false once the model is ready
    }, [animations, scene]);

    useFrame((state, delta) => {
        mixerRef.current?.update(delta);
        scene.rotation.y += delta * 0.1; // Adjust rotation speed as needed
    });

    return (
        <>

            <ambientLight intensity={20} />
            <directionalLight position={[500, 0, 0]} intensity={500} />
            <directionalLight position={[500, 3000, 0]} intensity={1000} />
            <primitive object={scene} scale={0.5} />
            <EffectComposer>
                <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.2} height={200} />
            </EffectComposer>
        </>
    );
};

export default Model;

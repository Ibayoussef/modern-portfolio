'use client';
import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

function Model() {
    const { scene, animations } = useGLTF('/scene.gltf');
    const mixerRef = useRef();

    useEffect(() => {
        if (animations && animations.length) {
            const mixer = new THREE.AnimationMixer(scene);
            animations.forEach((clip) => {
                mixer.clipAction(clip).play();
            });
            mixerRef.current = mixer;
        }

        // Change emission intensity
        scene.traverse((child) => {
            if (child.isMesh && child.material) {
                if (Array.isArray(child.material)) {
                    child.material.forEach((material) => {
                        if (material.emissive) {
                            material.emissiveIntensity = 2; // Set the emissive intensity
                        }
                    });
                } else {
                    if (child.material.emissive) {
                        child.material.emissiveIntensity = 2; // Set the emissive intensity
                    }
                }
            }
        });

        // Rotate the model to look a bit to the left
        scene.rotation.y = - Math.PI / 5;
    }, [animations, scene]);

    useFrame((state, delta) => {
        mixerRef.current?.update(delta);
    });

    return (
        <>
            <ambientLight intensity={3} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <primitive object={scene} scale={3} />

            <EffectComposer>
                <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} />
            </EffectComposer>
        </>
    );
}

export default Model;

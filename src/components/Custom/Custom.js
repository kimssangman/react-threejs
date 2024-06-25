import "./Custom.css";

import React, { Suspense } from "react";

// Three.js import
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Model } from "../../3D/Face/Face";

function Custom() {
    return (
        <div>
            <div className="">
                <p>Custom</p>
            </div>
            <Canvas>
                <ambientLight intensity={1.5} />
                <OrbitControls />
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
                <Environment preset="sunset" />
                <ContactShadows
                    position={[0, -1.5, 0]}
                    opacity={1}
                    scale={20}
                    blur={1}
                    far={5}
                    resolution={256}
                    color="#000000"
                />
            </Canvas>
        </div>
    );
}

export default Custom;

import "./Basic.css";

import React, { Suspense } from "react";

// Three.js import
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Model } from "../../3D/Bolt/Bolt";

/**----------------------------
 * Options
 * 
 * AmbientLight : Object들의 전 방향에서 조명을 비춰준다. intensity 밝기
 * OrbitControls : 마우스를 사용하여 줌인 줌아웃 기능 제공
 * Suspense : 렌더링이 준비되지 않은 컴포넌트가 있을 때 로딩 화면을 보여줌
 * Environment: 내장된 배경 제공 sunset 태양 빛
 ----------------------------*/

function Basic() {
    return (
        <div>
            <div className="">
                <p>Bolt</p>
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

export default Basic;

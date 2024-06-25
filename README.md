# Three.sj 사용법

## install

```
npm install three @react-three/fiber @react-three/drei
```

## 기본 준비

### 1. 3D 이미지 다운로드

```
https://sketchfab.com/feed
```

-   1-1. glTF로 다운로드
-   1-2. 압축풀기
-   1-3. /public/images/ 경로에 textures 폴더, image.bin, image.gltf 파일 넣기

### 2. 이미지 설정

-   2-1. 해당 이미지.gltf 파일 클릭
-   2-2. 이미지 이름 같게 설정

```
"buffers": [
    {
      "byteLength": 22440,
      "uri": "변경한 이미지 이름.bin"
    }
  ],
```

### 3. gltf 파일을 jsx에서 사용할 수 있도록 설정

-   3-1. 각각의 gltf 파일을 react에서 읽을 수 있도록 설정
-   3-2. 생성된 이미지이름.jsx 를 import 해야하기 때문에 src 폴더 내에 생성할 것

```
npx gltfjsx 이미지 이름.gltf
```

-   3-3. 생성된 이미지.jsx 예시

```
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

// default를 해서 export 가능하게 하기
export default function Model(props) {
    const { nodes, materials } = useGLTF("/bolt.gltf");
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.08}>
                <mesh
                    geometry={nodes.defaultMaterial.geometry}
                    material={materials.BoltSteel}
                    rotation={[Math.PI / 2, 0, 0]}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/bolt.gltf");
```

### 4. 사용해보기

```
import "./Basic.css";

import React, { Suspense } from "react";

// Three.js import
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Model } from "../3D/Bolt/Bolt";

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

```

---

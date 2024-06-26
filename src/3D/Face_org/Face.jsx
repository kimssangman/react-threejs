import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
    const group = useRef();
    const { nodes, materials } = useGLTF("/3D/Face/face.gltf");

    // 눈 깜빡임 애니메이션 상태
    const blinkState = useRef({ isBlinking: false, blinkProgress: 0 });
    const [blinkDuration, setBlinkDuration] = useState(0);
    const [blinkInterval, setBlinkInterval] = useState(0);

    useEffect(() => {
        // 눈 깜빡임 간격 및 지속 시간 설정
        setBlinkInterval(Math.random() * 2000 + 1000); // 1~3초 사이의 간격
        setBlinkDuration(200); // 깜빡임 지속 시간 200ms
    }, []);

    // 눈을 클릭했을 때 깜빡임 애니메이션 시작
    const handleEyeClick = () => {
        if (!blinkState.current.isBlinking) {
            blinkState.current.isBlinking = true;
            blinkState.current.blinkProgress = 0;
        }

        console.log("눈 클릭", nodes.Object_15.scale);
    };

    useFrame((state, delta) => {
        if (blinkState.current.isBlinking) {
            blinkState.current.blinkProgress +=
                delta * (1 / (blinkDuration / 1000));
            if (blinkState.current.blinkProgress > 1) {
                blinkState.current.isBlinking = false;
                blinkState.current.blinkProgress = 0;
            }
            const blinkAmount = Math.abs(
                Math.sin(Math.PI * blinkState.current.blinkProgress)
            );
            // 눈 깜빡임 애니메이션
            if (nodes.Object_15) {
                nodes.Object_15.scale.y = 1 - 0.8 * blinkAmount;
            }
        }
    });

    return (
        <group ref={group} {...props} dispose={null} scale={1.5}>
            <mesh
                geometry={nodes.Object_4.geometry}
                material={materials["Material.005"]}
            />
            <mesh
                geometry={nodes.Object_6.geometry}
                material={materials.Material}
            />
            <mesh
                geometry={nodes.Object_8.geometry}
                material={materials.Material}
            />
            <mesh
                geometry={nodes.Object_10.geometry}
                material={materials.Material}
            />
            <mesh
                geometry={nodes.Object_12.geometry}
                material={materials.Material}
            />
            <mesh
                geometry={nodes.Object_14.geometry}
                material={materials["Material.001"]}
                onClick={handleEyeClick} // 눈 클릭 이벤트 추가
            />
            <mesh
                geometry={nodes.Object_15.geometry}
                material={materials["Material.002"]}
                onClick={handleEyeClick} // 눈 클릭 이벤트 추가
            />
            <mesh
                geometry={nodes.Object_16.geometry}
                material={materials["Material.003"]}
            />
            <mesh
                geometry={nodes.Object_17.geometry}
                material={materials["Material.004"]}
            />
            <mesh
                geometry={nodes.Object_17.geometry}
                material={materials["Material.004"]}
            />
        </group>
    );
}

useGLTF.preload("/3D/Face/face.gltf");

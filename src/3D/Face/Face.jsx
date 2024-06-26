import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import eventBus from "../../eventBus/eventBus";

export function Model(props) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("/3D/Face/face.gltf");
    const { actions } = useAnimations(animations, group);

    // 모든 애니메이션을 정지하는 함수
    const stopAllAnimations = () => {
        Object.values(actions).forEach((action) => {
            action.stop();
        });
    };

    // 애니메이션 재생 함수
    const playkAnimation = (eventName) => {
        const animation = actions[eventName];
        if (animation) {
            stopAllAnimations(); // 모든 애니메이션을 정지
            animation.reset().setLoop(animation.LoopOnce, 1).play();
            animation.clampWhenFinished = true;
        }
    };

    useEffect(() => {
        const handleMyEvent = async (message) => {
            playkAnimation(message);
        };

        // 이벤트 수신하기
        eventBus.on("event", handleMyEvent);
        return () => {
            // 컴포넌트가 사라질 때에는 이벤트 수신 종료
            eventBus.off("event", handleMyEvent);
        };
    }, []);

    return (
        <group ref={group} {...props} dispose={null} scale={8}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="root">
                        <group
                            name="GLTF_SceneRootNode"
                            rotation={[Math.PI / 2, 0, 0]}
                        >
                            <group
                                name="RootNode_0"
                                position={[0.007, -0.051, 0.014]}
                            >
                                <group
                                    name="root_2"
                                    rotation={[0.485, 1.571, 0]}
                                >
                                    <group name="GLTF_created_0">
                                        <primitive
                                            object={
                                                nodes.GLTF_created_0_rootJoint
                                            }
                                        />
                                        <group
                                            name="Head_1_correction"
                                            rotation={[
                                                -Math.PI / 2,
                                                -1.086,
                                                -Math.PI / 2,
                                            ]}
                                        >
                                            <group name="Head_1" />
                                        </group>
                                        <skinnedMesh
                                            name="Object_171"
                                            geometry={nodes.Object_171.geometry}
                                            material={materials.material_0}
                                            skeleton={nodes.Object_171.skeleton}
                                            morphTargetDictionary={
                                                nodes.Object_171
                                                    .morphTargetDictionary
                                            }
                                            morphTargetInfluences={
                                                nodes.Object_171
                                                    .morphTargetInfluences
                                            }
                                            onClick={playkAnimation}
                                        />
                                    </group>
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/3D/Face/face.gltf");

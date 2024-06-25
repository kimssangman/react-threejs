import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
    console.log(props);

    const { nodes, materials } = useGLTF("/3D/Face/face.gltf");
    return (
        <group {...props} dispose={null}>
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
            />
            <mesh
                geometry={nodes.Object_15.geometry}
                material={materials["Material.002"]}
            />
            <mesh
                geometry={nodes.Object_16.geometry}
                material={materials["Material.003"]}
            />
            <mesh
                geometry={nodes.Object_17.geometry}
                material={materials["Material.004"]}
            />
        </group>
    );
}

useGLTF.preload("/3D/Face/face.gltf");

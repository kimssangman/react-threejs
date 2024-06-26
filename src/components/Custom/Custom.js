import "./Custom.css";

import React, { Suspense, useState } from "react";

// Three.js import
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Model } from "../../3D/Face/Face";
import eventBus from "../../eventBus/eventBus";

function Custom() {
    const [activeButton, setActiveButton] = useState(null);

    const eventHandler = (eventName) => {
        eventBus.emit("event", eventName);

        setActiveButton(eventName);
        setTimeout(() => {
            setActiveButton(null);
        }, 5500);
    };

    return (
        <div>
            <div className="">
                <p>Custom</p>
            </div>
            <Canvas
                className="custom_canvas"
                style={{ background: "#fff" }} // CSS 배경 설정
                gl={{ alpha: false }} // 투명도를 비활성화하여 배경색을 더 명확하게
                camera={{ position: [0, 0, 5] }} // 카메라 설정
            >
                <color attach="background" args={["#fbfafb"]} />{" "}
                {/* Three.js 배경색 설정 */}
                <ambientLight intensity={1.5} />
                <OrbitControls />
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
                <Environment preset="sunset" />
            </Canvas>

            <div className="button_container">
                <button
                    onClick={() => eventHandler("smile")}
                    style={{
                        backgroundColor:
                            activeButton === "smile" ? "#507dff" : "",
                        color: activeButton === "smile" ? "#fff" : "",
                    }}
                >
                    웃음
                </button>
                <button
                    onClick={() => eventHandler("dance")}
                    style={{
                        backgroundColor:
                            activeButton === "dance" ? "#507dff" : "",
                        color: activeButton === "dance" ? "#fff" : "",
                    }}
                >
                    춤추기
                </button>
                <button
                    onClick={() => eventHandler("nono")}
                    style={{
                        backgroundColor:
                            activeButton === "nono" ? "#507dff" : "",
                        color: activeButton === "nono" ? "#fff" : "",
                    }}
                >
                    부정
                </button>
                <button
                    onClick={() => eventHandler("angry")}
                    style={{
                        backgroundColor:
                            activeButton === "angry" ? "#507dff" : "",
                        color: activeButton === "angry" ? "#fff" : "",
                    }}
                >
                    화남
                </button>
            </div>
        </div>
    );
}

export default Custom;

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";

function Maze() {
  const walls = [[0,1,1,0,1],[0,1,1,0,1]]; // 미로 벽 정보를 담을 배열
  const cameraRef = useRef(); // 카메라 ref
  const [position, setPosition] = useState(new THREE.Vector3(0, 0, 0)); // 현재 위치

  // 벽 생성 함수
  function createWall(x, z, size) {
    const wall = new THREE.Mesh(
      new THREE.BoxBufferGeometry(size, size, size),
      new THREE.MeshNormalMaterial()
    );
    wall.position.set(x, size / 2, z);
    walls.push(wall);
  }

  // 미로 생성
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (i === 0 || i === 9 || j === 0 || j === 9) {
        createWall(i * 10, j * 10, 10);
      }
    }
  }

  // 이동 함수
  function move(direction) {
    const newPosition = position.clone(); // 새로운 위치 생성
    switch (direction) {
      case "left":
        cameraRef.current.rotateY(Math.PI / 2); // 시점 회전
        newPosition.z -= 10;
        break;
      case "right":
        cameraRef.current.rotateY(-Math.PI / 2); // 시점 회전
        newPosition.z += 10;
        break;
      case "up":
        newPosition.x -= 10;
        break;
      case "down":
        newPosition.x += 10;
        break;
      default:
        break;
    }

    // 이동 가능한지 체크
    const intersectedWalls = walls.filter((wall) => {
      const raycaster = new THREE.Raycaster(
        newPosition,
        wall.position.clone().sub(newPosition).normalize()
      );
      const intersections = raycaster.intersectObject(wall);
      return intersections.length > 0 && intersections[0].distance < 10;
    });

    if (intersectedWalls.length === 0) {
      setPosition(newPosition);
    }
  }

  // 렌더링 함수
  useFrame(() => {
    cameraRef.current.position.set(position.x, 30, position.z);
  });

  return (
    <>
      {walls.map((wall, index) => (
        <mesh key={index} {...wall} />
      ))}
      <perspectiveCamera
        ref={cameraRef}
        position={[0, 30, 0]}
        aspect={window.innerWidth / window.innerHeight}
        fov={75}
        near={0.1}
        far={1000}
      />
      <ambientLight />
      <directionalLight position={[0, 50, 0]} />
      <div
        onKeyDown={(e) => {
          switch (e.key) {
            case "a":
              move("left");
              break;
            case "d":
                move("right");
                break;
              case "w":
                move("up");
                break;
              case "s":
                move("down");
                break;
              default:
                break;
            }
          }}
          tabIndex="0"
          style={{ outline: "none" }}
        >
          <div>Use WASD keys to move.</div>
        </div>
      </>
);
}

export default Maze
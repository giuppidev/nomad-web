"use client";

import { ThreeEvent, useLoader } from "@react-three/fiber";
import { DoubleSide, TextureLoader } from "three";

interface WorldProps {
  staticSiteURI: string;
  updateMap: (event: ThreeEvent<MouseEvent>) => void;
}

export const World = ({ staticSiteURI, updateMap }: WorldProps) => {
  const colorMap = useLoader(TextureLoader, staticSiteURI);
  colorMap.repeat.set(1, 1);

  return (
    <mesh onClick={updateMap}>
      <icosahedronGeometry args={[1, 20]} />
      <meshStandardMaterial
        transparent
        side={DoubleSide}
        map={colorMap}
        color="#FFCC33"
      />
    </mesh>
  );
};

"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas, ThreeEvent } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { MapSvg } from "./map-svg";
import { World } from "./world";

const svgViewBox = [2000, 1000];
const offsetY = -0.1;

export default function WorldMapScene() {
  const ref = useRef<SVGSVGElement>();
  const [staticMapUri, setStaticMapUri] = useState<string>("");
  const [svgCountries, setSvgCountries] = useState<SVGPathElement[]>([]);

  useEffect(() => {
    if (ref.current) {
      const svgData = new XMLSerializer().serializeToString(ref.current);
      setStaticMapUri(
        "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgData),
      );

      setSvgCountries(Array.from(ref.current.querySelectorAll("path")));
    }
  }, []);

  const updateMap = (event: ThreeEvent<MouseEvent>) => {
    const { uv } = event;
    if (!uv || !ref.current) {
      return;
    }
    const pointObj = ref.current.createSVGPoint();
    pointObj.x = uv.x * svgViewBox[0];
    pointObj.y = (1 + offsetY - uv.y) * svgViewBox[1];
    for (let i = 0; i < svgCountries.length; i++) {
      const boundingBox = svgCountries[i].getBBox();
      if (
        pointObj.x > boundingBox.x ||
        pointObj.x < boundingBox.x + boundingBox.width ||
        pointObj.y > boundingBox.y ||
        pointObj.y < boundingBox.y + boundingBox.height
      ) {
        const isClicking = svgCountries[i].isPointInFill(pointObj);
        if (isClicking) {
          const countryName = svgCountries[i].getAttribute("data-name");
          console.log(countryName);
        }
      }
    }
  };

  return (
    <div className="w-full h-full">
      <Canvas>
        <ambientLight intensity={3} color="white" />
        <OrbitControls />
        {staticMapUri && (
          <World staticSiteURI={staticMapUri} updateMap={updateMap} />
        )}
      </Canvas>
      <div className="">
        <MapSvg ref={ref} offsetY={offsetY} svgViewBox={svgViewBox} />
      </div>
    </div>
  );
}

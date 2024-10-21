import React, { useEffect, useRef, useState } from "react";

const CanvasAnimation = () => {
  const canvasRef = useRef(null);
  const [sphereRad, setSphereRad] = useState(280);
  const [radiusSp, setRadiusSp] = useState(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const initCanvas = () => {
      // Canvas initialization code here (from your original JS logic)
      // Example variables: sphereRad, radius_sp, etc.
      let particleList = {};
      let recycleBin = {};
      let fLen = 320;
      let projCenterX = canvas.width / 2;
      let projCenterY = canvas.height / 2;
      let particleRad = 2.5;
      let zeroAlphaDepth = -750;
      let turnAngle = 0;
      let turnSpeed = (2 * Math.PI) / 1200;
      let gravity = -0;

      const rgbString = `rgba(70, 255, 140, `;
      const particleAlpha = 1;
      const sphereCenterX = 0;
      const sphereCenterY = 0;
      const sphereCenterZ = -3 - sphereRad;

      const drawParticles = () => {
        // Your animation drawing code, adapted to React
        // Use requestAnimationFrame for smooth animation
        requestAnimationFrame(drawParticles);
      };

      drawParticles();
    };

    if (canvas) {
      initCanvas();
    }

    return () => {
      // Cleanup when component is unmounted
    };
  }, [sphereRad, radiusSp]);

  return (
    <div className="canvas-container">
      <canvas ref={canvasRef} id="canvasOne" width={600} height={600} className="border border-gray-300" />
    </div>
  );
};

export default CanvasAnimation;

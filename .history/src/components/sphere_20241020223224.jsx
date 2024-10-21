import React, { useEffect, useRef, useState } from "react";
import './styles.css'; 

const CanvasComponent = () => {
  const canvasRef = useRef(null);
  const [sphereRad, setSphereRad] = useState(280);
  const [radiusSp, setRadiusSp] = useState(1);

  const Debugger = {
    log: (message) => {
      try {
        console.log(message);
      } catch (exception) {
        return;
      }
    },
  };

  const canvasSupport = () => {
    // Assuming Modernizr is a global variable
    return window.Modernizr && window.Modernizr.canvas;
  };

  useEffect(() => {
    const init = () => {
      let count = 0;
      const wait = 1;
      const numToAddEachFrame = 8;
      const r = 70, g = 255, b = 140;
      const rgbString = `rgba(${r},${g},${b},`; // Particle color string
      const particleAlpha = 1;
      let displayWidth, displayHeight;
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      displayWidth = canvas.width;
      displayHeight = canvas.height;
      const fLen = 320; // Distance from viewer to z=0 depth
      const projCenterX = displayWidth / 2;
      const projCenterY = displayHeight / 2;
      const zMax = fLen - 2;

      let particleList = {};
      let recycleBin = {};
      const randAccelX = 0.1;
      const randAccelY = 0.1;
      const randAccelZ = 0.1;
      const gravity = 0;
      const particleRad = 2.5;
      const sphereCenterX = 0, sphereCenterY = 0, sphereCenterZ = -3 - sphereRad;
      const zeroAlphaDepth = -750;
      let turnAngle = 0;
      const turnSpeed = (2 * Math.PI) / 1200;

      const onTimer = () => {
        count++;
        if (count >= wait) {
          count = 0;
          for (let i = 0; i < numToAddEachFrame; i++) {
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(Math.random() * 2 - 1);
            const x0 = sphereRad * Math.sin(phi) * Math.cos(theta);
            const y0 = sphereRad * Math.sin(phi) * Math.sin(theta);
            const z0 = sphereRad * Math.cos(phi);

            const p = addParticle(x0, sphereCenterY + y0, sphereCenterZ + z0, 0.002 * x0, 0.002 * y0, 0.002 * z0);
            p.attack = 50;
            p.hold = 50;
            p.decay = 100;
            p.initValue = 0;
            p.holdValue = particleAlpha;
            p.lastValue = 0;
            p.stuckTime = 90 + Math.random() * 20;
            p.accelX = 0;
            p.accelY = gravity;
            p.accelZ = 0;
          }
        }

        turnAngle = (turnAngle + turnSpeed) % (2 * Math.PI);
        const sinAngle = Math.sin(turnAngle);
        const cosAngle = Math.cos(turnAngle);

        context.fillStyle = "#000000";
        context.fillRect(0, 0, displayWidth, displayHeight);

        let p = particleList.first;
        while (p !== null) {
          const nextParticle = p.next;
          p.age++;

          if (p.age > p.stuckTime) {
            p.velX += p.accelX + randAccelX * (Math.random() * 2 - 1);
            p.velY += p.accelY + randAccelY * (Math.random() * 2 - 1);
            p.velZ += p.accelZ + randAccelZ * (Math.random() * 2 - 1);

            p.x += p.velX;
            p.y += p.velY;
            p.z += p.velZ;
          }

          const rotX = cosAngle * p.x + sinAngle * (p.z - sphereCenterZ);
          const rotZ = -sinAngle * p.x + cosAngle * (p.z - sphereCenterZ) + sphereCenterZ;
          const m = radiusSp * fLen / (fLen - rotZ);
          p.projX = rotX * m + projCenterX;
          p.projY = p.y * m + projCenterY;

          if (p.age < p.attack + p.hold + p.decay) {
            if (p.age < p.attack) {
              p.alpha = (p.holdValue - p.initValue) / p.attack * p.age + p.initValue;
            } else if (p.age < p.attack + p.hold) {
              p.alpha = p.holdValue;
            } else {
              p.alpha = (p.lastValue - p.holdValue) / p.decay * (p.age - p.attack - p.hold) + p.holdValue;
            }
          } else {
            p.dead = true;
          }

          if (p.projX > displayWidth || p.projX < 0 || p.projY < 0 || p.projY > displayHeight || rotZ > zMax) {
            recycle(p);
          } else {
            const depthAlphaFactor = Math.max(0, Math.min(1, (1 - rotZ / zeroAlphaDepth)));
            context.fillStyle = rgbString + depthAlphaFactor * p.alpha + ")";
            context.beginPath();
            context.arc(p.projX, p.projY, m * particleRad, 0, 2 * Math.PI, false);
            context.closePath();
            context.fill();
          }

          p = nextParticle;
        }
      };

      const addParticle = (x0, y0, z0, vx0, vy0, vz0) => {
        let newParticle = recycleBin.first || {};
        if (recycleBin.first) {
          recycleBin.first = newParticle.next;
        }

        newParticle.x = x0;
        newParticle.y = y0;
        newParticle.z = z0;
        newParticle.velX = vx0;
        newParticle.velY = vy0;
        newParticle.velZ = vz0;
        newParticle.age = 0;
        newParticle.dead = false;

        if (particleList.first) {
          particleList.first.prev = newParticle;
          newParticle.next = particleList.first;
        }

        particleList.first = newParticle;
        return newParticle;
      };

      const recycle = (p) => {
        if (p === particleList.first) {
          particleList.first = p.next;
        } else {
          p.prev.next = p.next;
        }

        p.next = recycleBin.first;
        recycleBin.first = p;
      };

      const timer = setInterval(onTimer, 10 / 24);
      return () => clearInterval(timer);
    };

    if (canvasSupport()) {
      init();
    }
  }, [sphereRad, radiusSp]);

  return (
    <div>
      <canvas id="canvasOne" ref={canvasRef} width="800" height="600"></canvas>
      <input
        type="range"
        min="20"
        max="500"
        value={sphereRad}
        onChange={(e) => setSphereRad(e.target.value)}
      />
      <input
        type="range"
        min="1.0"
        max="2.0"
        step="0.01"
        value={radiusSp}
        onChange={(e) => setRadiusSp(e.target.value)}
      />
    </div>
  );
};

export default CanvasComponent;

import React, { useEffect } from 'react';
import './style.css'; // Import your updated CSS file

const MatrixRain = () => {
  useEffect(() => {
    // Define the functions for rain effect
    const randomText = () => {
      const text = "!@#$%^*()";
      return text[Math.floor(Math.random() * text.length)];
    };

    const rain = () => {
      let cloud = document.querySelector('.cloud');
      let e = document.createElement('div');
      e.classList.add('drop');
      cloud.appendChild(e);

      let left = Math.floor(Math.random() * window.innerWidth); // Use window width
      let size = Math.random() * 1.5;
      let duration = Math.random() * 1;

      e.innerText = randomText();
      e.style.left = left + 'px';
      e.style.fontSize = 0.5 + size + 'em';
      e.style.animationDuration = 1 + duration + 's';

      setTimeout(() => {
        cloud.removeChild(e);
      }, 2000);
    };

    const interval = setInterval(rain, 20);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="conta">
      <div className="cloud">
        <h2>Welcome</h2>
      </div>
    </div>
  );
};

export default MatrixRain;

"use client";

import React, { useCallback } from "react";
import { Particles } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // Use 'slim' for better performance

const ParticlesDemo: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: { enable: true }, // Ensures particles fill the screen
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              area: 800, // Keep 'area' for newer versions
            },
          },
          color: {
            value: "#0000FF", // Blue color
          },
          shape: {
            type: "square",
          },
          opacity: {
            value: 0.8,
          },
          size: {
            value: { min: 1, max: 5 }, // More modern way of defining random sizes
          },
          move: {
            enable: true,
            speed: 2,
            direction: "top",
            straight: true,
            outModes: {
              default: "out",
            },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "bubble" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            bubble: {
              distance: 100,
              size: 6,
              duration: 2,
              opacity: 1,
              speed: 2,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesDemo;

import { useRef, useEffect, useState } from 'react';

export default function Circle(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const textWrapperRef = useRef<HTMLDivElement>(null);

  const [containerWidth, setContainerWidth] = useState<number>(0);

  const texts: string[] = [
    "JavaScript",
    "TypeScript",
    "SQL",
    "Python",
    "React",
    "React Native",
    "Django",
    "HTML",
    "CSS",
    "Scss",
    "Git",
    "Redux",
    "C",
    "CyberSecurity",
    "AWS",
    "Scratch",
    "TensorFlow",
    "scikit-learn",
    "GitHub",
    "Flask",
    "jQuery",
    "D3.js"
  ];

  // Refs to hold rotation values (in degrees) and dragging state
  const rotationX = useRef<number>(0);
  const rotationY = useRef<number>(0);
  const isDragging = useRef<boolean>(false);
  const startX = useRef<number>(0);
  const startY = useRef<number>(0);
  const initialRotationX = useRef<number>(0);
  const initialRotationY = useRef<number>(0);

  const autoRotateSpeed = 0.1; // degrees per frame
  
  useEffect(() => {
  const container = containerRef.current; 
  if (!container) return;
    const updateContainerWidth = () => {
      if (container) {
        setContainerWidth(container.offsetWidth);
      }
    };
    updateContainerWidth();
    window.addEventListener('resize', updateContainerWidth);
    return () => window.removeEventListener('resize', updateContainerWidth);
  }, []);

  // Mouse events for desktop dragging
  useEffect(() => {
    const container = containerRef.current; 
    if (!container) return;
    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      startX.current = e.clientX;
      startY.current = e.clientY;
      initialRotationX.current = rotationX.current;
      initialRotationY.current = rotationY.current;
      if (container) {
        container.style.cursor = 'grabbing';
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const deltaX = e.clientX - startX.current;
      const deltaY = e.clientY - startY.current;
      rotationY.current = initialRotationY.current + deltaX * 0.5;
      rotationX.current = initialRotationX.current - deltaY * 0.5;
    };

    const onMouseUp = () => {
      isDragging.current = false;
      if (container) {
        container.style.cursor = 'grab';
      }
    };

if (container) {
  container.addEventListener('mousedown', onMouseDown);
  container.addEventListener('mousemove', onMouseMove);
  container.addEventListener('mouseup', onMouseUp);
  container.addEventListener('mouseleave', onMouseUp); 
}
    return () => {
    if (container) {
        container.removeEventListener('mousedown', onMouseDown);
        container.removeEventListener('mousemove', onMouseMove);
        container.removeEventListener('mouseup', onMouseUp);
        container.removeEventListener('mouseleave', onMouseUp);
}
    };
  }, []);

  // Touch events for mobile dragging
  useEffect(() => {
  const container = containerRef.current; 
  if (!container) return;
    const onTouchStart = (e: TouchEvent) => {
      isDragging.current = true;
      startX.current = e.touches[0].clientX;
      startY.current = e.touches[0].clientY;
      initialRotationX.current = rotationX.current;
      initialRotationY.current = rotationY.current;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;
      const deltaX = e.touches[0].clientX - startX.current;
      const deltaY = e.touches[0].clientY - startY.current;
      rotationY.current = initialRotationY.current + deltaX * 0.5;
      rotationX.current = initialRotationX.current - deltaY * 0.5;
      e.preventDefault();
    };

    const onTouchEnd = () => {
      isDragging.current = false;
    };

    if (container) {
      container.addEventListener('touchstart', onTouchStart);
      container.addEventListener('touchmove', onTouchMove, { passive: false });
      container.addEventListener('touchend', onTouchEnd);
}
    return () => {
      if (container) {
        container.removeEventListener('touchstart', onTouchStart);
        container.removeEventListener('touchmove', onTouchMove);
        container.removeEventListener('touchend', onTouchEnd);
}

    };
  }, []);

  // Animation loop to update auto-rotation and apply the transform
  useEffect(() => {
    let animationFrameId: number;
    const animate = () => {
      if (!isDragging.current) {
        rotationY.current += autoRotateSpeed;
      }
      if (textWrapperRef.current) {
        textWrapperRef.current.style.transform = `rotateX(${rotationX.current}deg) rotateY(${rotationY.current}deg)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Compute the positions of each text using the Fibonacci sphere algorithm.
  // The sphere radius is calculated as: (containerWidth / 2) * 0.8 * 0.85
  // which is 15% smaller than the "original" size.
  const sphereElements = containerWidth
    ? texts.map((text, i) => {
        const n = texts.length;
        const sphereRadius = (containerWidth / 2) * 0.8 * 0.85;
        const goldenAngle = Math.PI * (3 - Math.sqrt(5));
        // y ranges from 1 to -1
        const y = 1 - (i / (n - 1)) * 2;
        const radiusXY = Math.sqrt(1 - y * y);
        const theta = goldenAngle * i;
        const x = Math.cos(theta) * radiusXY;
        const z = Math.sin(theta) * radiusXY;
        const transform = `translate(-50%, -50%) translate3d(${x * sphereRadius}px, ${y * sphereRadius}px, ${z * sphereRadius}px)`;

        return (
          <div key={i} className="floating-text" style={{ transform }}>
            {text}
          </div>
        );
      })
    : null;

  return (
    <div id="container" ref={containerRef}>
      <div id="text-wrapper" ref={textWrapperRef}>
        {sphereElements}
      </div>
    </div>
  );
}

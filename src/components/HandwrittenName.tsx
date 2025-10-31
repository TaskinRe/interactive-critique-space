import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const HandwrittenName = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      // Ensure CSS size is set
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
      // Set actual pixel size
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      // Reset transform before applying scale to avoid compounding
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Clear to avoid artifacts on resize
      ctx.clearRect(0, 0, rect.width, rect.height);
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // Drawing configuration (use theme primary color)
    const rootStyles = getComputedStyle(document.documentElement);
    const primaryHsl = rootStyles.getPropertyValue("--primary").trim() || "200 45% 60%";
    ctx.strokeStyle = `hsl(${primaryHsl})`;
    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    // Simplified handwriting path for "Rehnuma Taskin"
    const paths = [
      // R
      { start: { x: 20, y: 80 }, points: [{ x: 20, y: 20 }, { x: 50, y: 20 }, { x: 55, y: 35 }, { x: 40, y: 50 }, { x: 60, y: 80 }] },
      // e
      { start: { x: 75, y: 50 }, points: [{ x: 90, y: 45 }, { x: 95, y: 55 }, { x: 85, y: 65 }, { x: 75, y: 60 }] },
      // h
      { start: { x: 105, y: 20 }, points: [{ x: 105, y: 80 }, { x: 105, y: 50 }, { x: 120, y: 45 }, { x: 125, y: 80 }] },
      // n
      { start: { x: 135, y: 50 }, points: [{ x: 135, y: 80 }, { x: 135, y: 55 }, { x: 150, y: 50 }, { x: 150, y: 80 }] },
      // u
      { start: { x: 160, y: 50 }, points: [{ x: 160, y: 70 }, { x: 165, y: 75 }, { x: 170, y: 70 }, { x: 170, y: 50 }, { x: 170, y: 80 }] },
      // m
      { start: { x: 180, y: 50 }, points: [{ x: 180, y: 80 }, { x: 180, y: 55 }, { x: 190, y: 50 }, { x: 190, y: 70 }, { x: 190, y: 55 }, { x: 200, y: 50 }, { x: 200, y: 80 }] },
      // a
      { start: { x: 210, y: 60 }, points: [{ x: 220, y: 50 }, { x: 230, y: 60 }, { x: 230, y: 80 }, { x: 220, y: 65 }] },
      
      // Space between names
      
      // T
      { start: { x: 250, y: 25 }, points: [{ x: 280, y: 25 }, { x: 265, y: 25 }, { x: 265, y: 80 }] },
      // a
      { start: { x: 285, y: 60 }, points: [{ x: 295, y: 50 }, { x: 305, y: 60 }, { x: 305, y: 80 }, { x: 295, y: 65 }] },
      // s
      { start: { x: 315, y: 52 }, points: [{ x: 325, y: 48 }, { x: 330, y: 58 }, { x: 320, y: 68 }, { x: 315, y: 75 }, { x: 325, y: 78 }] },
      // k
      { start: { x: 335, y: 20 }, points: [{ x: 335, y: 80 }, { x: 345, y: 55 }, { x: 335, y: 55 }, { x: 350, y: 80 }] },
      // i
      { start: { x: 360, y: 50 }, points: [{ x: 360, y: 80 }] },
      { start: { x: 360, y: 42 }, points: [{ x: 360, y: 43 }] },
      // n
      { start: { x: 370, y: 50 }, points: [{ x: 370, y: 80 }, { x: 370, y: 55 }, { x: 385, y: 50 }, { x: 385, y: 80 }] },
    ];

    let currentPathIndex = 0;
    let currentPointIndex = 0;
    let progress = 0;

    const animate = () => {
      if (currentPathIndex >= paths.length) {
        setIsComplete(true);
        return;
      }

      const currentPath = paths[currentPathIndex];
      
      if (currentPointIndex === 0) {
        ctx.beginPath();
        ctx.moveTo(currentPath.start.x, currentPath.start.y);
      }

      if (currentPointIndex < currentPath.points.length) {
        const point = currentPath.points[currentPointIndex];
        const prevPoint = currentPointIndex === 0 ? currentPath.start : currentPath.points[currentPointIndex - 1];
        
        const dx = point.x - prevPoint.x;
        const dy = point.y - prevPoint.y;
        
        progress += 0.05;
        
        if (progress >= 1) {
          ctx.lineTo(point.x, point.y);
          ctx.stroke();
          currentPointIndex++;
          progress = 0;
        } else {
          const x = prevPoint.x + dx * progress;
          const y = prevPoint.y + dy * progress;
          ctx.lineTo(x, y);
          ctx.stroke();
        }
        
        requestAnimationFrame(animate);
      } else {
        currentPathIndex++;
        currentPointIndex = 0;
        progress = 0;
        requestAnimationFrame(animate);
      }
    };

    const timeoutId = setTimeout(() => {
      animate();
    }, 500);

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-32 md:h-40"
        style={{ touchAction: "none" }}
      />
      {!isComplete && (
        <motion.div
          className="absolute -bottom-2 left-0 text-sm text-muted-foreground italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Writing...
        </motion.div>
      )}
    </motion.div>
  );
};

export default HandwrittenName;

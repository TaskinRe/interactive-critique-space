import { useEffect, useRef } from "react";
import p5 from "p5";

// Subtle, hand-drawn style interactive background using p5.js
// - Light pencil-like strokes follow the cursor with gentle jitter
// - Very low opacity for a humane, sketchy feel
// - Fully theme-aware via CSS HSL tokens

const P5ScribbleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const p5Ref = useRef<p5 | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const getHsl = (varName: string, fallback: string) => {
      const styles = getComputedStyle(document.documentElement);
      return (styles.getPropertyValue(varName).trim() || fallback);
    };

    const fg = getHsl("--foreground", "24 30% 20%");

    const sketch = (s: p5) => {
      let w = 0;
      let h = 0;

      const setSize = () => {
        const rect = containerRef.current!.getBoundingClientRect();
        w = Math.max(1, Math.floor(rect.width));
        h = Math.max(1, Math.floor(rect.height));
        s.resizeCanvas(w, h);
      };

      s.setup = () => {
        const rect = containerRef.current!.getBoundingClientRect();
        w = Math.max(1, Math.floor(rect.width));
        h = Math.max(1, Math.floor(rect.height));
        const cnv = s.createCanvas(w, h);
        cnv.parent(containerRef.current!);
        s.pixelDensity(Math.min(2, s.pixelDensity()));
        s.clear();
        s.noFill();
        // Use theme color with very low alpha
        // hsla(H S L / alpha)
        s.stroke(`hsla(${fg} / 0.18)`);
        s.strokeWeight(1.2);
      };

      s.windowResized = () => setSize();

      let t = 0;
      s.draw = () => {
        // Make canvas fully transparent each frame to avoid black background
        s.clear();

        // Only draw when mouse is inside
        if (s.mouseX >= 0 && s.mouseX <= w && s.mouseY >= 0 && s.mouseY <= h) {
          // Jittered line segment from previous to current mouse position
          const jx = (s.noise(t) - 0.5) * 4;
          const jy = (s.noise(t + 1000) - 0.5) * 4;
          const x1 = s.pmouseX + jx;
          const y1 = s.pmouseY + jy;
          const x2 = s.mouseX - jx;
          const y2 = s.mouseY - jy;
          s.line(x1, y1, x2, y2);

          // Occasional hatching around the cursor
          if (s.frameCount % 7 === 0) {
            const len = 10 + s.noise(t + 2000) * 10;
            const angle = s.noise(t + 3000) * s.TWO_PI;
            const hx = s.mouseX + (s.noise(t + 4000) - 0.5) * 16;
            const hy = s.mouseY + (s.noise(t + 5000) - 0.5) * 16;
            s.push();
            s.translate(hx, hy);
            s.rotate(angle);
            s.line(-len / 2, 0, len / 2, 0);
            s.pop();
          }
          t += 0.01;
        }
      };
    };

    p5Ref.current = new p5(sketch);

    return () => {
      p5Ref.current?.remove();
      p5Ref.current = null;
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none" aria-hidden="true" />;
};

export default P5ScribbleBackground;

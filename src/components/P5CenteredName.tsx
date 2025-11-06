import { useEffect, useRef } from "react";
import p5 from "p5";

// Centered, humane hand-drawn name rendering with gentle wobble
// Uses theme colors and stays subtle in light mode pastels
const P5CenteredName = ({ text = "Rehnuma Taskin" }: { text?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const p5Ref = useRef<p5 | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const getHsl = (varName: string, fallback: string) => {
      const styles = getComputedStyle(document.documentElement);
      return styles.getPropertyValue(varName).trim() || fallback;
    };

    const primary = getHsl("--primary", "265 60% 65%");
    const fg = getHsl("--foreground", "222 20% 18%");

    const sketch = (s: p5) => {
      let w = 0, h = 0;
      let fontSize = 64;
      let t = 0;

      const setSize = () => {
        const rect = containerRef.current!.getBoundingClientRect();
        w = Math.max(1, Math.floor(rect.width));
        h = Math.max(1, Math.floor(rect.height));
        s.resizeCanvas(w, h);
        fontSize = Math.max(28, Math.min(w * 0.08, 80));
      };

      s.setup = () => {
        const rect = containerRef.current!.getBoundingClientRect();
        w = Math.max(1, Math.floor(rect.width));
        h = Math.max(1, Math.floor(rect.height));
        const cnv = s.createCanvas(w, h);
        cnv.parent(containerRef.current!);
        s.pixelDensity(Math.min(2, s.pixelDensity()));
        s.textFont("'Cormorant Garamond', serif");
        s.textAlign(s.CENTER, s.CENTER);
        s.noFill();
      };

      s.windowResized = () => setSize();

      const drawScribbleText = (str: string) => {
        s.clear();
        // soft halo
        s.push();
        s.stroke(`hsla(${primary} / 0.20)`);
        s.strokeWeight(9);
        s.textSize(fontSize);
        s.text(str, w / 2, h / 2);
        s.pop();

        // main stroke with jitter
        s.push();
        s.stroke(`hsla(${fg} / 0.85)`);
        s.strokeWeight(2.2);
        s.textSize(fontSize);

        // Draw multiple passes with slight noise-based offsets to feel hand-drawn
        for (let i = 0; i < 3; i++) {
          const ox = (s.noise(t + i * 100) - 0.5) * 2.2;
          const oy = (s.noise(t + i * 200) - 0.5) * 2.2;
          s.push();
          s.translate(ox, oy);
          s.text(str, w / 2, h / 2);
          s.pop();
        }
        s.pop();
      };

      s.draw = () => {
        drawScribbleText(text);
        // gentle time progression, stronger when mouse is near center
        const d = Math.hypot(s.mouseX - w / 2, s.mouseY - h / 2);
        const boost = d < Math.min(w, h) * 0.25 ? 0.04 : 0.01;
        t += boost;
      };
    };

    p5Ref.current = new p5(sketch);
    return () => {
      p5Ref.current?.remove();
      p5Ref.current = null;
    };
  }, [text]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default P5CenteredName;

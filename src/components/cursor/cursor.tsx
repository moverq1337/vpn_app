import React, { useEffect, useState } from "react";
import lerp from "../../utils/lerp";
import isTouchDevice from "../../utils/touch";

const AnimatedCursor: React.FC = () => {
  const [innerPosition, setInnerPosition] = useState({ x: 0, y: 0 });
  const [outerPosition, setOuterPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered] = useState(false);

  const options = {
    color: "#fff",
    outerAlpha: 0.3,
    outerBorderSize: 3,
    size: { inner: 8, outer: 40 },
    hoverScale: { inner: 0.75, outer: 1.5 },
    clickScale: { inner: 1.5, outer: 0.13 },
    trailingSpeed: 0.2,
  };

  useEffect(() => {
    if (isTouchDevice()) return;

    const handleMouseMove = (e: MouseEvent) => {
      setInnerPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Анимация отставания для внешнего круга
  useEffect(() => {
    let animationFrameId: number;

    const updateOuterPosition = () => {
      setOuterPosition((prev) => ({
        x: lerp(prev.x, innerPosition.x, options.trailingSpeed),
        y: lerp(prev.y, innerPosition.y, options.trailingSpeed),
      }));
      animationFrameId = requestAnimationFrame(updateOuterPosition);
    };

    updateOuterPosition();

    return () => cancelAnimationFrame(animationFrameId);
  }, [innerPosition]);

  return (
    <div>
      {isVisible && (
        <>
          <div
            id="cursor-outer"
            style={{
              left: `${outerPosition.x}px`,
              top: `${outerPosition.y}px`,
              width: options.size.outer,
              height: options.size.outer,
              border: `${options.outerBorderSize}px solid ${options.color}`,
              opacity: options.outerAlpha,
              transform: isClicked
                ? `translate(-50%, -50%) scale(${options.clickScale.outer})`
                : isHovered
                  ? `translate(-50%, -50%) scale(${options.hoverScale.outer})`
                  : "translate(-50%, -50%) scale(1)",
              position: "fixed",
              pointerEvents: "none",
              borderRadius: "50%",
              transition: "transform 0.2s ease, opacity 0.2s ease",
              zIndex: 10000,
            }}
          />
          <div
            id="cursor-inner"
            style={{
              left: `${innerPosition.x}px`,
              top: `${innerPosition.y}px`,
              width: options.size.inner,
              height: options.size.inner,
              backgroundColor: options.color,
              transform: isClicked
                ? `translate(-50%, -50%) scale(${options.clickScale.inner})`
                : isHovered
                  ? `translate(-50%, -50%) scale(${options.hoverScale.inner})`
                  : "translate(-50%, -50%) scale(1)",
              position: "fixed",
              pointerEvents: "none",
              borderRadius: "50%",
              transition: "transform 0.2s ease",
              zIndex: 1000,
            }}
          />
        </>
      )}
    </div>
  );
};

export default AnimatedCursor;

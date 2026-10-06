import React, { useEffect, useRef, useState } from "react";

const ProjectEmbed = ({ src, poster, title }) => {
  const slotRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    const node = slotRef.current;
    if (!node || shouldLoad) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLoad]);

  useEffect(() => {
    if (!zoomed) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setZoomed(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [zoomed]);

  const open = () => {
    setShouldLoad(true);
    setZoomed(true);
  };

  return (
    <div className="project-embed-slot" ref={slotRef}>
      <img src={poster} alt={title} />
      {zoomed && (
        <button
          type="button"
          className="project-embed-backdrop"
          aria-label={`Close ${title}`}
          onClick={() => setZoomed(false)}
        />
      )}
      <div className={`project-embed ${zoomed ? "is-zoomed" : ""}`}>
        {shouldLoad && (
          <iframe
            src={src}
            title={title}
            loading="lazy"
            allow="autoplay; fullscreen; gamepad; pointer-lock"
            allowFullScreen
            onLoad={() => setLoaded(true)}
            style={{ opacity: loaded ? 1 : 0 }}
          />
        )}
        {!zoomed && (
          <button type="button" className="project-embed-open" onClick={open}>
            <span>Click to play</span>
          </button>
        )}
        {zoomed && (
          <button
            type="button"
            className="project-embed-close"
            onClick={() => setZoomed(false)}
          >
            Close
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectEmbed;

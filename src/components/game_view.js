import React, { useEffect, useRef, useState } from "react";
import imgApple from "../assets/frameworks/apple.png";
import imgUnity from "../assets/frameworks/unity.png";
import imgWeb from "../assets/frameworks/web.png";
import { games } from "../data/games";
import { openExternalLink } from "../utils/navigation";

const PLATFORM_LINKS = [
  { key: "unityUrl", src: imgUnity, alt: "Unity" },
  { key: "webUrl", src: imgWeb, alt: "Web" },
  { key: "appleUrl", src: imgApple, alt: "Apple" },
];

const GameSlide = ({ game }) => {
  const frameRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = frameRef.current;
    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="game-carousel-slide">
      <div className="game-carousel-frame" ref={frameRef}>
        {active && game.embedUrl && (
          <iframe
            src={game.embedUrl}
            title={game.alt}
            allow="autoplay; fullscreen; gamepad; pointer-lock"
            allowFullScreen
          />
        )}
      </div>
      <div className="game-carousel-links">
        {PLATFORM_LINKS.map(({ key, src, alt }) => {
          const url = game[key];
          if (!url) {
            return null;
          }

          return (
            <img
              key={key}
              src={src}
              alt={alt}
              onClick={() => openExternalLink(url)}
            />
          );
        })}
      </div>
    </div>
  );
};

const GameView = () => {
  const trackRef = useRef(null);
  const dragRef = useRef({
    active: false,
    moved: false,
    startX: 0,
    scrollLeft: 0,
  });
  const canSwipe = games.length > 1;
  const [edges, setEdges] = useState({ atStart: true, atEnd: false, index: 0 });

  const updateEdges = () => {
    const track = trackRef.current;
    const slide = track?.querySelector(".game-carousel-slide");
    if (!track || !slide) {
      return;
    }

    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
    const index = Math.round(track.scrollLeft / (slide.offsetWidth + gap));
    const lastIndex = Math.max(0, track.children.length - 1);

    const nextEdges = {
      index: Math.min(lastIndex, Math.max(0, index)),
      atStart: track.scrollLeft <= 4,
      atEnd: track.scrollLeft + track.clientWidth >= track.scrollWidth - 4,
    };

    setEdges((current) => {
      if (
        current.index === nextEdges.index &&
        current.atStart === nextEdges.atStart &&
        current.atEnd === nextEdges.atEnd
      ) {
        return current;
      }

      return nextEdges;
    });
  };

  useEffect(() => {
    if (!canSwipe) {
      return undefined;
    }

    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [canSwipe]);

  const scrollBySlide = (direction) => {
    const track = trackRef.current;
    const slide = track?.querySelector(".game-carousel-slide");
    if (!track || !slide) {
      return;
    }

    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
    track.scrollBy({
      left: direction * (slide.offsetWidth + gap),
      behavior: "smooth",
    });
  };

  const onPointerDown = (event) => {
    const interactive = event.target.closest(
      "iframe, .game-carousel-links, .game-carousel-button",
    );
    if (!canSwipe || event.button !== 0 || interactive) {
      return;
    }

    const track = trackRef.current;
    dragRef.current = {
      active: true,
      moved: false,
      startX: event.clientX,
      scrollLeft: track.scrollLeft,
    };
    track.style.scrollSnapType = "none";
    track.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event) => {
    if (!dragRef.current.active) {
      return;
    }

    const distance = event.clientX - dragRef.current.startX;
    if (Math.abs(distance) > 6) {
      dragRef.current.moved = true;
    }

    trackRef.current.scrollLeft = dragRef.current.scrollLeft - distance;
  };

  const endDrag = (event) => {
    if (!dragRef.current.active) {
      return;
    }

    dragRef.current.active = false;
    const track = trackRef.current;
    track.style.scrollSnapType = "";
    if (track.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }
    updateEdges();
  };

  const onClickCapture = (event) => {
    if (!dragRef.current.moved) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    dragRef.current.moved = false;
  };

  return (
    <section id="game-view">
      <div className="game-view-title">
        Playable
        <br />
        <span className="game-view-title-highlight">Games</span>
      </div>
      <div className="game-carousel">
        <div
          className={`game-carousel-track${canSwipe ? " is-swipeable" : ""}`}
          ref={trackRef}
          onScroll={updateEdges}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onClickCapture={onClickCapture}
        >
          {games.map((game) => (
            <GameSlide key={game.alt} game={game} />
          ))}
        </div>
        {canSwipe && (
          <div className="game-carousel-controls">
            <button
              type="button"
              className="game-carousel-button"
              aria-label="Previous game"
              disabled={edges.atStart}
              onClick={() => scrollBySlide(-1)}
            >
              ‹
            </button>
            <div className="game-carousel-dots">
              {games.map((game, index) => (
                <button
                  key={game.alt}
                  type="button"
                  className="game-carousel-dot"
                  aria-label={`Show ${game.alt}`}
                  aria-current={index === edges.index}
                  onClick={() => scrollBySlide(index - edges.index)}
                />
              ))}
            </div>
            <button
              type="button"
              className="game-carousel-button"
              aria-label="Next game"
              disabled={edges.atEnd}
              onClick={() => scrollBySlide(1)}
            >
              ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GameView;

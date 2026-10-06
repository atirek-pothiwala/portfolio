import React, { useEffect, useRef, useState } from "react";
import ProjectViewItem from "./project_view_item";
import { games } from "../data/games";

const GameView = () => {
  const trackRef = useRef(null);
  const dragRef = useRef({
    active: false,
    moved: false,
    startX: 0,
    scrollLeft: 0,
  });
  const [edges, setEdges] = useState({ atStart: true, atEnd: false });

  const updateEdges = () => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    setEdges({
      atStart: track.scrollLeft <= 4,
      atEnd: track.scrollLeft + track.clientWidth >= track.scrollWidth - 4,
    });
  };

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, []);

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
      ".project-view-platforms, .game-carousel-button",
    );
    if (event.button !== 0 || interactive) {
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
        <button
          type="button"
          className="game-carousel-button game-carousel-button-prev"
          aria-label="Previous game"
          disabled={edges.atStart}
          onClick={() => scrollBySlide(-1)}
        >
          ‹
        </button>
        <div
          className="game-carousel-track"
          ref={trackRef}
          onScroll={updateEdges}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onClickCapture={onClickCapture}
        >
          {games.map((game) => (
            <div className="game-carousel-slide" key={game.alt}>
              <ProjectViewItem {...game} />
            </div>
          ))}
        </div>
        <button
          type="button"
          className="game-carousel-button game-carousel-button-next"
          aria-label="Next game"
          disabled={edges.atEnd}
          onClick={() => scrollBySlide(1)}
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default GameView;

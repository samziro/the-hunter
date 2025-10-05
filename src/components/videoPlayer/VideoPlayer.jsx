import React, { useEffect, useRef, useCallback } from "react";

/**
 * Accessible, lazy-loading modal VideoPlayer
 *
 * Props:
 *  - playState (bool): whether the player modal is open
 *  - setPlayState (fn): setter to close/open the modal
 *  - videoSrc (string): video file URL (mp4/webm etc.)
 *  - poster (string, optional): preview image URL
 *
 * Notes:
 *  - The video source is only attached to the <video> when playState is true.
 *  - The component traps focus within the modal and supports Escape to close.
 *  - Background scroll is locked while the modal is open.
 */
const VideoPlayer = ({ playState, setPlayState, videoSrc, poster }) => {
  const overlayRef = useRef(null);
  const videoRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Utility: find focusable elements inside a container
  const getFocusable = (el) => {
    if (!el) return [];
    return Array.from(
      el.querySelectorAll(
        'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]'
      )
    ).filter((node) => node.tabIndex !== -1);
  };

  // Close when clicking on overlay (but not when clicking inside the video container)
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      setPlayState(false);
    }
  };

  // Close handler (also used by Escape)
  const handleClose = useCallback(() => {
    setPlayState(false);
  }, [setPlayState]);

  // Keydown handler: Escape to close + basic Tab focus loop
  useEffect(() => {
    if (!playState) return;

    const onKeyDown = (e) => {
      // Escape closes modal
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
        return;
      }

      // Trap focus inside the modal
      if (e.key === "Tab") {
        const focusable = getFocusable(overlayRef.current);
        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          // shift + tab
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          // tab
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [playState, handleClose]);

  // Manage focus / play / pause / scroll lock
  useEffect(() => {
    const videoEl = videoRef.current;
    if (playState) {
      // set focus to the close button so keyboard users are inside the dialog
      setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 0);

      // play the video only if it's available and paused
      if (videoEl) {
        // try to play; muted autoplay is allowed in many browsers, but we prefer user gesture
        // calling play() will work if the open came from user interaction
        const playPromise = videoEl.play?.();
        if (playPromise && playPromise.catch) {
          // ignore play errors (autoplay policies)
          playPromise.catch(() => {});
        }
      }

      // lock background scroll
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        // cleanup on close
        document.body.style.overflow = prevOverflow;
      };
    } else {
      // paused/cleanup when closed
      if (videoEl && !videoEl.paused) {
        try {
          videoEl.pause();
          videoEl.currentTime = 0;
        } catch (e) {}
      }
    }
    // no cleanup here; specific cleanup handled in return above
  }, [playState]);

  // If no videoSrc provided, render nothing (or you can render a fallback UI)
  if (!videoSrc) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label="Video player"
      className={`z-50 top-0 left-0 fixed w-full h-full backdrop-blur-sm bg-black/60 ${playState ? "flex" : "hidden"} items-center justify-center p-4`}
    >
      <div
        className="relative w-full max-w-4xl mx-auto outline-none"
        // stop clicks here from closing modal
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          ref={closeBtnRef}
          onClick={handleClose}
          aria-label="Close video"
          className="absolute -top-3 -right-3 z-50 bg-white text-black rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
        >
          ✕
        </button>

        {/* Video container */}
        <div className="w-full rounded-md overflow-hidden border-2 border-slate-50 bg-black">
          {/* 
            Lazy-load video: only attach src when playState is true.
            We use preload="metadata" so browser fetches minimal info; change to "none" if you want absolutely no network until play.
          */}
          <video
            ref={videoRef}
            className="w-full h-auto block"
            controls
            loop
            muted
            playsInline
            poster={poster}
            preload={playState ? "metadata" : "none"}
            // only provide src when open to avoid network load
            src={playState ? videoSrc : undefined}
          >
            {/* If you have multiple formats, you can use <source> tags here */}
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;

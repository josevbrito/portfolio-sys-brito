"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import type { GalleryImage } from "@/app/types";

interface ProjectGalleryProps {
  images: GalleryImage[];
  projectTitle: string;
}

export function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const open = (i: number) => setActiveIndex(i);
  const close = () => setActiveIndex(null);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  }, [images.length]);

  const next = useCallback(() => {
    setActiveIndex((i) => (i !== null ? (i + 1) % images.length : null));
  }, [images.length]);

  // Keyboard navigation + scroll lock
  useEffect(() => {
    if (activeIndex === null) return;

    document.body.style.overflow = "hidden";

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [activeIndex, prev, next]);

  const [mainImg, ...thumbs] = images;

  return (
    <>
      {/* ── Grid ── */}
      <div className="space-y-3">
        {/* Imagem principal */}
        <button
          onClick={() => open(0)}
          className="w-full aspect-video relative rounded-xl overflow-hidden border border-white/10 group cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          <Image
            src={mainImg.src}
            alt={mainImg.caption}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
          {/* Caption on hover */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex items-center justify-between px-4 py-3 bg-black/75 backdrop-blur-sm">
              <span className="text-white text-sm font-mono truncate">{mainImg.caption}</span>
              <ZoomIn size={16} className="text-primary shrink-0 ml-2" />
            </div>
          </div>
        </button>

        {/* Thumbnails */}
        {thumbs.length > 0 && (
          <div className="grid grid-cols-3 gap-3">
            {thumbs.map((img, i) => (
              <button
                key={i}
                onClick={() => open(i + 1)}
                className="aspect-video relative rounded-lg overflow-hidden border border-white/10 group cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="px-2 py-1.5 bg-black/75 backdrop-blur-sm text-white text-xs font-mono truncate">
                    {img.caption}
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Lightbox ── */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={close}
        >
          {/* Fechar */}
          <button
            onClick={close}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Fechar"
          >
            <X size={22} />
          </button>

          {/* Contador */}
          <span className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 font-mono text-sm">
            {activeIndex + 1} / {images.length}
          </span>

          {/* Seta anterior */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Imagem + legenda */}
          <div
            className="relative flex flex-col items-center w-full max-w-5xl px-16 md:px-24"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
              <Image
                src={images[activeIndex].src}
                alt={images[activeIndex].caption}
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <p className="mt-4 text-white/80 font-mono text-sm text-center">
              {images[activeIndex].caption}
            </p>
            <p className="mt-1 text-white/30 text-xs font-mono">{projectTitle}</p>
          </div>

          {/* Seta próxima */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Próxima"
          >
            <ChevronRight size={32} />
          </button>

          {/* Miniaturas do lightbox */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setActiveIndex(i); }}
                className={`w-12 h-8 relative rounded overflow-hidden border-2 transition-all ${
                  i === activeIndex ? "border-primary scale-110" : "border-white/20 opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={img.src} alt={img.caption} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

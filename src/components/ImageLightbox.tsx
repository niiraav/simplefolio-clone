import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useCallback } from "react";
import { GalleryImage } from "@/data/projects";

interface ImageLightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const ImageLightbox = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}: ImageLightboxProps) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6 text-foreground" />
      </button>

      {/* Previous button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 md:left-8 p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>
      )}

      {/* Image */}
      <div
        className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="max-w-full max-h-[85vh] object-contain rounded-lg"
        />
      </div>

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 md:right-8 p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 text-foreground" />
        </button>
      )}

      {/* Alt text and counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center max-w-[80vw]">
        {images[currentIndex].alt && (
          <p className="text-sm text-foreground mb-2 bg-secondary/80 backdrop-blur-sm px-4 py-2 rounded-lg">
            {images[currentIndex].alt}
          </p>
        )}
        {images.length > 1 && (
          <span className="text-sm text-muted-foreground">
            {currentIndex + 1} / {images.length}
          </span>
        )}
      </div>
    </div>
  );
};

export default ImageLightbox;

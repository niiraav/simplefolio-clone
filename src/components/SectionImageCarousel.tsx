import { useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import ImageLightbox from "./ImageLightbox";
import { GalleryImage } from "@/data/projects";

interface SectionImageCarouselProps {
  images: GalleryImage[];
  title: string;
}

const SectionImageCarousel = ({
  images,
  title
}: SectionImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const next = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const lightboxPrev = () => {
    setLightboxIndex(prev => (prev - 1 + images.length) % images.length);
  };

  const lightboxNext = () => {
    setLightboxIndex(prev => (prev + 1) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="mt-8">
        {/* Carousel Container */}
        <div className="relative rounded-[24px] overflow-hidden bg-muted group">
          {/* Main Image - no alt text shown in carousel */}
          <div 
            className="relative cursor-zoom-in"
            onClick={() => openLightbox(currentIndex)}
          >
            <img
              src={images[currentIndex].src}
              alt=""
              className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
            {/* Hover overlay with zoom icon */}
            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background transition-colors opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background transition-colors opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </>
          )}
        </div>

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="flex justify-center mt-3 gap-2">
            <span className="text-sm text-muted-foreground">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        )}
      </div>

      <ImageLightbox 
        images={images} 
        currentIndex={lightboxIndex} 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)} 
        onPrev={lightboxPrev} 
        onNext={lightboxNext} 
      />
    </>
  );
};

export default SectionImageCarousel;
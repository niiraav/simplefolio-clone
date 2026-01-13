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
  
  const currentImage = images[currentIndex];
  if (!currentImage) return null;
  
  return (
    <>
      <div className="relative">
        {/* Main Image */}
        <div 
          className="relative rounded-xl overflow-hidden cursor-pointer group"
          onClick={() => openLightbox(currentIndex)}
        >
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-background transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-background transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {images.length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
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
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
  return <>
      

      <ImageLightbox images={images} currentIndex={lightboxIndex} isOpen={lightboxOpen} onClose={() => setLightboxOpen(false)} onPrev={lightboxPrev} onNext={lightboxNext} />
    </>;
};
export default SectionImageCarousel;
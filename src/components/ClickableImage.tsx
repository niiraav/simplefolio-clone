import { useState } from "react";
import { ZoomIn } from "lucide-react";
import ImageLightbox from "./ImageLightbox";
import { GalleryImage } from "@/data/projects";

interface ClickableImageProps {
  image: GalleryImage;
}

const ClickableImage = ({ image }: ClickableImageProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <div className="mt-8 relative rounded-[24px] overflow-hidden bg-muted group cursor-pointer">
        <img
          src={image.src}
          alt=""
          className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          onClick={() => setLightboxOpen(true)}
        />
        
        {/* Hover overlay with zoom icon */}
        <div
          className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-300 flex items-center justify-center"
          onClick={() => setLightboxOpen(true)}
        >
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/90 rounded-full p-3">
            <ZoomIn className="w-6 h-6 text-foreground" />
          </div>
        </div>
      </div>

      <ImageLightbox
        images={[image]}
        currentIndex={0}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => {}}
        onNext={() => {}}
      />
    </>
  );
};

export default ClickableImage;
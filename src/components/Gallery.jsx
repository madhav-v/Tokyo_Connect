import { useState } from "react";
import { galleryImages } from "../data/websiteData";
import { X } from "lucide-react";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="section soft-section">
      <div className="section-heading">
        <p>Gallery</p>
        <h2>Moments students remember</h2>
        <span>
          A visual look at the kind of experiences TABI creates for
          international students.
        </span>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <button
            className="gallery-item"
            key={index}
            onClick={() => setSelectedImage(image)}
          >
            <img src={image} alt={`TABI travel moment ${index + 1}`} />
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className="image-modal-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <div className="image-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="image-modal-close"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>

            <img src={selectedImage} alt="Selected TABI travel moment" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;

import { galleryImages } from "../data/websiteData";

function Gallery() {
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
          <img
            key={index}
            src={image}
            alt={`TABI travel moment ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;

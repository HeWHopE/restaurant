import React from "react";

const totalPhotos = 42; // Total number of photos
const galleryPath = "gallery/";

const Gallery: React.FC = () => {
  // Generate an array of photo URLs
  const photos = Array.from({ length: totalPhotos }, (_, index) => {
    return `${galleryPath}photo${index + 1}.JPG`;
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
      {photos.map((photo, index) => (
        <div key={index} className="rounded overflow-hidden shadow-md">
          <img
            src={photo}
            alt={`Photo ${index + 1}`}
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;

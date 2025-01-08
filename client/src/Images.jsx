import { useState, useEffect } from 'react';

const Images = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/images');
        const imageFiles = await response.json();
        setImages(imageFiles);
        console.log(imageFiles[0])
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h2>Uploaded Images</h2>
      <div className="image-gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={`http://localhost:3000/images/${image[0]}`}
            alt={image}
            style={{ width: '200px', height: '200px', margin: '10px' }}
          />
        ))}
      </div>
    </div>
  );
};

export default Images;

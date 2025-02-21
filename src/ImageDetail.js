import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ImageDetails.css'; // Import the CSS file

const ImageDetail = () => {
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/images/${id}`);
        setImage(response.data);
      } catch (error) {
        setError('Image not found.');
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="card">
      <div className="card-image">
      <img src={`http://localhost:8080${image.urls.small}`} alt={image.alt_description} />
      </div>
      <div className="card-content">
        <h2>{image.alt_description}</h2>
        <p className="memory">{image.memory}</p>
      </div>
    </div>
  );
};

export default ImageDetail;

import React from 'react';
import './KirbyImage.css';
import { Link } from 'react-router-dom';

const KirbyImage = ({ image }) => {
    return (
        <div className="image-item">
          <Link to={`/image/${image.id}`}>
            <img src={`http://localhost:8080${image.urls.small}`} alt={image.alt_description || 'Image'} />
          </Link>
          <div>
            <p className="kirbyMem">{image.memory}</p>
          </div>
        </div>
      );
    };
  
  export default KirbyImage;
  
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import KirbyImage from './KirbyImages'; 
import Header from './Header';
import ImageDetail from './ImageDetail'; 

const App = () => {
  const [images, setImages] = useState([]);
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const nickNames = ["Fuzzy Fluffy", "Snuggly Puppy", "Good Girl J Dog"]; 
  const [nickName, setNickName] = useState(nickNames[Math.floor(Math.random() * nickNames.length)]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const imageRes = await axios.get('http://localhost:8080/api/images');
        setImages(imageRes.data);
        const factRes = await axios.get('http://localhost:8080/api/fact');
        setFacts(factRes.data);
        setLoading(false);
      } catch (error) {
        setError('Something went wrong while fetching data.');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Router>
      <Header nickName={nickName}/>
      <Routes>
        <Route path="/" element={
          <div className="image-gallery">
            {images.map((image) => (
              <KirbyImage key={image.id} image={image} />
            ))}
          </div>
        } />
        <Route path="/image/:id" element={<ImageDetail />} />
      </Routes>
    </Router>
  );
};

export default App;

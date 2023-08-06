import React, { useState } from "react";
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';


const App = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (query) => {
    setQuery( query );
  };

  return (
      <div className="App">
        <Searchbar onSubmit={handleSubmit} />
        <ImageGallery query={query} /> 
      </div>
    );
  }

export default App;
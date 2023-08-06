import React, { Component } from "react";
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';


class App extends Component {
  state = {
    query: '', 
  };

  handleSubmit = (query) => {
    this.setState({ query });
  };

  render() {
    const { query } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery query={query} /> 
      </div>
    );
  }
}

export default App;
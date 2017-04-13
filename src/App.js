import React from 'react';
import ImageViewArea from './components/ImageViewArea';
import startingImages from './default_images';

// Top level application component.
class App extends React.Component {
  state = {
    images: startingImages.Images,
    viewingIdx: 0
  };

  addNewImage = (imageData) => {
    const newImages = this.state.startingImages;
    newImages.images.push(imageData);
    this.setState({images: newImages})
  }

  nextImageDisabled = () => {
    if (this.state.viewingIdx === this.state.images.length - 1) return true;
    return false;
  }

  previousImageDisabled = () => {
    if (this.state.viewingIdx === 0) return true;
    return false;
  }

  nextImage = () => {
    if (!this.nextImageDisabled()) {
      this.setState({viewingIdx: this.state.viewingIdx + 1})
    }
  }

  previousImage = () => {
    if (!this.previousImageDisabled()) {
      this.setState({viewingIdx: this.state.viewingIdx - 1})
    }
  }

  render() {
    return (
      <div className="App">
        <ImageViewArea image={this.state.images[this.state.viewingIdx]}
          nextImageDisabled={this.nextImageDisabled()}
          previousImageDisabled={this.previousImageDisabled()}
          nextImage={this.nextImage}
          previousImage={this.previousImage}/>
      </div>
    );
  }
}

export default App;

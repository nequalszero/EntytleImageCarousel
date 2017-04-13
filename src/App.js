import React from 'react';
import ImageViewArea from './components/ImageViewArea';
import NewImageModal from './components/NewImageModal';
import startingImages from './misc/default_images';

// Top level application component.
class App extends React.Component {
  state = {
    images: startingImages.Images,
    viewingIdx: 0,
    modalIsOpen: false
  };

  // Adds a new image to the state and closes the modal.
  addNewImage = (imageData) => {
    const newImages = this.state.images;
    newImages.push(imageData);
    this.setState({images: newImages, modalIsOpen: false})
  }

  openNewImageModal = () => {
    this.setState({modalIsOpen: true})
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  // Checks whether the current image being displayed is the last image.
  nextImageDisabled = () => {
    return (this.state.viewingIdx === this.state.images.length - 1);
  }

  // Checks whether the current image being displayed is the first image.
  previousImageDisabled = () => {
    return (this.state.viewingIdx === 0);
  }

  // Moves to the previous image provided not already on the first one.
  nextImage = () => {
    if (!this.nextImageDisabled()) {
      this.setState({viewingIdx: this.state.viewingIdx + 1})
    }
  }

  // Moves to the next image provided not already on the last one.
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
          previousImage={this.previousImage}
          openNewImageModal={this.openNewImageModal}/>
        <NewImageModal modalIsOpen={ this.state.modalIsOpen }
          onRequestClose={ this.closeModal }
          onSubmit={ (newImage) => this.addNewImage(newImage) }/>
      </div>
    );
  }
}

export default App;

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

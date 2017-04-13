import React from 'react';
import classNames from 'classnames';

// Component that represents the image being displayed, the image name, and the previous,
//   next, and add image buttons.
const ImageViewArea = (props) => {
  // Returns the correct CSS classes for the previous and next buttons.
  const buttonClass = (type) => {
    const next = type === "next" ? true : false;
    const disabled = type === "next" ? props.nextImageDisabled : props.previousImageDisabled

    return classNames({
      next: next,
      previous: !next,
      'change-image': true,
      disabled: disabled,
      enabled: !disabled
    });
  }

  return(
    <div className="image-view-area-container">
      <div className="image-view-area">
        <button className={buttonClass('next')} onClick={props.nextImage}>
          Next
        </button>
        <button className={buttonClass('previous')} onClick={props.previousImage}>
          Previous
        </button>
        <div className="image-name-container">
          <div className="image-name">{props.image.name}</div>
        </div>
        <div className="add-image-container">
          <button className="add-image" onClick={props.openNewImageModal}>
            Add Image
          </button>
        </div>
        <div className="image-display">
          <img src={props.image.path} alt={props.image.name}/>
        </div>
      </div>
    </div>
  );
}

export default ImageViewArea;

import React from 'react';
import classNames from 'classnames';

const ImageViewArea = (props) => {
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

import React from 'react';
import Modal from 'react-modal';
import classNames from 'classnames';

const customStyle = {
  content: {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    padding               : '0px 0px',
    font                  : '16px sans-serif',
    borderRadius          : '0px',
    boxShadow             : '0px 10px 25px rgba(0, 0, 0, 0.5)',
    width                 : '50%'
  }
};

class NewImageModal extends React.Component {
  state = {
    path: "",
    name: ""
  }

  handleChange = (field, value) => {
    this.setState({[`${field}`]: value})
  }

  validInputs = () => {
    return (this.state.path.length > 0 && this.state.name.length > 0)
  }

  submitForm = (e) => {
    e.preventDefault();
    if (this.validInputs()) {
      const newImage = { path: this.state.path, name: this.state.name };
      this.props.onSubmit(newImage);
    }
  }

  render() {
    return (
      <Modal isOpen={ this.props.modalIsOpen }
        onRequestClose={ this.props.onRequestClose }
        contentLabel="Modal"
        style={customStyle}>
        <div className="new-image-modal">
          <form onSubmit={(e) => this.submitForm(e)}>
            <h2 className="title">Add New Image</h2>

            <label>Source</label>
            <br/>
            <input type="text"
              onChange={(e) => this.handleChange('path', e.target.value)}
              value={this.state.path}/>
            <br/><br/>

            <label>Name</label>
            <br/>
            <input type="text"
              onChange={(e) => this.handleChange('name', e.target.value)}
              value={this.state.name}/>
            <br/><br/>

            <div className="button-container">
              <button type="submit">Add New Image</button>
            </div>
          </form>
        </div>
      </Modal>
    );
  }
}

export default NewImageModal;

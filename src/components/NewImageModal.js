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

// Modal with a form to add new images.
class NewImageModal extends React.Component {
  state = {
    path: "",
    name: ""
  }

  // Updates the appropriate key in the state upon changes in the input boxes.
  handleChange = (field, value) => {
    this.setState({[`${field}`]: value})
  }

  // Checks whether either of the input boxes are empty.
  validInputs = () => {
    return (this.state.path.length > 0 && this.state.name.length > 0)
  }

  // Checks that neither input box is empty, and then dispatches an action to update
  //   the parent App's state and reset the modal's state.
  submitForm = (e) => {
    e.preventDefault();
    if (this.validInputs()) {
      const newImage = { path: this.state.path, name: this.state.name };
      this.props.onSubmit(newImage);
      this.setState({path: "", name: ""});
    }
  }

  // Clears the modal's state before dispatching an action to close the modal.
  closeForm = () => {
    this.props.onRequestClose();
    this.setState({path: "", name: ""});
  }

  render() {
    return (
      <Modal isOpen={ this.props.modalIsOpen }
        onRequestClose={ this.closeForm }
        contentLabel="Modal"
        style={customStyle}>
        <div className="new-image-modal">
          <form onSubmit={(e) => this.submitForm(e)}>
            <h2 className="title">Add New Image</h2>

            <label>Path</label>
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

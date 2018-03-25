import React from 'react';
import { Modal } from 'react-bootstrap';

class CampaignForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: '',
      imgUrl: ''
    }
    this.setFileName = this.setFileName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetFormAndClose = this.resetFormAndClose.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // let file = this.fileInput.files[0];
    // let fileName = this.state.fileName;
    let newCampaign = { name: this.state.fileName, data: "blah", imgUrl: "https://i.imgur.com/QyK5505.jpg" };
    // uncomment when endpoint is built out;
    this.uploadFile(newCampaign);
    //before close triggers, should have spinner activate
    this.resetFormAndClose();
  }

  setFileName(e) {
    this.setState({
      fileName: e.target.value,
    });
  }

  resetFormAndClose(e) {
    this.setState({ fileName: "" });
    this.fileInput.value = "";
    this.props.onClose(e);
  }

  uploadFile(campaign) {
    // let data = new FormData();
    // data.append('file', file);
    // data.append('filename', fileName)
    fetch("http://localhost:3000/api/campaigns/add", {
      method: 'POST',
      body: JSON.stringify(campaign),
      headers: {"Content-Type": "application/json"}
    })
    .then(() => this.props.addCampaign(campaign));
  }

  render() {
    return <div className="modal-container">
      <Modal show={this.props.active} onHide={this.resetFormAndClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload an image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>
            <img src={this.state.imgUrl} />
          </h4>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input type="file" ref={input => this.fileInput = input}/>
            </div>
            <div>
              <input type="text" value={this.state.fileName} onChange={this.setFileName} placeholder="Please enter a description for the image"/>
            </div>
            <div>
              <button>Upload</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  }
}

export default CampaignForm;
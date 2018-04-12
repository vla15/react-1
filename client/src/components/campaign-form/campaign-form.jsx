import React from 'react';
import { Modal } from 'react-bootstrap';

class CampaignForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: '',
      file: '',
      imgUrl: '',
      formData: '',
    }
    this.setFileName = this.setFileName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetFormAndClose = this.resetFormAndClose.bind(this);
    this.handleImage = this.handleImage.bind(this);
  }

  handleImage(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    let data = new FormData();
    data.append('image', file)
    reader.readAsDataURL(file);
    reader.onloadend = (e) => {
      this.setState({
        file: file,
        imgUrl: reader.result,
        formData: data
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let newCampaign = {
      name: this.state.fileName,
      data: "null",
    };
    this.uploadFile(newCampaign);
    this.resetFormAndClose();
  }

  setFileName(e) {
    this.setState({
      fileName: e.target.value,
    });
  }

  resetFormAndClose(e) {
    this.setState({
      fileName: "",
      imgUrl: '',
    });
    this.fileInput.value = "";
    this.props.onClose(e);
  }

  async uploadFile(campaign) {
    let id;
    let data = await fetch("http://localhost:3000/api/campaigns", {
      method: 'POST',
      body: JSON.stringify(campaign),
      headers: {"Content-Type": "application/json"}
    })
    data = await data.json();
    id = data._id
    let imgData = await fetch(`http://localhost:3000/api/campaigns/${id}`, {
      method: 'PUT',
      body: this.state.formData
    })
    imgData = await imgData.json()
    campaign.img = imgData.imgData;
    campaign._id = id;
    this.props.addCampaign(campaign);
  }

  render() {
    let imgPreview = this.state.imgUrl ? <img src={this.state.imgUrl}/> : null;
    return <div className="modal-container">
      <Modal show={this.props.active} onHide={this.resetFormAndClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload an image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>
            {imgPreview}
          </h4>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input type="file" onChange={this.handleImage} ref={input => this.fileInput = input}/>
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
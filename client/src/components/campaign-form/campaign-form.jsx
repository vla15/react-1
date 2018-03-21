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
    this.uploadFile = this.uploadFile.bind(this);
  }

  uploadFile(e) {
    let file = this.fileInput.files[0];
    let fileName = this.state.fileName;
    this.setState({
      fileName: '',
    })
    this.fileInput.value = '';
    //before close triggers, should have spinner activate
    this.props.onClose(e);
  }

  setFileName(e) {
    this.setState({
      fileName: e.target.value,
    });
  }

  render() {
    return <div className="modal-container">
      <Modal show={this.props.active}>
        <img src={this.state.imgUrl} />
        <form onSubmit={this.uploadFile}>
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
      </Modal>
    </div>
  }
}

export default CampaignForm;
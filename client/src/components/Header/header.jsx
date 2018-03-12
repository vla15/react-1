import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="header-container">
        <div className="header-title">Unnamed Application</div>
        <div className="header-items-container">
          <div className="header-item">Campaigns</div>
          <div className="header-item">Past Campaigns</div>
        </div>
      </div>;
  }
}
import React from 'react';
import { Glyphicon, Button } from 'react-bootstrap';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return { active: !prevState.active }
    })
  }

  render() {
      return <Button bsSize="large" onClick={this.handleClick}>
          <Glyphicon glyph={this.state.active ? "heart" : "heart-empty"}/>
        </Button>
  }
}

export default LikeButton;
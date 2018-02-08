import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends PureComponent{

  state = {
    author: 'Daniel Morales'
  }

  handleClick = (event) => {
    this.props.openModal(this.props);
  }

  render(){
    return(
      <div className="Media" onClick={this.props.handleClick}>
        <div className="Media-cover">
          <img
              src={this.props.cover}
              alt=""
              width={240}
              height={160}
              className="Media-image"
          />
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.props.author}</p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string
}

export default Media;

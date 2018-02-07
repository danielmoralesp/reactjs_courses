import React from 'react';
import './media.css';

class Media extends React.Component{
  render(){
    return(
      <div className="Media">
        <div className="Media-cover">
          <img
              src={this.props.image}
              alt=""
              width={260}
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

export default Media;

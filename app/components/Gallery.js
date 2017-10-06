import React, { Component } from 'react';

class Gallery extends Component {
  render() {
    let alternate = 'http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-image-missing-icon.png';
    return (
      <div>
        {
          this.props.items.map((item,index) => {
            let {title, imageLinks, infoLink} = item.volumeInfo;
            return (
              <div key={index} className="book">
                <img
                  src={imageLinks !== undefined ? imageLinks.thumbnail : alternate} alt="book image" className="book-img"/>
                <div className="book-text">
                    {title}
                </div>

              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Gallery;

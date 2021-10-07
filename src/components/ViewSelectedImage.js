import React, { Component } from "react";
import "./ViewSelectedImageStyle.css";
import '.././Landing.css';

const publicURL = process.env.PUBLIC_URL;



class ImageComponent extends Component {
  constructor(props) {
    super(props);

    const source = this.props.imageSource;
    const sourceThumbnail = this.props.imageSourceThumbNail;
    const altText = this.props.imageAltText;
    const newClassName = this.props.imageClassName;

    this.state = { isOpen: false };

    this.newImage = { 
      imgSource: source,
      imgSourceThumbnail: sourceThumbnail,
      imgAltText: altText,
      imgNewClassName: newClassName
    }

    console.log("imageSource: " + this.newImage.imgSource);
  }  

  

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });

    console.log("cliked");
  };

  render() {

    

    return (
      <div >
        {console.log("source image location: " + this.newImage.imgSource)}
        {console.log("current state: " + this.state.isOpen)}
        <img
          style={{ border: '1px solid gray', width: '247px', height: '134px' }}
          className={this.newImage.imgNewClassName}
          src={ /*publicURL + */this.newImage.imgSourceThumbnail }
          onClick={ this.handleShowDialog }
          alt={ this.newImage.imgAltText }
        />
        <h5 style={{ position: 'relative', top: '-17%', left: '25%', color: 'black', backgroundColor: 'gray', width: '150px', border: '1px solid black', textAlign: 'center', pointerEvents: 'none' }}>Click to Enlarge</h5>

        {this.state.isOpen && (
          <dialog
            className="dialog"
            style={{  }}
            open
            onClick={ this.handleShowDialog }
            
          >
            {console.log("Show large image")}
            <img className='background'
              style={{ width: '100%', height: '100%' }}
              src={publicURL + "/Images/MyBGs/GraySmallBG.png"}
              onClick={ this.handleShowDialog }
              />
            <img  
              className='divElement'
              style={{ border: '1px solid gray', maxWidth: '100%', maxHeight: '100%', textAlign: 'center' }}
              src={ /*publicURL + */this.newImage.imgSource }
              onClick={ this.handleShowDialog }
              alt={ this.newImage.imgAltText }
            />
          </dialog>
        )}
      </div>
    );
  }
}


export default ImageComponent;
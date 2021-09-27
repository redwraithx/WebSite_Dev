import React, { Component } from 'react';
import { Footer } from 'react-mdl';
import '.././LoadFooter.css';
import ScrollToTopButton from '../ProjectData/ScrollToTop';

class LoadFooter extends Component {

  render() {
    return(
      <div className="loadFooter" style={{ width: '100%', marginBottom: '10px', borderTop: '1px solid  rgb(6, 12, 31)' }} >

          

        <Footer size="2" style={{ paddingTop: '20px' }}>
            <div align="center">
                BrianPurdy.ca @ 2021, best viewed @ 1920x1080 resolution.
            </div>
        </Footer>

      </div>

    )
  }
}

export default LoadFooter;

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


        <div align="center" style={{ color: 'white', paddingTop: '20px', paddingBottom: '0px' }}>
          
          {/* <!-- hitwebcounter Code START --> */}
          
            <a href="https://www.hitwebcounter.com" target="_blank">
              <img src="https://hitwebcounter.com/counter/counter.php?page=7890711&style=0010&nbdigits=5&type=ip&initCount=0" title="Free Counter" Alt="web counter"   border="0" />
            </a>
          
          {/* <!-- hitwebcounter Code END --> */}

        </div>



      </div>

    )
  }
}

export default LoadFooter;

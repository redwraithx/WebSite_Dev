import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import LoadFooter from './LoadFooter';
import '.././Contact.css'



class Contact extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
    return(
      <div style={{width: '100%', margin: 'auto', marginTop: '2em' }}  >
        <Grid className="contact-grid">
         <Cell col={6} style={{ marginBottom: '6em' }}>
            <img
              src={process.env.PUBLIC_URL + "/Images/MyIcons/knight_512x512.png"}
              alt="avatar"
              style={{height: '250px', marginBottom: '2px' }}
              />
              <h2 className style={{ color: '#84d2f6', marginTop: '1em', marginBottom: '20px' }}>Brian Purdy</h2>
            <p style={{ color: 'lightgray', textAlign: 'left', fontSize: '130%', maxWidth: '65%', margin: 'auto', paddingTop: '4px', paddingLeft: '4px', paddingRight: '4px', paddingBottom: '4px' }}>
            Learning is a journey not a destination. If you have suggestions on my next personal project or just want to network, send me an email.<br /><br />
              Until then, cheers!
            </p>

          { /* </Cell>
          <Cell col={6} style={{ marginLeft: '1em' }}> */ }
            <div className="Contact-type-title" style={{ marginTop: '2em', justifyContent: 'center' }}>
              <h2 className="ContactTextHeader" style={{ color: '#84d2f6' }} ><u>Contact Me</u></h2>
              
            

              <div className="contact-list" style={{ display: 'flex',  justifyContent: 'center', alignContent: 'center' }} >
                <List>
                  { /*
                  <ListItem>
                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton', border: '2px solid magenta' }} className="PhoneInfo">
                      <i className="fa fa-phone-square" aria-hidden="true">
                        <button onClick={() =>  ClipboardEvent.Clipboard.setData('Text', '(902) 210-8215')} className="PhoneButton">(902) 210-8215</button>
                      </i>
                    </ListItemContent>
                  </ListItem>
                  */ }

                  <ListItem>
                    <ListItemContent style={{  }} className="EmailInfo">
                      <div className="EmailFrame" style={{ display:'inline-flex' }}>
                      {/* <i className="fa fa-envelope" aria-hidden="false" style={{  }} /> */}
                        <img src={process.env.PUBLIC_URL + "/Images/MyIcons/Email.png"}  alt="email image" />
                        <a className="EmailButton" href="mailto:brianpurdy@live.com" style={{ paddingLeft: '10px', paddingTop: '5px'  }} >brianpurdy@live.com</a>
                    {/*   <form id="formEmail" action="mailto:brianpurdy@live.com" method="post" >
                          <input type="action" id="email" />
                          <input type="button" id="buttonEmail" value="click" />
                        </form>
                   */ }
                      { /* <button onClick={ () =>  window.Clipboard.setData("Text", 'brianpurdy@live.com') } className="EmailButton">BrianPurdy@live.com</button> */ }
                      </div>
                    </ListItemContent>
                  </ListItem>

                </List>
              </div>
            </div>

          </Cell>
          
          <LoadFooter  />

        </Grid>

        

      </div>



    )
  }
}

export default Contact;

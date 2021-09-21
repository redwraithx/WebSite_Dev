import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import '.././Contact.css'



class Contact extends Component {

  
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}} scroll>
        <Grid className="contact-grid">
         <Cell col={6}>
            <img
              src={process.env.PUBLIC_URL + "/Images/MyIcons/knight_512x512.png"}
              alt="avatar"
              style={{height: '250px', marginBottom: '2px' }}
              />
              <h2 style={{ marginTop: '1em', marginBottom: '4px' }}>Brian Purdy</h2>
            <p style={{ fontSize: '140%', width: '75%', margin: 'auto', paddingTop: '4px', paddingLeft: '4px', paddingRight: '4px', paddingBottom: '4px' }}>
              CHANGE ME: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
            </p>

          { /* </Cell>
          <Cell col={6} style={{ marginLeft: '1em' }}> */ }
            <div className="Contact-type-title" style={{ marginTop: '4em', justifyContent: 'center' }}>
              <h1>Contact Me</h1>
              <hr/>
            

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
                  <ListItemContent style={{  fontSize: '10px', fontFamily: 'Anton', width: 'auto' }} className="PhoneInfo">
                    <i className="fa fa-envelope" aria-hidden="true" style={{ alignContent: 'center' }}>
                      <a href="mailto:brianpurdy@live.com" style={{ marginLeft: '10px', alignSelf: 'center', fontSize: '70%' }} >brianpurdy@live.com</a>
                   {/*   <form id="formEmail" action="mailto:brianpurdy@live.com" method="post" >
                        <input type="action" id="email" />
                        <input type="button" id="buttonEmail" value="click" />
                      </form>
    */ }
                     { /* <button onClick={ () =>  window.Clipboard.setData("Text", 'brianpurdy@live.com') } className="EmailButton">BrianPurdy@live.com</button> */ }
                    </i>
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;

import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import '.././Contact.css'

class Contact extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}} scroll>
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Brian Purdy</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
               </p>

          </Cell>
          <Cell col={6}>
            <div className="Contact-type-title">
              <h2>Contact Me</h2>
              <hr/>
            </div>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton' }} className="PhoneInfo">
                    <i className="fa fa-phone-square" aria-hidden="true">
                      <button onClick={() =>  window.clipboardData.setData("Text", '(902) 210-8215')} className="PhoneButton">(902) 210-8215</button>
                    </i>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton' }} className="PhoneInfo">
                    <i className="fa fa-envelope" aria-hidden="true">
                      <button onClick={() =>  window.clipboardData.setData("Text", 'brianpurdy@live.com')} className="EmailButton">BrianPurdy@live.com</button>
                    </i>
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;

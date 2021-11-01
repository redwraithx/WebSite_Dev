import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import LoadFooter from './LoadFooter';
import '.././Contact.css'



class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);

  }



  componentDidMount() {
    window.scrollTo(0, 0)
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    
    // debuging output REMOVE THIS ONCE IT IS COMPLETE
    console.log(this.state);

    fetch('http://localhost:3002/send', {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(
      (response) => (response.json())
    ).then((response)=> {
      if(response.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if(response.status === 'fail') {
        alert("Message failed to send.")
      }
    })

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
              
            

              { /* <div className="contact-list" style={{ display: 'flex',  justifyContent: 'center', alignContent: 'center' }} > */ }
              <div className="contact-list" style={{ border: '1 solid magenta', display: 'flex',  justifyContent: 'center', alignContent: 'center' }} >
                <List hidden>
                  { /*
                  <ListItem>
                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton', border: '2px solid magenta' }} className="PhoneInfo">
                      <i className="fa fa-phone-square" aria-hidden="true">
                        <button onClick={() =>  ClipboardEvent.Clipboard.setData('Text', '(902) 210-8215')} className="PhoneButton">(902) 210-8215</button>
                      </i>
                    </ListItemContent>
                  </ListItem>
                  */ }

                  { /* Old Mail System */ }
                  <ListItem hidden>
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



                { /* New Mail System */ }
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                  <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                  </div>
                  <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                  </div>
                  <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)}></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>




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

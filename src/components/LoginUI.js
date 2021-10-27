import React, { Component } from "react";
//import axios from "axios";

import Registration from "./Auth/RegisterCode";
import Login from "./Auth/Login";

export default class Home extends Component {
  constructor(props) {
    super(props);

    console.log("loggedInStatus: " + this.props.loggedInStatus);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/");
  }

  handleLogoutClick() {
    // axios
    //   .delete("http://localhost:3001/logout", { withCredentials: true })
    //   .then(response => {
    //     this.props.handleLogout();
    //   })
    //   .catch(error => {
    //     console.log("logout error", error);
    //   });
    
    
    fetch
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then(response => {
        this.props.handleLogout();
      })
      .catch(error => {
        console.log("logout error", error);
      });



  }

  render() {
    return (
      <div>
        <br />
        <h5 style={{ color: 'white', textAlign: 'center' }}>
          status: {this.props.loggedInStatus}
        </h5>
        <button onClick={() => this.handleLogoutClick()}>Logout</button>
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
        <br /><br />
        <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
      </div>
    );
  }
}
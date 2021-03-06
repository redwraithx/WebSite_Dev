import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <Grid scroll>
        <Cell col={4}>
          <p >{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}  >
          <h4 style={{}}>{this.props.schoolName}</h4>
          <p style={{ textAlign: 'left' }} >{this.props.schoolDescription}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Education;

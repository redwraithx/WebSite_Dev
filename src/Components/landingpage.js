import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    
                    <Cell col={12}>
                        
                        <img 
                            src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1 align="center">Video Game Programming and Design</h1>

                            <hr />

                            <p><b>[</b> C# and Unity 3D <b>][</b> C++ and Unreal <b>][</b> HTML and CSS <b>]</b></p>

                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;
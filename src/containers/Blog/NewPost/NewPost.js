import React, { Component } from 'react';
import logo from '../../../img/image0.jpeg';

import './NewPost.css';

class NewPost extends Component {
    state = {
        fullName: '',
        email: '',
    }

    render () {
        return (
            <div className="home-wrapper">
                <div className="banner-wrapper">
                    <div className="banner">
                        <img src={logo} alt="Samsung Next Banner" width="800" height="400"></img>
                    </div>
                </div>
                <div className="home-flex-container">

                </div>
                <div className="NewPost">
                    <h1>Information</h1>
                    <label>Full Name<span style={{color:"#dc3545"}}>*</span></label>
                    <input type="text"></input>
                    <label>Email<span style={{color:"#dc3545"}}>*</span></label>
                    <input type="text" />
                    <label>Country<span style={{color:"#dc3545"}}>*</span></label>
                    <select>
                        <option value="country">United States</option>
                        <option value="country">Korea</option>
                        <option value="country">Israel</option>
                        <option value="country">Germany</option>
                    </select>
                    <label>Department<span style={{color:"#dc3545"}}>*</span></label>
                    <select>
                        <option value="department">Talent Acquisition</option>
                        <option value="department">Marketing</option>
                        <option value="department">Engineering</option>
                        <option value="department">Finance</option>
                        <option value="department">Product</option>
                    </select>
                    <label>Position / Title<span style={{color:"#dc3545"}}>*</span></label>
                    <input type="text"></input>
                    <label>Please insert the link to your LinkedIn Profile</label>
                    <input type="text" placeholder="https://"></input>
                    <button>Submit Information</button>
                </div>
            </div>
        );
    }
}

export default NewPost;
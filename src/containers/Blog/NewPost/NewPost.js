import React, { Component } from 'react';
import logo from '../../../img/samsung.jpeg';

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
                        <img src={logo} alt="Samsung Next Banner" width="750" height="400"></img>
                        <div className="banner-name">
                            <h1>Next</h1>
                            <h1>Connector</h1>
                        </div>
                    </div>
                </div>
                <div className="home-flex-container">
                    <div className="info">
                        {/* <h1 className="next-head">Next Connector</h1> */}
                        <p>Samsung Next's priority will always be to elevate their people, past and present.<br></br><br></br>
                            We are launching our Samsung Next Talent Directory in order to connect indidviduals to talent and opportunities.
                            If you are interested in joining our private talent directory, please 
                            submit your information by entering in the form. If you would simply like to view a list of 
                            open reqs at our partner companies, please navigate to "partners tab".<br></br><br></br>
                            <span className="ital">Once a Nexter, always a Nexter</span><br></br><br></br>
                            -Samsung Next Talent Acquisition
                        </p>
                    </div>
                    <div className="NewPost">
                        <h1>Your Info</h1>
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
            </div>
        );
    }
}

export default NewPost;
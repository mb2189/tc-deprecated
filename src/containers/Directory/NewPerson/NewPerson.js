import React, { Component } from 'react';
import logo from '../../../img/avengers.png';

import './NewPerson.css';

class NewPerson extends Component {
    state = {
        fullName: '',
        email: '',
    }

    render () {
        return (
            <div className="home-wrapper">
                {/* <div className="banner-wrapper">
                    <div className="banner">
                        <img src={logo} alt="Company Banner" width="750" height="400" className="logo"></img>
                    </div>
                </div> */}
                <div className="home-flex-container">
                    <div className="info">
                        <h1 className="next-head">Talent Connector</h1><br></br>
                        <p>Our goal will always be to elevate our people, past and present.<br></br><br></br>
                            We are launching our Talent Directory in order to connect individuals to talent and opportunities.
                            If you are interested in joining our private talent directory, please 
                            submit your information by entering in the form. If you do not want to be listed in the directory, but are still
                            interested in viewing open positions with
                            our partner companies, please navigate to "partners tab".<br></br><br></br>
                        </p>
                    </div>
                    <div className="NewPerson">
                        <h1>Your Information</h1>
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

export default NewPerson;

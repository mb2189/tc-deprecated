import React from 'react';

import './Company.css';

const company = (props) => (
    <article className="Company" onClick={props.clicked}>
        <h1>{props.entity}</h1>
        <p>Location: {props.location}</p>
        <p>Contact: {props.contact}</p>
        <p>Title: {props.title}</p>
        <p>Email: {props.email}</p>
        <div className="link">
            <a href={props.link} target="_blank">List of Open Jobs</a>
        </div>
    </article>
);

export default company;
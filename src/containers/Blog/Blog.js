import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import Companies from './Companies/Companies';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/talent">Talent</Link></li>
                            <li><Link to="/companies">Partners</Link></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={NewPost} />
                <Route path="/talent" component={Posts} />
                <Route path="/companies" component={Companies} />
            </div>
        );
    }
}

export default Blog;
import React, { Component } from 'react';

import Company from '../../../components/Company/Company';
import './Companies.css';
import people from '../../../data/companyList';

export default class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = {
        companies: people,
        selectedPostId: null,
    }
  }

  postSelectHandler = (id) => {
    this.setState({selectedCompanyId: id});
  }


  render () {
    const companies = this.state.companies.map(post => {
      return <Company 
          key={post.id} 
          entity={post.entity}
          location={post.location}
          contact={post.contact}
          title={post.title}
          email={post.email}
          link={post.link}
          clicked={() => this.postSelectHandler(post.id)}/>;
  })

    return (
      <div className="Companies-body">
        <div className="Companies-header">
          <h1>Browse this list of partner companies who are currently hiring!</h1>
          <section className="Companies">
            {companies}
          </section>
        </div>
      </div>
    )
  }
}
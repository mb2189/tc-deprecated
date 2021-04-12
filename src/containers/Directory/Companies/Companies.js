import React, { useState } from 'react';

import Company from '../../../components/Company/Company';
import './Companies.css';
import companyList from '../../../data/companyList';

const Companies = props => {
  const [ complist, setComplist ] = useState(companyList);

  const companies = complist.map(company => {
    return <Company 
        key={company.id} 
        entity={company.entity}
        location={company.location}
        contact={company.contact}
        title={company.title}
        email={company.email}
        link={company.link}/>;
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

export default Companies;
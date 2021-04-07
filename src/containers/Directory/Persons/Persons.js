import React, { Component } from 'react';

import Person from '../../../components/Person/Person';
import './Persons.css';
import people from '../../../data/people';

export default class Persons extends Component {
  constructor(props) {
    super(props);
    this.state = {
        persons: people,
        selectedPostId: null,
    }
  }

  render () {
    const persons = this.state.persons.map(person => {
      return <Person
          key={person.id} 
          name={person.name}
          email={person.email}
          work={person.work}
          country={person.country}
          department={person.department}
          title={person.title}
          linkedin={person.linkedin}
          clicked={() => this.postSelectHandler(person.id)}/>;
  })

    return (
      <div className="Persons-wrapper">
        <div className="Persons-header">
          <h1>Browse through some of the talented individuals who have worked here and are available and open to new opportunities.</h1>
        </div>
        <section className="Persons">
          {persons}
        </section>  
      </div>
    )
  }
}
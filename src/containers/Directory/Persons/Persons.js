import React, { useState } from 'react';

import Person from '../../../components/Person/Person';
import './Persons.css';
import peopleList from '../../../data/people';

const Persons = props => {
  const [ people, setPeople ] = useState(peopleList);

  const persons = people.map(person => {
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
  });

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

export default Persons;